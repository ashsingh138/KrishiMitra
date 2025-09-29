import React, { useState } from 'react';

// Import our new, separated components and data
import FeatureCard from '../components/implementation/FeatureCard';
import Modal from '../components/implementation/Modal';
import { implementationData } from '../data/ImplementationData';

const ImplementationTab = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="p-8 md:p-12 bg-slate-50 animate-fade-in-up">
      <header className="text-center">
        <h2 className="text-4xl font-bold animated-gradient-text">Technical Implementation</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mt-4 mb-12">
          Our solution is built on a robust, scalable, and modern tech stack. Click on any component below for a detailed technical breakdown.
        </p>
      </header>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {implementationData.map(feature => (
          <FeatureCard 
            key={feature.id} 
            feature={feature} 
            onSelect={setSelectedFeature} 
          />
        ))}
      </div>

      <Modal 
        feature={selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
      />
    </div>
  );
};

export default ImplementationTab;