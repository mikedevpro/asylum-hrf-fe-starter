import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goToGraphs = (view) => navigate(`/graphs?view=${view}`);

  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-4 bg-[#7a7765] text-white">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="font-semibold tracking-wide"
        >
          Human Rights First
        </button>

        <div className="flex gap-8 text-sm">
          <button type="button" onClick={() => navigate('/')}>
            Home
          </button>
          <button type="button" onClick={() => navigate('/graphs')}>
            Graphs
          </button>
          <button type="button" onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#7a7765] text-white text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold">
          Asylum Office Grant Rate Tracker
        </h1>

        <p className="mt-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          The Asylum Office Grant Rate Tracker provides asylum seekers,
          researchers, policymakers, and the public an interactive tool to
          explore USCIS data on Asylum Office decisions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleReadMore}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            Read More
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            Back to Top
          </button>
        </div>
      </section>

      {/* PREVIEW / CHARTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <button
            type="button"
            onClick={() => goToGraphs('office')}
            className="rounded-xl p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <img src={barGraph} alt="Grant rates by office" className="mx-auto mb-4" />
            <p className="font-serif">Search Grant Rates By Office</p>
          </button>

          <button
            type="button"
            onClick={() => goToGraphs('nationality')}
            className="rounded-xl p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <img src={pieChart} alt="Grant rates by nationality" className="mx-auto mb-4" />
            <p className="font-serif">Search Grant Rates By Nationality</p>
          </button>

          <button
            type="button"
            onClick={() => goToGraphs('time')}
            className="rounded-xl p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <img src={lineGraph} alt="Grant rates over time" className="mx-auto mb-4" />
            <p className="font-serif">Search Grant Rates Over Time</p>
          </button>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/graphs')}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            View the Data
          </button>

          <button
            type="button"
            onClick={downloadCSV}
            className="bg-slate-400 text-white px-5 py-2 text-sm font-medium hover:bg-slate-500"
          >
            Download the Data
          </button>
        </div>

        {/* Decorative image (optional, since you imported it) */}
        <div className="mt-14">
          <img
            src={paperStack}
            alt="Stack of papers"
            className="mx-auto max-h-64 w-full max-w-4xl object-cover rounded-2xl"
          />
        </div>

        {/* Assignment text */}
        <div className="mt-6 text-center text-xs text-slate-500">
          {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
        </div>
      </section>
    </div>
  );
};
