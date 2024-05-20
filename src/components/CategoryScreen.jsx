import React from 'react';

const CategoryScreen = ({ onSelectCategory }) => {
  return (
    <div id="category-screen">
      <h1>Never Have I Ever</h1>
      <div className="categories">
        <button data-category="popular" onClick={() => onSelectCategory('popular')}>Popular</button>
        <button data-category="teens" onClick={() => onSelectCategory('teens')}>Teens</button>
        <button data-category="party" onClick={() => onSelectCategory('party')}>Party</button>
        <button data-category="couple" onClick={() => onSelectCategory('couple')}>Couple</button>
        <button data-category="normal" onClick={() => onSelectCategory('normal')}>Normal</button>
      </div>
    </div>
  );
};

export default CategoryScreen;
