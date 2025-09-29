import React from 'react';
import GamificationFlowchart from '../components/solutionslogic/GamificationFlowChart';
import CropAdvisoryFlowchart from '../components/solutionslogic/CropAdvisoryFlowChart';
import PestDetectionFlowChart  from '../components/solutionslogic/PestDetectionFlowChart';
import SpectralCropHealth from '../components/solutionslogic/SpectralCropHealth';
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
        type: 'details',
        longDescription: 'To build consumer trust and enable premium pricing for quality produce, this system uses blockchain to create an immutable record of a product\'s journey. Each batch of produce is tokenized, and its data is stored transparently.',
        workflow: ["A farmer registers a harvest batch via the app, which calls a function on our Solidity smart contract.","A unique ERC-721 token (NFT) representing the batch is minted on an Ethereum-compatible blockchain (e.g., Polygon).","Key data like harvest date, location, organic certification, and processing steps are logged as transactions.","A QR code linked to the token\'s address is generated. Consumers scan it to see the product\'s full history."],
        techStack: ['Solidity', 'Hardhat/Truffle', 'Ethers.js', 'Polygon'],
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