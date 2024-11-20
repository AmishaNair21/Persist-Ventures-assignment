"use client"
// src/components/apiTest.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, setUserMetrics, setError } from '../redux/features/userSlice';
import { RootState } from '../redux/store';

const ApiTest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // Dispatch loading state
    dispatch(startLoading());

    axios
      .get('/api/proxy')
      .then((response) => {
        // Assuming the response structure matches your expected data
        const { daily, monthly, allTime, monthlyChartData } = response.data;
        dispatch(setUserMetrics({ daily, monthly, allTime, monthlyChartData }));
      })
      .catch((err) => {
        dispatch(setError('Failed to fetch data'));
        console.error('Error fetching data:', err);
      });
  }, [dispatch]);

  if (user.loading) {
    return <div>Loading...</div>;
  }

  if (user.error) {
    return <div>{user.error}</div>;
  }

  return (
    <div>
      <h1>User Metrics</h1>
      <div>
        <h2>Daily Metrics</h2>
        {user.daily && (
          <ul>
            <li>Total User: {user.daily.totalUser}</li>
            <li>Total Referral: {user.daily.totalReferral}</li>
            <li>Active User: {user.daily.activeUser}</li>
            <li>Creator: {user.daily.creator}</li>
          </ul>
        )}

        <h2>Monthly Metrics</h2>
        {user.monthly && (
          <ul>
            <li>Total User: {user.monthly.totalUser}</li>
            <li>Total Referral: {user.monthly.totalReferral}</li>
            <li>Active User: {user.monthly.activeUser}</li>
            <li>Creator: {user.monthly.creator}</li>
          </ul>
        )}

        <h2>All Time Metrics</h2>
        {user.allTime && (
          <ul>
            <li>Total User: {user.allTime.totalUser}</li>
            <li>Total Referral: {user.allTime.totalReferral}</li>
            <li>Active User: {user.allTime.activeUser}</li>
            <li>Creator: {user.allTime.creator}</li>
          </ul>
        )}

        <h2>Monthly Chart Data</h2>
        {user.monthlyChartData && (
          <div>
            {/* You can integrate your charting library here (e.g., Chart.js, Recharts) */}
            <pre>{JSON.stringify(user.monthlyChartData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiTest;






