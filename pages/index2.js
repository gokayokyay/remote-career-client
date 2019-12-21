import React from 'react';

import Link from '../src/Link';
import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import Showcase from '../src/components/ClientShowcase';
import FilterSection from '../src/components/FilterSection';
import JobListingSection from '../src/components/JobListingSection';

export default function Index() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Showcase />
      <FilterSection />
      <JobListingSection date="Today" />
    </div>
  );
}
