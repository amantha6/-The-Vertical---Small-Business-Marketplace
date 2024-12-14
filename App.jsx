// src/App.jsx

import React, { useState } from 'react';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import BusinessCard from './components/BusinessCard';
import { categories, businesses } from './data/mockData';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBusinesses = selectedCategory === 'all'
    ? businesses
    : businesses.filter(business => business.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Business Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;