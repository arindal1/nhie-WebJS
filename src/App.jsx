import React, { useState } from 'react';
import CategoryScreen from './components/CategoryScreen';
import StatementScreen from './components/StatementScreen';
import Footer from './components/Footer';

const statements = {
  popular: [
    "Catfished someone.",
    "Gone streaking.",
    "Lied on a first date."
  ],
  teens: [
    "Given up something I love for another person.",
    "Kept a secret from a best friend.",
    "Been ashamed of a best friend."
  ],
  party: [
    "Had my heart broken.",
    "Been cheated on.",
    "Had a threesome."
  ],
  couple: [
    "Gone speed dating.",
    "Tried a flavored condom.",
    "Kissed more than three people in one night."
  ],
  normal: [
    "Turned my underwear inside out so I don’t have to wash it.",
    "Lied about what I was doing on social media.",
    "Been told I snore loudly."
  ]
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('category');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentStatement, setCurrentStatement] = useState('');

  const showRandomStatement = (category) => {
    const categoryStatements = statements[category];
    const randomIndex = Math.floor(Math.random() * categoryStatements.length);
    const randomStatement = categoryStatements[randomIndex];
    setCurrentCategory(category);
    setCurrentStatement(randomStatement);
    setCurrentScreen('statement');
  };

  return (
    <div>
      {currentScreen === 'category' && <CategoryScreen onSelectCategory={showRandomStatement} />}
      {currentScreen === 'statement' && 
        <StatementScreen 
          statement={currentStatement} 
          category={currentCategory} 
          onNewStatement={() => showRandomStatement(currentCategory)} 
          onHome={() => setCurrentScreen('category')} 
        />}
      <Footer />
    </div>
  );
};

export default App;
