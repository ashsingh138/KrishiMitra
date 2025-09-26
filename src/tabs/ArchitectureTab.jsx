import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Database,
  BrainCircuit,
  LayoutDashboard,
  Cloud,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

const Step = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition-shadow"
  >
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h4 className="text-xl font-semibold text-slate-800">{title}</h4>
    <p className="text-slate-600 mt-2">{description}</p>
  </motion.div>
);

const FlowArrow = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex justify-center my-4"
  >
    <ArrowDown className="w-8 h-8 text-indigo-500 animate-bounce" />
  </motion.div>
);

const ArchitectureTab = () => {
  return (
    <div className="p-8 md:p-12 bg-slate-50">
      <h2 className="text-4xl font-bold text-center mb-4 text-green-800">
        System Architecture
      </h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
        Here’s how data flows seamlessly through the Krishi Mitra ecosystem –
        from the farmer to the backend AI engines and back, enabling insights
        for both farmers and officers.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Step 1 */}
        <Step
          icon={Smartphone}
          title="Farmer – KisanSathi App"
          description="Farmers input data (crop, soil, images, queries) through a mobile-first app with offline support."
          delay={0.2}
        />
        <FlowArrow delay={0.3} />

        {/* Step 2 */}
        <Step
          icon={Cloud}
          title="Cloud Infrastructure"
          description="Secure APIs receive farmer data and sync it to the central backend using scalable cloud services."
          delay={0.4}
        />
        <FlowArrow delay={0.5} />

        {/* Step 3 */}
        <Step
          icon={BrainCircuit}
          title="AI/ML Engines"
          description="AI modules process soil, weather, and satellite data for yield prediction, pest detection, and advisories."
          delay={0.6}
        />
        <FlowArrow delay={0.7} />

        {/* Step 4 */}
        <Step
          icon={Database}
          title="Data Lake & Blockchain"
          description="All records are stored securely with blockchain traceability and analytics for transparency."
          delay={0.8}
        />
        <FlowArrow delay={0.9} />

        {/* Step 5 */}
        <Step
          icon={LayoutDashboard}
          title="Officer – Kisan Adhikari Dashboard"
          description="Agriculture officers access aggregated insights, issue advisories, and monitor outbreaks via dashboard."
          delay={1.0}
        />
        <FlowArrow delay={1.1} />

        {/* Step 6 */}
        <Step
          icon={Smartphone}
          title="Insights Back to Farmer"
          description="Processed advisories, alerts, and market intelligence flow back to the farmer’s app in real-time."
          delay={1.2}
        />
      </div>

      {/* Closing loop animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="flex justify-center mt-10"
      >
        <ArrowUp className="w-10 h-10 text-green-600 animate-bounce" />
      </motion.div>
      <p className="text-center text-slate-500 mt-2 italic">
        A continuous feedback loop ensures improvement over time.
      </p>
    </div>
  );
};

export default ArchitectureTab;
