import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MoodifyProvider from './context';
import './tailwind.output.css';

ReactDOM.render(
  <React.StrictMode>
    <MoodifyProvider>
      <App />
    </MoodifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
