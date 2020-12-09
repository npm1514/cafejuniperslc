import React from 'react';
import { hydrate, render } from 'react-dom';
import { TermsPage } from '../pages';

if (window)
  render(
    <TermsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
