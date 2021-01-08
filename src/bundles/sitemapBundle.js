import React from 'react';
import { hydrate, render } from 'react-dom';
import { SitemapPage } from '../pages';

if (window)
  render(
    <SitemapPage data={window.__DATA__} />,
    document.getElementById('app')
  );
