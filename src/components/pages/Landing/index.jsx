// import pieChart from '../../../assets/pie-chart.png';
// import lineGraph from '../../../assets/line-graph.png';
// import barGraph from '../../../assets/bar-graph.png';
// import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  return (
    <div className="flex flex-col items-center bg-white px-6 py-8">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <img
              src={barGraph}
              alt="Grant rates by office"
              className="mx-auto mb-4"
            />
            <p className="font-serif">
              Search Grant Rates By Office
            </p>
          </div>

          <div>
            <img
              src={pieChart}
              alt="Grant rates by nationality"
              className="mx-auto mb-4"
            />
            <p className="font-serif">
              Search Grant Rates By Nationality
            </p>
          </div>

          <div>
            <img
              src={lineGraph}
              alt="Grant rates over time"
              className="mx-auto mb-4"
            />
            <p className="font-serif">
              Search Grant Rates Over Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};