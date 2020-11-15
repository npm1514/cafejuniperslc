import React from 'react';
import { hydrate, render } from 'react-dom';
import Catering from '../pages/CateringPage';

if (window){
  render(
    <Catering data={window.__DATA__} />,
    document.getElementById('app')
  );
}
