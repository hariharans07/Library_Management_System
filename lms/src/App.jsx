import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/start')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="app">
          <h2>CSE Data</h2>
          <table className="data-table">
            <thead>
              <tr>
                {data[0] && Object.keys(data[0]).map((key, i) => (
                  <th key={i}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  {Object.values(item).map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
}

export default App;
