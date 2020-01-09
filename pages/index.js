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
  const { olderJobs, pastMonthJobs, pastWeekJobs, todayJobs } = state;
  const returnToday = () => {
    if (todayJobs && todayJobs.length) {
      return <JobListingSection date="Today" jobs={todayJobs} />;
    }
  };
  const returnPastWeek = () => {
    if (pastWeekJobs && pastWeekJobs.length) {
      return <JobListingSection date="Past Week" jobs={pastWeekJobs} />;
    }
  };
  const returnPastMonth = () => {
    if (pastMonthJobs && pastMonthJobs.length) {
      return <JobListingSection date="Past Month" jobs={pastMonthJobs} />;
    }
  };
  const returnOlder = () => {
    if (olderJobs && olderJobs.length) {
      return <JobListingSection date="Older than one month" jobs={olderJobs} />;
    }
  };
  console.log(state);
  return (
    <div>
      <NavBar />
      <Hero />
      <Showcase />
      <FilterSection />
      {returnToday()}
      {returnPastWeek()}
      {returnPastMonth()}
      {returnOlder()}
      {/* <JobListingSection date="Today" jobs={[]} /> */}
    </div>
  );
}

export default Index;
