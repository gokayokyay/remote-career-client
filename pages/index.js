/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetch from 'isomorphic-unfetch';

import Link from '../src/Link';
import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import Showcase from '../src/components/ClientShowcase';
import FilterSection from '../src/components/FilterSection';
import JobListingSection from '../src/components/JobListingSection';

import { API_ENDPOINT } from '../src/config';
import { getJobs } from '../src/redux/actions';

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  const state = useSelector(state => state.getJobs);
  function returnJobListingSections() {
    if (!state.hasOwnProperty('jobs')) {
      return;
    } else {
      console.log(state);
      let weekAgo = new Date();
      let monthAgo = new Date();
      let today = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      monthAgo.setDate(monthAgo.getDate() - 30);
      
      const todayJobs = [];
      const pastWeekJobs = [];
      const pastMonthJobs = [];
      const olderJobs = [];

      state.jobs.forEach(job => {
        let createdAt = new Date(job.createdAt);
        console.log(createdAt);
        console.log(today);
        if (createdAt.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
          console.log("yas");
        }
      });
    }
  }
  return (
    <div>
      <NavBar />
      <Hero />
      <Showcase />
      <FilterSection />
      {returnJobListingSections()}
      <JobListingSection date="Today" jobs={[]} />
    </div>
  );
}

export default Index;
