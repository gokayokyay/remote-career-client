import React from 'react';

import Link from '../src/Link';
import NavBar from '../src/components/NavBar';
import CreateJobSection from '../src/components/CreateJobSection';
import Grid from '@material-ui/core/Grid';

export default function Index() {
  return (
    <Grid container>
      <NavBar />
      <Grid item xs={12} sm={12} md={7}>
        <CreateJobSection />
      </Grid>
    </Grid>
  );
}
