import React from 'react';
import GamificationFlowchart from '../components/solutionslogic/GamificationFlowChart';
import CropAdvisoryFlowchart from '../components/solutionslogic/CropAdvisoryFlowChart';
import PestDetectionFlowChart  from '../components/solutionslogic/PestDetectionFlowChart';
import SpectralCropHealth from '../components/solutionslogic/SpectralCropHealth';
import BlockchainTraceability from '../components/solutionslogic/BlockChainTracability';
export const implementationData = [
  {
    id: 'crop-advisory',
    title: 'Crop Advisory Engine',
    icon: 'sprout',
    description: 'AI-driven recommendations for crops, fertilizers, and irrigation schedules.',
    modalContent: {
      type: 'component',
      component: <CropAdvisoryFlowchart />,
    }
  },
  {
    id: 'pest-detection',
    title: 'Pest & Disease Detection',
    icon: 'bug',
    description: 'A CNN model to identify 38+ plant diseases from leaf images.',
    modalContent: {
      type: 'component',
      component: <PestDetectionFlowChart />,
      
    }
  },
  {
    id: 'gamification',
    title: 'Gamified Sustainability',
    icon: 'award',
    description: 'Interactive flowchart detailing the system for encouraging sustainable practices.',
    modalContent: {
      type: 'component',
      component: <GamificationFlowchart />,
    }
  },
  {
    id: 'spectral-analysis',
    title: 'Spectral Analysis Engine',
    icon: 'satellite',
    description: 'Processes Sentinel-2 satellite imagery to calculate NDVI for monitoring crop health.',
    modalContent: {
        type: 'component',
        component: <SpectralCropHealth />,
    }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Traceability',
    icon: 'qr-code',
    description: 'A Solidity-based smart contract for farm-to-fork produce traceability.',
    modalContent: {
        type: 'component',
        component: <BlockchainTraceability />,
    }
  },
  
  {
    id: 'tech-stack',
    title: 'Full Tech Stack',
    icon: 'layers',
    description: 'Overview of the frontend, backend, database, and cloud technologies used.',
    modalContent: {
        type: 'details',
        longDescription: 'Our architecture is designed for scalability, performance, and seamless integration of complex services. We use a microservices-based approach to ensure that each component can be developed and scaled independently.',
        techStack: ['Frontend: React, React Native, Tailwind CSS','Backend: FastAPI (Python)','AI/ML: TensorFlow, Keras, Scikit-learn','Database: PostgreSQL with PostGIS extension','Blockchain: Solidity on Polygon','Cloud & DevOps: Docker, AWS (EC2, S3, RDS)','APIs: Google Earth Engine, Open-Meteo, Agmarknet'],
    }
  },
];