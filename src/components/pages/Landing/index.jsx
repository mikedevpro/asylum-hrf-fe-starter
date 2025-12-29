import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();
  const goToGraphs = (view) => {
    navigate('/graphs?view=${view}');
  }

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#7a7765] text-white">
        <div className="flex items-center gap-2 font-semibold">
          <span>Human Rights First</span>
        </div>

        <div className="flex gap-6 text-sm">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/graphs')}>Graphs</button>
          <button onClick={() => navigate('/login')}>Log In</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#7a7765] text-white text-center px-6 py-5">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold">
          Asylum Office Grant Rate Tracker
        </h1>

        <p className="mt-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          The Asylum Office Grant Rate Tracker provides asylum seekers,
          researchers, policymakers, and the public an interactive tool to
          explore USCIS data on Asylum Office decisions.
        </p>
      </section>

      {/* CHART PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-8">
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

        {/* ACTION BUTTONS */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => navigate('/graphs')}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            View the Data
          </button>

          <button
            onClick={downloadCSV}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            Download the Data
          </button>
        </div>

        {/* DEBUG / EASTER EGG */}
        <div className="mt-6 text-center text-xs text-slate-500">
          {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
        </div>
      </section>
    </div>
  );
};
