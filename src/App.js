
import React, { useState } from 'react';

const JSONViewer = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setJsonData(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        setJsonData(null);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h1>JSON Viewer</h1>
      <input type="file" accept=".json" onChange={handleFileChange} />
      {jsonData && (
        <div>
          <h2>JSON Data:</h2>
          <ul>
            {jsonData.map((item, index) => (
              <li key={index}>
                <pre>{JSON.stringify(item, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JSONViewer;