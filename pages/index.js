/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import Showcase from '../src/components/ClientShowcase';
import FilterSection from '../src/components/FilterSection';
import JobListingSection from '../src/components/JobListingSection';
import Footer from '../src/components/Footer';

import { getJobs } from '../src/redux/actions';

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  const state = useSelector(st => st.getJobs);
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
      <Footer />
    </div>
  );
}

export default Index;
