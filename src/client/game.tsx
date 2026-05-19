import './index.css';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

type Report = {
  id: number;
  title: string;
  toxicity: number;
  spamRisk: string;
  recommendation: string;
};

const App = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {

    // Fake moderation data for MVP
    setReports([
      {
        id: 1,
        title: "Crypto scam detected",
        toxicity: 87,
        spamRisk: "High",
        recommendation: "Remove Post"
      },
      {
        id: 2,
        title: "Possible harassment",
        toxicity: 72,
        spamRisk: "Medium",
        recommendation: "Warn User"
      }
    ]);

  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        🚨 ModPilot AI
      </h1>

      <div className="grid gap-4">

        {reports.map(report => (

          <div
            key={report.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
          >

            <h2 className="text-2xl font-semibold mb-2">
              {report.title}
            </h2>

            <p>Toxicity Score: {report.toxicity}%</p>
            <p>Spam Risk: {report.spamRisk}</p>

            <p className="mt-2 text-orange-400">
              Suggested Action:
              {report.recommendation}
            </p>

            <div className="flex gap-3 mt-4">

              <button className="bg-green-600 px-4 py-2 rounded">
                Approve
              </button>

              <button className="bg-red-600 px-4 py-2 rounded">
                Remove
              </button>

              <button className="bg-yellow-600 px-4 py-2 rounded">
                Warn
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);