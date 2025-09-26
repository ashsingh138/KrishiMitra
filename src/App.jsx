import React, { useState } from 'react';

// Import all pages and components
import Homepage from './tabs/Homepage';
import AboutTab from './tabs/AboutTab';
import SolutionTab from './tabs/SolutionTab';
import ScreensTab from './tabs/ScreensTab';
import VideoTab from './tabs/VideoTab';
import ImplementationTab from './tabs/ImplementationTab';
import ResourcesTab from './tabs/ResourcesTab';
import ArchitectureTab from './tabs/ArchitectureTab';
import Footer from './components/Footer'; // Assuming you have a Footer component

// The TABS constants object remains the same
const TABS = {
    ABOUT: 'About',
    SOLUTION: 'Solution',
    ARCHITECTURE:'Sytem Architecture',
    SCREENS: 'Mobile App & Screens',
    VIDEO: 'Prototype Video',
    IMPLEMENTATION: 'Full Implementation Logic',
    RESOURCES: 'Resources & References'
};

// NEW: A component map that directly maps tab names to their components.
// This is a cleaner alternative to a switch statement.
const TAB_COMPONENTS = {
    [TABS.ABOUT]: AboutTab,
    [TABS.SOLUTION]: SolutionTab,
    [TABS.ARCHITECTURE]: ArchitectureTab,
    [TABS.SCREENS]: ScreensTab,
    [TABS.VIDEO]: VideoTab,
    [TABS.IMPLEMENTATION]: ImplementationTab,
    [TABS.RESOURCES]: ResourcesTab,
};

export default function App() {
    const [showHomepage, setShowHomepage] = useState(true);
    const [activeTab, setActiveTab] = useState(TABS.ABOUT);

    // This function can be passed to child tabs to allow them to trigger navigation
    const handleNavigate = (tab) => {
        setActiveTab(tab);
        window.scrollTo(0, 0); // Scroll to the top of the page on tab change
    };
    
    // The currently active component is now found by a direct lookup in our map.
    const ActiveTabComponent = TAB_COMPONENTS[activeTab] || AboutTab;

    if (showHomepage) {
        return <Homepage onExplore={() => setShowHomepage(false)} />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
                <nav className="container mx-auto px-4">
                    <ul className="flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto whitespace-nowrap">
                        <li className="py-4 font-bold text-green-700 cursor-pointer" onClick={() => setShowHomepage(true)}>Krishi Mitra 🌱</li>
                        
                        {Object.values(TABS).map(tab => (
                            <li key={tab}>
                                <button 
                                    onClick={() => handleNavigate(tab)}
                                    className={`p-4 text-sm md:text-base font-semibold border-b-4 transition-colors ${activeTab === tab ? 'border-green-500 text-green-600' : 'border-transparent text-slate-500 hover:text-green-600'}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            
            <main className="flex-grow">
                {/* Render the active tab component.
                  We pass the `handleNavigate` function and the TABS object as props.
                  This allows a button in the 'About' tab to switch to the 'Solution' tab, for example.
                */}
                <ActiveTabComponent onNavigate={handleNavigate} TABS={TABS} />
            </main>

            <Footer />
        </div>
    );
}