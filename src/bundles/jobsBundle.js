import React from 'react';
import { hydrate, render } from 'react-dom';
import { JobsPage } from '../pages';

if (window)
  render(
    <JobsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
