
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = "your-openai-key"

@app.route('/generate', methods=['POST'])
def generate_doc():
    data = request.json
    role = data.get('role', 'Software Engineer')
    company = data.get('company', 'Tech Corp')
    response = {
        "resume": f"Generated resume content for {role} at {company}.",
        "cover_letter": f"Generated cover letter content for {role} at {company}."
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5001)
