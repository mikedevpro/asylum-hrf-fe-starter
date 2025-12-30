import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const API_BASE = 'https://asylum-be.onrender.com';

/**
 * Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 *
 * NOTE: Only changes in this file.
 */
const useAppContextProvider = () => {
  // Start empty; data comes from API (and/or localStorage via your hook)
  const [graphData, setGraphData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    const res = await axios.get(`${API_BASE}/fiscalSummary`);
    return res.data;
  };

  const getCitizenshipResults = async () => {
    const res = await axios.get(`${API_BASE}/citizenshipSummary`);
    return res.data;
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    try {
      const fiscalResults = await getFiscalData();
      const citizenshipResults = await getCitizenshipResults();

      setGraphData((prevData) => ({
        ...prevData,
        fiscalResults,
        citizenshipResults,

        // Many parts of the app often use "yearResults" to populate year dropdowns.
        // If your fiscal endpoint is the fiscal-year summary, mirroring it here
        // keeps existing components working without changes.
        yearResults: Array.isArray(fiscalResults) ? fiscalResults : prevData?.yearResults ?? [],
      }));
    } catch (err) {
      // Keep behavior non-breaking: just log and keep existing graphData
      console.error('Failed to fetch API data:', err);
    } finally {
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () =>
    graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  // OPTIONAL: auto-fetch once on first load if there's no stored data yet
  useEffect(() => {
    const hasData =
      (graphData?.fiscalResults && Array.isArray(graphData.fiscalResults) && graphData.fiscalResults.length > 0) ||
      (graphData?.citizenshipResults &&
        Array.isArray(graphData.citizenshipResults) &&
        graphData.citizenshipResults.length > 0);

    if (!hasData) {
      setIsDataLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

