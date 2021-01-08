import React from 'react';
import { hydrate, render } from 'react-dom';
import { FourOhFourPage } from '../pages';

if (window)
  render(
    <FourOhFourPage data={window.__DATA__} />,
    document.getElementById('app')
  );
