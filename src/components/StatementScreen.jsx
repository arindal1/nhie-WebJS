import React from 'react';

const StatementScreen = ({ statement, category, onNewStatement, onHome }) => {
  return (
    <div id="statement-screen">
      <button id="home-button" onClick={onHome}>Home</button>
      <h1>Never Have I Ever...</h1>
      <p id="statement">{statement}</p>
      <button id="new-statement" onClick={onNewStatement}>New Statement</button>
    </div>
  );
};

export default StatementScreen;
