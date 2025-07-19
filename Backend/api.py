# api.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber
from io import BytesIO
import os
import spacy.cli
spacy.cli.download("en_core_web_sm")
spacy.cli.link("en_core_web_sm", "en_core_web_sm", force=True)  
from src.analyze_text import analyze_text
from src.esg_scorecard import perform_analysis
from src.memory_store import memory_store

app = Flask(__name__)
#CORS(app)  # Enable CORS for all routes

CORS(app, resources={r"/*": {"origins": [
    "https://esg-risk-reporter.vercel.app"
]}})


def extract_text_from_pdf(file_stream):
    try:
        text = ""
        with pdfplumber.open(file_stream) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
        return text.strip()
    except Exception as e:
        print("Error extracting text from PDF:", str(e))
        raise RuntimeError("Failed to extract text from PDF.")

@app.route('/api/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            print("No file key in request.files")  # ✅ Debug
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        if file.filename == '':
            print("Filename is empty")  # ✅ Debug
            return jsonify({"error": "No selected file"}), 400

        file_stream = BytesIO(file.read())
        print("Reading file stream...")  # ✅ Debug

        text = extract_text_from_pdf(file_stream)
        print("Extracted text:", text[:100])  # ✅ Only print preview

        if not text:
            print("Text is empty")  # ✅ Debug
            return jsonify({"error": "No text found in the PDF"}), 400

        memory_store["extracted_text"] = text
        perform_analysis(text)
        analyze_text(text)

        return jsonify({"message": "File uploaded and analysis completed"}), 200

    except Exception as e:
        print("❌ ERROR during upload_file:", e)  # ✅ Show traceback
        return jsonify({"error": str(e)}), 500

@app.route('/api/esg-summary', methods=['GET'])
def get_esg_summary():
    summary = memory_store.get("summary_text", "")
    return jsonify({"summary": summary})

@app.route('/api/esg-analysis', methods=['GET'])
def get_esg_analysis():
    df = memory_store.get("analysis_table")
    if df is not None:
        # Rename all columns to match frontend expectations
        df = df.rename(columns={
            "Category": "category",
            "Risk Percentage (%)": "risk_percentage",
            "Term Percentage (%)": "term_percentage",
            "Total ESG Terms Matched": "total_esg_terms_matched",
            "Unique Keywords Matched": "unique_keywords_matched",
            "Total Keywords in Dictionary": "total_keywords_in_dictionary",
            "Weighted ESG Risk Score": "score"
        })
        # Fill missing values with defaults
        df = df.fillna({
            "category": "Unknown Category",
            "risk_percentage": 0,
            "term_percentage": 0,
            "total_esg_terms_matched": 0,
            "unique_keywords_matched": 0,
            "total_keywords_in_dictionary": 0,
            "score": 0
        })
        return jsonify(df.to_dict(orient="records"))
    return jsonify([])

@app.route('/api/esg-risk-level', methods=['GET'])
def get_esg_risk_level():
    risk = memory_store.get("risk_level", "Unknown")
    return jsonify({"risk_level": risk})

@app.route('/api/risk-keywords', methods=['GET'])
def get_risk_keywords():
    counts = memory_store.get("risk_keywords_count", {})
    return jsonify(dict(counts))

@app.route('/api/risk-sentences', methods=['GET'])
def get_risk_sentences():
    sentences = memory_store.get("risk_sentences", [])
    return jsonify(sentences)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the ESG Risk Assessment API"})

if __name__ == '__main__':
    #app.run()
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
