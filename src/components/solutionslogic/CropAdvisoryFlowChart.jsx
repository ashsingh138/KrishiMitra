import React, { useState, useRef, useLayoutEffect, forwardRef } from 'react';

// --- Data & Content for each node ---
// The layout is now defined in the data, just like GamificationFlowchart
const flowchartNodes = [
  { id: 'ingestion', type: 'title', position: { side: 'center', top: '2%' }, content: <h2 className="text-2xl text-center section-title">Data Ingestion</h2> },
  { id: 'card1', type: 'card', position: { side: 'left', top: '8%' }, content: <><h3 className="font-bold text-lg text-white">Farmer Input 📱</h3><p className="text-sm text-slate-400">Manual soil test, cropping history.</p><p className="mt-2 text-sm"><strong>Data In:</strong> <span className="data-point">Soil pH</span> <span className="data-point">NPK</span></p><p><strong>Tech:</strong> <span className="tech-tag">React Native</span></p></> },
  { id: 'card2', type: 'card', position: { side: 'left', top: '20%' }, content: <><h3 className="font-bold text-lg text-white">APIs 🌦️</h3><p className="text-sm text-slate-400">Fetches soil + weather info.</p><p className="mt-2 text-sm"><strong>Sources:</strong> <span className="tech-tag">Tomorrow.io</span> <span className="tech-tag">ISRIC SoilGrids</span></p></> },
  
  { id: 'orchestration', type: 'title', position: { side: 'center', top: '32%' }, content: <h2 className="text-2xl text-center section-title">Core Orchestration</h2> },
  { id: 'card3', type: 'card', position: { side: 'right', top: '38%' }, content: <><h3 className="font-bold text-lg text-white">Backend Gateway ⚡</h3><p className="text-sm text-slate-400">Authenticates, routes data.</p><p className="mt-2"><strong>Tech:</strong> <span className="tech-tag">Node JS</span> <span className="tech-tag">PostgreSQL</span></p></> },
  
  { id: 'engines', type: 'title', position: { side: 'center', top: '48%' }, content: <h2 className="text-2xl text-center section-title">Advisory Engines</h2> },
  { id: 'card4', type: 'card', position: { side: 'left', top: '54%' }, content: <><h3 className="font-bold text-lg text-white">Crop Rec 🌱</h3><p className="text-sm text-slate-400">Suggests optimal crop to sow.</p><p className="mt-2"><strong>Model:</strong> Random Forest</p></> },
  { id: 'card5', type: 'card', position: { side: 'left', top: '65%' }, content: <><h3 className="font-bold text-lg text-white">Fertilizer 💧</h3><p className="text-sm text-slate-400">Personalized NPK dosage.</p><p className="mt-2"><strong>Model:</strong> XGBoost</p></> },

  { id: 'output', type: 'title', position: { side: 'center', top: '75%' }, content: <h2 className="text-2xl text-center section-title">Output & Feedback</h2> },
  { id: 'card8', type: 'card', position: { side: 'right', top: '81%' }, content: <><h3 className="font-bold text-lg text-white">Advisory Cards 📋</h3><p className="text-sm text-slate-400">Simple visual steps for farmer.</p><p className="mt-2"><strong>Output:</strong> <span className="data-point">Sow in 5 days</span></p></> },
  { id: 'card10', type: 'card', position: { side: 'right', top: '91%' }, content: <><h3 className="font-bold text-lg text-white">Feedback 🔄</h3><p className="text-sm text-slate-400">Farmer confirms actions → models improve.</p></> },
];

const connections = [
    { from: ['card1', 'card2'], to: 'card3' },
    { from: ['card3'], to: 'card4' },
    { from: ['card4'], to: 'card5' },
    { from: ['card5'], to: 'card8' },
    { from: ['card8'], to: 'card10' },
];

const Card = forwardRef(({ id, children, isVisible }, ref) => (
  <div id={id} ref={ref} className={`flow-card ${isVisible ? 'is-visible' : ''} w-72`}>
    {children}
  </div>
));

const Title = ({ id, children, isVisible, style }) => (
    <div id={id} className={`w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} style={style}>
        {children}
    </div>
);

const CropAdvisoryFlowchart = () => {
    const containerRef = useRef(null);
    const nodeRefs = useRef({});
    const [arrows, setArrows] = useState([]);
    const [visibleNodes, setVisibleNodes] = useState(new Set());

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleNodes((prev) => new Set(prev).add(entry.target.id));
                }
            });
        }, { threshold: 0.2 });
        const nodes = Object.values(nodeRefs.current).filter(Boolean);
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        function draw() {
            const containerNode = containerRef.current;
            if (!containerNode) return;

            const center_x = containerNode.clientWidth / 2;
            const side_offset = containerNode.clientWidth > 768 ? 150 : 50;
            
            // Position nodes first
            flowchartNodes.forEach(node => {
                const el = nodeRefs.current[node.id];
                if (!el) return;
                el.style.top = node.position.top;
                if(node.position.side === 'left') {
                    el.style.left = `${center_x - el.offsetWidth - side_offset}px`;
                } else if (node.position.side === 'right') {
                    el.style.left = `${center_x + side_offset}px`;
                } else { // center
                    el.style.left = `${center_x - el.offsetWidth / 2}px`;
                }
            });
            
            // Then draw arrows
            const svgRect = containerNode.getBoundingClientRect();
            if (!svgRect || svgRect.width === 0) return;
            const newArrows = [];
            connections.forEach(conn => {
                conn.from.forEach(fromId => {
                    const fromEl = nodeRefs.current[fromId];
                    const toEl = nodeRefs.current[conn.to];
                    if (!fromEl || !toEl) return;

                    const fromRect = fromEl.getBoundingClientRect();
                    const toRect = toEl.getBoundingClientRect();
                    
                    const fromIsLeft = fromEl.style.left.startsWith(`${center_x - fromEl.offsetWidth - side_offset}`);
                    const toIsLeft = toEl.style.left.startsWith(`${center_x - toEl.offsetWidth - side_offset}`);

                    const startX = (fromIsLeft ? fromRect.right : fromRect.left) - svgRect.left;
                    const startY = fromRect.top - svgRect.top + fromRect.height / 2;
                    const endX = (toIsLeft ? toRect.right : toRect.left) - svgRect.left;
                    const endY = toRect.top - svgRect.top + toRect.height / 2;
                    
                    const curveX1 = startX + (endX - startX) * 0.5;
                    const d = `M ${startX},${startY} C ${curveX1},${startY} ${curveX1},${endY} ${endX},${endY}`;
                    newArrows.push({ d, from: fromId, to: conn.to });
                });
            });
            setArrows(newArrows);
        }
        
        const timerId = setTimeout(draw, 100);
        const resizeObserver = new ResizeObserver(draw);
        const containerNode = containerRef.current;
        if (containerNode) resizeObserver.observe(containerNode);
        
        return () => {
            clearTimeout(timerId);
            if (containerNode) resizeObserver.unobserve(containerNode);
        };
    }, [visibleNodes]);

    return (
        <div className="flowchart-dark-background w-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 section-title">
                Smart Crop Advisory Flow
            </h1>
            <div ref={containerRef} className="relative w-full max-w-7xl mx-auto" style={{ minHeight: '1800px' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-slate-700/50 rounded-full"></div>
                <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                    <defs>
                        <marker id="arrowhead-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="url(#arrow-gradient)" /></marker>
                        <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:"#4f46e5"}} /><stop offset="100%" style={{stopColor:"#a855f7"}} /></linearGradient>
                    </defs>
                    {arrows.map((arrow, i) => (
                        <g key={i} className={`arrow ${visibleNodes.has(arrow.to) ? 'is-visible' : ''}`}><path className="arrow-path" d={arrow.d} stroke="url(#arrow-gradient)" /></g>
                    ))}
                </svg>

                {flowchartNodes.map(node => {
                    const props = {
                        id: node.id,
                        key: node.id,
                        ref: el => (nodeRefs.current[node.id] = el),
                        isVisible: visibleNodes.has(node.id),
                    };
                    if (node.type === 'card') return <Card {...props}>{node.content}</Card>;
                    if (node.type === 'title') return <Title {...props} style={{ position: 'absolute', top: node.position.top }}>{node.content}</Title>;
                    return null;
                })}
            </div>
        </div>
    );
};

export default CropAdvisoryFlowchart;