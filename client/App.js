
import React, { useState } from 'react';

function App() {
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [resume, setResume] = useState('');
  const [cover, setCover] = useState('');

  const generateDocs = async () => {
    const response = await fetch('http://localhost:5001/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, company })
    });
    const data = await response.json();
    setResume(data.resume);
    setCover(data.cover_letter);
  };

  return (
    <div style={{ padding: 30, fontFamily: 'Arial' }}>
      <h1>🧠 QuickDocs – AI Resume & Cover Letter</h1>
      <input
        placeholder="Job Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: 10, width: 300, marginRight: 10 }}
      />
      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />
      <br /><br />
      <button onClick={generateDocs} style={{ padding: 10, width: 200 }}>Generate</button>

      <div style={{ marginTop: 30 }}>
        <h2>📄 Resume</h2>
        <pre>{resume}</pre>
        <h2>📨 Cover Letter</h2>
        <pre>{cover}</pre>
      </div>
    </div>
  );
}

export default App;
