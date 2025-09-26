import React from 'react';
import AccordionItem from '../components/AccordionItem';

const ImplementationTab = () => {
    return (
        <div className="p-8 md:p-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-green-800">Technical Deep Dive</h2>
            <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
                Our solution is built on a robust, scalable, and modern tech stack, integrating multiple data sources and AI models.
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
                <AccordionItem title="AI/ML Engines" icon="brain-circuit">
                    <ul>
                        <li><strong>Advisory Engine:</strong> Utilizes historical weather data, crop type, and soil data (from SoilGrids API) to generate personalized farming schedules.</li>
                        <li><strong>Pest Detection Engine:</strong> A Convolutional Neural Network (CNN) trained on the PlantVillage dataset to identify 38+ plant diseases from leaf images with over 95% accuracy.</li>
                        <li><strong>Spectral Analysis Engine:</strong> Processes Sentinel-2 satellite imagery via Google Earth Engine to calculate NDVI (Normalized Difference Vegetation Index) for monitoring crop health and detecting stress areas.</li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Blockchain Traceability" icon="qr-code">
                   <p>We use a Solidity-based smart contract on an Ethereum-compatible blockchain. The flow is as follows:</p>
                    <ol>
                        <li>Farmer registers a batch of produce via the app, creating a unique token (NFT) on the blockchain.</li>
                        <li>Key data (harvest date, location, organic certification) is stored immutably.</li>
                        <li>A QR code linked to this token is generated.</li>
                        <li>Consumers scan the QR code to view the entire provenance of the product, ensuring transparency and trust.</li>
                    </ol>
                </AccordionItem>
                 <AccordionItem title="Datasets & APIs" icon="link">
                    <ul>
                        <li><strong>Sentinel-2 API:</strong> For near real-time, high-resolution satellite imagery for spectral analysis.</li>
                        <li><strong>Open-Meteo API:</strong> Provides hyperlocal, accurate weather forecasts.</li>
                        <li><strong>Agmarknet API:</strong> Government portal for real-time market prices from various mandis across India.</li>
                        <li><strong>SoilGrids API:</strong> Global soil information system for soil type and property data.</li>
                    </ul>
                </AccordionItem>
                 <AccordionItem title="Tech Stack" icon="layout-dashboard">
                    <ul>
                        <li><strong>Frontend:</strong> React (Mobile App with React Native, Web with Next.js) for a reactive UI.</li>
                        <li><strong>Backend:</strong> FastAPI (Python) for high-performance API services and easy integration with ML libraries.</li>
                        <li><strong>ML Framework:</strong> TensorFlow & Keras for building and deploying our CNN models.</li>
                        <li><strong>Database:</strong> PostgreSQL with PostGIS for storing geospatial data efficiently.</li>
                        <li><strong>Cloud & DevOps:</strong> Docker for containerization, deployed on AWS for scalability.</li>
                    </ul>
                </AccordionItem>
            </div>
        </div>
    );
};

export default ImplementationTab;