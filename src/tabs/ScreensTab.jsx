import React, { useState, useMemo } from "react";
import Icon from "../components/Icon";
import PhoneMockup from "../components/PhoneMockup";
import BrowserMockup from "../components/BrowserMockup";

// --- UI Content for each KisanSaathi Mobile Screen (No Changes Here) ---
const LoginScreen = () => (
  <div className="h-full flex flex-col font-sans bg-white">
    <div className="w-full h-48">
      <img
        src="https://i.imgur.com/g82o101.png"
        alt="Farm illustration"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Digital Krishi Officer</h1>
      <p className="text-sm text-gray-500">
        Empowering Farmers, Growing Futures
      </p>
    </div>
    <div className="px-6 space-y-4 flex-grow">
      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full p-3 border border-gray-300 rounded-lg text-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border border-gray-300 rounded-lg text-sm"
      />
      <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg">
        LOGIN
      </button>
      <button className="w-full text-gray-600 font-semibold py-2">
        Create Account
      </button>
    </div>
    <p className="text-center text-xs text-gray-400 p-4">
      Available in: English | हिंदी | मराठी
    </p>
  </div>
);
const HomeScreen = () => (
  <div className="h-full flex flex-col font-sans bg-gray-50">
    <div className="p-3">
      <h1 className="text-lg font-bold text-center">Hello, Ramesh</h1>
    </div>
    <div className="p-3">
      <div className="bg-white rounded-xl shadow p-3 flex items-center gap-3">
        <Icon name="cloud-sun" className="w-10 h-10 text-yellow-500" />
        <div className="flex-grow">
          <p className="font-bold">29°C - Sunny</p>
          <p className="text-xs text-gray-500">Kharagpur, West Bengal</p>
        </div>
      </div>
    </div>
    <div className="p-3">
      <h2 className="font-bold">Your Tasks</h2>
      <div className="bg-white rounded-xl shadow p-3 mt-1 text-sm">
        <p>• Apply fertilizer to Wheat Field B</p>
        <p className="mt-1">• Check pest alert in Plot C</p>
      </div>
    </div>
    <div className="p-3">
      <h2 className="font-bold">Field Health Snapshot</h2>
      <div className="bg-white rounded-xl shadow p-3 mt-1">
        <img
          src="https://i.imgur.com/eBf2j06.png"
          className="w-full rounded-md"
          alt="Field health mini map"
        />
      </div>
    </div>
    <div className="flex-grow"></div>
    <div className="flex justify-around items-center border-t bg-white py-1">
      <div className="text-center text-green-600">
        <Icon name="home" className="w-6 h-6 mx-auto" />
        <p className="text-xs font-semibold">Home</p>
      </div>
      <div className="text-center text-gray-500">
        <Icon name="map" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Maps</p>
      </div>
      <div className="text-center text-gray-500">
        <Icon name="file-text" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Advisory</p>
      </div>
      <div className="text-center text-gray-500">
        <Icon name="user" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Profile</p>
      </div>
    </div>
  </div>
);
const HealthMapScreen = () => (
  <div className="bg-white h-full flex flex-col font-sans">
    <div className="p-3 border-b">
      <h1 className="text-lg font-bold text-gray-800 text-center">
        Your Fields: Health Maps
      </h1>
    </div>
    <div className="p-3 flex space-x-2">
      <button className="flex-1 bg-green-600 text-white text-xs font-semibold py-2 px-2 rounded-full">
        NDVI (Health)
      </button>
      <button className="flex-1 bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-2 rounded-full">
        Moisture (NDMI)
      </button>
      <button className="flex-1 bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-2 rounded-full">
        Compare
      </button>
    </div>
    <div className="flex-grow p-2 relative">
      <img
        src="https://i.imgur.com/vAbYR3v.png"
        alt="NDVI Health Map"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="m-3 p-2 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start">
      <Icon
        name="alert-triangle"
        className="w-8 h-8 text-red-600 mr-2 flex-shrink-0"
      />
      <div className="flex-grow">
        <p className="font-bold text-sm text-red-800">Hotspot Alert!</p>
        <p className="text-xs text-red-700">
          Plot B shows significant stress. Check for pests.
        </p>
      </div>
    </div>
    <div className="flex justify-around items-center border-t border-gray-200 py-1">
      <div className="text-center text-gray-500">
        <Icon name="home" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Home</p>
      </div>
      <div className="text-center text-green-600">
        <Icon name="map" className="w-6 h-6 mx-auto" />
        <p className="text-xs font-semibold">Maps</p>
      </div>
      <div className="text-center text-gray-500">
        <Icon name="file-text" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Advisory</p>
      </div>
      <div className="text-center text-gray-500">
        <Icon name="user" className="w-6 h-6 mx-auto" />
        <p className="text-xs">Profile</p>
      </div>
    </div>
  </div>
);
const SoilWeatherScreen = () => (
  <div className="h-full flex flex-col font-sans bg-gray-50">
    <div className="p-3 bg-green-500 text-white">
      <h1 className="text-lg font-bold text-center">Real-time Soil Health</h1>
    </div>
    <div className="p-3">
      <div className="bg-white rounded-lg shadow p-3">
        <img
          src="https://i.imgur.com/P0hVe6p.png"
          alt="Soil health chart"
          className="w-full"
        />
      </div>
    </div>
    <div className="p-3">
      <div className="bg-white rounded-lg shadow p-3">
        <h2 className="font-bold mb-2">Localized Weather Alerts</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <Icon name="alert-triangle" className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-sm font-semibold">Heavy Rain Warning</p>
          </div>
          <div className="flex items-center">
            <Icon name="cloud-sun" className="w-5 h-5 text-yellow-500 mr-2" />
            <p className="text-sm">Pest Risk Alert: High</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-grow"></div>
    <div className="p-3">
      <button className="w-full bg-green-600 text-white font-bold py-3 rounded-full">
        Voice Query
      </button>
    </div>
  </div>
);
const PestDetectScreen = () => (
  <div className="h-full flex flex-col font-sans bg-gray-50">
    <div className="p-3 bg-white border-b flex items-center">
      <Icon name="arrow-left" className="w-6 h-6 mr-3" />
      <h1 className="text-lg font-bold">Pest/Disease Detect</h1>
    </div>
    <div className="p-4 flex-grow">
      <div className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex flex-col items-center justify-center">
        <Icon name="camera" className="w-10 h-10 text-gray-400 mb-2" />
        <p className="text-gray-500">Upload Image of Diseased Plant</p>
      </div>
      <div className="mt-4 bg-white p-3 rounded-xl border">
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/Y1mHzdF.png"
            alt="Diseased leaf"
            className="w-16 h-16 rounded-md mr-3"
          />
          <div className="flex-grow">
            <p className="font-bold">Diagnosed: Leaf Spot Disease</p>
            <p className="text-xs text-green-700">Confidence: 97%</p>
          </div>
        </div>
        <p className="text-sm font-bold mt-2">Recommended Treatments:</p>
        <ul className="text-sm list-disc list-inside text-gray-600">
          <li>Apply Mancozeb (2g/liter)</li>
          <li>Remove infected leaves</li>
        </ul>
      </div>
    </div>
    <div className="p-3">
      <button className="w-full bg-green-600 text-white font-bold py-3 rounded-full">
        Ask a Follow-up Question
      </button>
    </div>
  </div>
);
const YieldPredictionScreen = () => (
  <div className="bg-gray-50 h-full flex flex-col font-sans p-4">
    <div className="flex items-center mb-4">
      <Icon name="arrow-left" className="w-6 h-6 mr-3" />
      <h1 className="text-lg font-bold">Yield Prediction</h1>
    </div>
    <div className="bg-green-100/50 border border-green-200 rounded-xl p-4 text-center mb-4">
      <Icon
        name="bar-chart-2"
        className="w-8 h-8 text-green-600 mx-auto mb-2"
      />
      <p className="text-sm text-green-800">Expected Rice Yield:</p>
      <p className="text-2xl font-bold text-black">7500 kg/acre</p>
      <p className="text-sm text-gray-600 mt-1">
        Estimated Profit: <span className="font-bold">₹60,000 / acre</span>
      </p>
    </div>
    <h2 className="text-md font-bold mb-2">Recommendations</h2>
    <div className="space-y-2">
      <div className="bg-white p-3 rounded-lg border flex justify-between items-center">
        <p className="text-sm">1. Optimize Irrigation Schedule</p>
        <Icon name="chevron-right" className="w-5 h-5 text-gray-400" />
      </div>
      <div className="bg-white p-3 rounded-lg border flex justify-between items-center">
        <p className="text-sm">2. Apply balanced NPK fertilizer</p>
        <Icon name="chevron-right" className="w-5 h-5 text-gray-400" />
      </div>
    </div>
    <div className="flex-grow"></div>
    <div className="text-center">
      <Icon name="mic" className="w-8 h-8 mx-auto text-green-600" />
      <p className="text-xs font-semibold text-green-700">Voice Query</p>
    </div>
  </div>
);
const MarketPricesScreen = () => (
  <div className="bg-white h-full flex flex-col font-sans">
    <div className="p-3 border-b flex items-center">
      <Icon name="arrow-left" className="w-6 h-6 mr-3" />
      <h1 className="text-lg font-bold">Market Prices</h1>
    </div>
    <div className="p-3">
      <div className="bg-green-100 rounded-xl p-3">
        <p className="text-xs text-green-800 font-semibold">
          Best Market to Sell:
        </p>
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold">₹20 / kg</p>
          <p>Rice</p>
        </div>
        <p className="text-xs text-gray-600 flex items-center gap-1">
          <Icon name="map-pin" className="w-3 h-3" />
          Near Mandi (1.5 KM)
        </p>
      </div>
    </div>
    <div className="p-3 space-y-2">
      <div className="flex items-center bg-gray-50 p-2 rounded-lg border">
        <p className="font-bold flex-grow">Rice</p>
        <p>₹18 / kg</p>
      </div>
      <div className="flex items-center bg-gray-50 p-2 rounded-lg border">
        <p className="font-bold flex-grow">Wheat</p>
        <p>₹22 / kg</p>
      </div>
      <div className="flex items-center bg-gray-50 p-2 rounded-lg border">
        <p className="font-bold flex-grow">Pulses</p>
        <p>₹90 / kg</p>
      </div>
    </div>
    <div className="flex-grow p-3">
      <div className="h-full w-full bg-gray-200 rounded-lg">
        <img
          src="https://i.imgur.com/rDc0Y1q.png"
          alt="Map of mandis"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
);
const ChatbotScreen = () => (
  <div className="bg-gray-100 h-full flex flex-col font-sans">
    <div className="p-3 border-b bg-white flex items-center">
      <Icon name="arrow-left" className="w-6 h-6 mr-3" />
      <h1 className="text-lg font-bold">Chat with DKO Bot</h1>
    </div>
    <div className="flex-grow p-3 space-y-3">
      <div className="flex justify-end">
        <div className="bg-green-600 text-white p-3 rounded-l-lg rounded-br-lg max-w-xs">
          <p className="text-sm">Which pesticide for leaf spot in my banana?</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white p-3 rounded-r-lg rounded-bl-lg max-w-xs border">
          <p className="text-sm">
            Based on the image, your plant has Sigatoka Leaf Spot. We recommend:
          </p>
          <ul className="text-sm list-disc list-inside mt-2">
            <li>Apply Mancozeb (2g/liter)</li>
            <li>Remove severely infected leaves</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start">
        <button className="bg-red-500 text-white font-bold text-sm py-2 px-4 rounded-full flex items-center gap-2">
          <Icon name="alert-triangle" className="w-4 h-4" />
          Escalate to Human Officer
        </button>
      </div>
    </div>
    <div className="p-2 border-t bg-white flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
      />
      <Icon name="mic" className="w-6 h-6 mx-2 text-gray-500" />
      <Icon name="camera" className="w-6 h-6 text-gray-500" />
    </div>
  </div>
);
const SchemesScreen = () => (
  <div className="h-full flex flex-col font-sans bg-gray-50">
    <div className="p-4 bg-green-500 text-white flex items-center">
      <Icon name="arrow-left" className="w-6 h-6 mr-3" />
      <h1 className="text-lg font-bold">Policy & Scheme Updates</h1>
    </div>
    <div className="p-4 space-y-3">
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-green-800">
            PM-KISAN Installment Released
          </h2>
          <Icon name="check-circle" className="w-6 h-6 text-green-500" />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          ₹2000 transferred to registered farmers' accounts.
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start">
          <h2 className="font-bold">Crop Insurance Signup Ends Soon</h2>
          <Icon name="calendar" className="w-5 h-5 text-gray-500" />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Deadline: September 30, 2025
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start">
          <h2 className="font-bold">New Solar Pump Subsidy Scheme</h2>
          <Icon name="sun" className="w-5 h-5 text-yellow-500" />
        </div>
        <button className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-lg mt-2">
          Learn More
        </button>
      </div>
    </div>
  </div>
);
const OfflineScreen = () => (
  <div className="bg-gray-50 h-full flex flex-col font-sans">
    <div className="p-4 border-b bg-white">
      <h1 className="text-lg font-bold">Saved Advisories</h1>
    </div>
    <div className="p-2 text-center bg-blue-100 text-blue-800 text-sm flex items-center justify-center gap-2">
      <Icon name="wifi-off" className="w-4 h-4" />
      Offline Mode: Viewing downloaded data
    </div>
    <div className="p-3 space-y-2 flex-grow">
      <div className="bg-white p-2 rounded-lg border flex items-center">
        <img
          src="https://i.imgur.com/2Y20pS1.png"
          alt="rice"
          className="w-16 h-16 rounded-md mr-3 object-cover"
        />
        <div className="flex-grow">
          <p className="font-bold text-sm">Rice Kharif Season - Pest Mgmt</p>
          <p className="text-xs text-gray-500">Last Synced: 5 mins ago</p>
        </div>
      </div>
      <div className="bg-white p-2 rounded-lg border flex items-center">
        <img
          src="https://i.imgur.com/2Y20pS1.png"
          alt="tomato"
          className="w-16 h-16 rounded-md mr-3 object-cover"
        />
        <div className="flex-grow">
          <p className="font-bold text-sm">Tomato Crop Guide - Fertilization</p>
          <p className="text-xs text-gray-500">Last Synced: Yesterday</p>
        </div>
      </div>
    </div>
    <div className="p-3">
      <button className="bg-green-600 text-white w-full py-3 rounded-full font-bold flex items-center justify-center gap-2">
        <Icon name="refresh-cw" className="w-5 h-5" />
        Sync Now
      </button>
    </div>
  </div>
);

// --- NEW: Code-Built UI for each KrishiAdhikari Dashboard Screen ---

const OfficerDashboard = () => (
  <div className="h-[600px] bg-gray-100 p-6 font-sans">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Officer Dashboard</h1>
    <div className="grid grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-sm text-gray-500">Pending Queries</h2>
        <p className="text-3xl font-bold text-blue-600">12</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-sm text-gray-500">Active Alerts</h2>
        <p className="text-3xl font-bold text-red-600">3</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-sm text-gray-500">Farmers Registered</h2>
        <p className="text-3xl font-bold text-green-600">2,450</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-sm text-gray-500">Advisory Adoption</h2>
        <p className="text-3xl font-bold text-yellow-600">78%</p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold mb-2">Crop Health Index by Region</h2>
        <div className="h-64 bg-gray-100 rounded flex items-end justify-around p-2">
          {/* Bar chart placeholder */}
          <div className="w-8 bg-green-400" style={{ height: "80%" }}></div>
          <div className="w-8 bg-yellow-400" style={{ height: "60%" }}></div>
          <div className="w-8 bg-red-400" style={{ height: "35%" }}></div>
          <div className="w-8 bg-green-400" style={{ height: "90%" }}></div>
          <div className="w-8 bg-yellow-400" style={{ height: "70%" }}></div>
        </div>
      </div>
      <div className="col-span-1 bg-white p-4 rounded-lg shadow">
        <h2 className="font-bold mb-2">Recent Activity</h2>
        <ul className="text-sm space-y-2">
          <li className="text-red-600">New pest alert in Block C</li>
          <li>Query escalated from R. Kumar</li>
          <li className="text-green-600">PM-KISAN advisory sent</li>
        </ul>
      </div>
    </div>
  </div>
);
const OfficerOutbreakMap = () => (
  <div className="h-[600px] bg-gray-100 p-6 font-sans flex gap-6">
    <div className="w-3/4 bg-white p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Live Outbreak Monitoring
      </h1>
      <div className="h-full bg-gray-200 rounded-lg relative">
        <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-[50%] left-[60%] w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div className="w-1/4 bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold mb-2">Active Alerts</h2>
      <div className="space-y-3">
        <div className="border-l-4 border-red-500 p-2 bg-red-50">
          <p className="font-bold">High Risk: Blight</p>
          <p className="text-sm">Block C, 50 Farmers</p>
        </div>
        <div className="border-l-4 border-yellow-500 p-2 bg-yellow-50">
          <p className="font-bold">Medium Risk: Aphids</p>
          <p className="text-sm">Block A, 120 Farmers</p>
        </div>
      </div>
    </div>
  </div>
);
const OfficerQueryInbox = () => (
  <div className="h-[600px] bg-gray-100 p-6 font-sans flex gap-6">
    <div className="w-1/4 bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold mb-2">Inbox</h2>
      <ul className="space-y-1">
        <li className="bg-blue-100 p-2 rounded font-semibold">
          All Queries (12)
        </li>
        <li className="p-2">Unassigned (4)</li>
        <li className="p-2">High Priority (3)</li>
        <li className="p-2">Resolved</li>
      </ul>
    </div>
    <div className="w-3/4 bg-white p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Escalated Farmer Queries
      </h1>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Farmer</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2">Ramesh Kumar</td>
            <td className="p-2">Unusual spots on my wheat crop...</td>
            <td className="p-2">
              <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full">
                High
              </span>
            </td>
            <td className="p-2">25 Sep 2025</td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2">Sita Devi</td>
            <td className="p-2">Fertilizer recommendation for...</td>
            <td className="p-2">
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                Medium
              </span>
            </td>
            <td className="p-2">24 Sep 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const OfficerFarmerDirectory = () => (
  <div className="h-[600px] bg-gray-100 p-6 font-sans">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Farmer Directory</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search farmer..."
          className="border p-2 rounded-lg text-sm w-1/3"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
          Add Farmer
        </button>
      </div>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Location</th>
            <th className="p-2">Crops</th>
            <th className="p-2">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2">Ramesh Kumar</td>
            <td className="p-2">Block C</td>
            <td className="p-2">Wheat, Rice</td>
            <td className="p-2">25 Sep 2025</td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2">Sita Devi</td>
            <td className="p-2">Block A</td>
            <td className="p-2">Sugarcane</td>
            <td className="p-2">24 Sep 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
const OfficerBroadcast = () => (
  <div className="h-[600px] bg-gray-100 p-6 font-sans">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">
      Broadcast Advisory
    </h1>
    <div className="bg-white p-4 rounded-lg shadow grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="font-bold">Compose Message</h2>
        <select className="w-full p-2 border rounded-lg">
          <option>Target: All Farmers in Block C</option>
        </select>
        <input
          type="text"
          placeholder="Subject: Urgent Pest Warning"
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          placeholder="Message body..."
          rows="8"
          className="w-full p-2 border rounded-lg"
        ></textarea>
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg">
          Send Broadcast
        </button>
      </div>
      <div>
        <h2 className="font-bold">Preview</h2>
        <div className="border rounded-lg p-3 bg-gray-50 h-full">
          <h3 className="font-semibold">Urgent Pest Warning</h3>
          <p className="text-sm mt-2">
            Dear farmers of Block C, high humidity has increased the risk of
            Blight in potato crops...
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ScreensTab = () => {
  const appScreens = useMemo(
    () => [
      {
        title: "Simple & Secure Login",
        description:
          "Get started quickly with a secure mobile number and password login, available in multiple regional languages.",
        component: <LoginScreen />,
      },
      {
        title: "Personalized Home Dashboard",
        description:
          "A daily snapshot of everything you need: local weather, urgent tasks, and a quick look at your field's health.",
        component: <HomeScreen />,
      },
      {
        title: "Field Health Maps",
        description:
          "Monitor crop health in real-time using NDVI satellite imagery to detect stress spots before they spread.",
        component: <HealthMapScreen />,
      },
      {
        title: "Soil & Weather Intelligence",
        description:
          "Access live soil health data and receive hyper-local weather alerts for heavy rain or pest-conducive conditions.",
        component: <SoilWeatherScreen />,
      },
      {
        title: "AI-Powered Pest Detection",
        description:
          "Upload an image of a diseased plant and get an instant, accurate diagnosis with recommended treatments.",
        component: <PestDetectScreen />,
      },
      {
        title: "AI-Powered Yield Prediction",
        description:
          "Get accurate yield and profit forecasts based on your crop data, with actionable recommendations for optimization.",
        component: <YieldPredictionScreen />,
      },
      {
        title: "Live Market Prices",
        description:
          "Find the best market to sell your produce with real-time price comparisons from nearby mandis.",
        component: <MarketPricesScreen />,
      },
      {
        title: "Instant AI Chat Support",
        description:
          "Ask questions in your own language and get instant, reliable answers from our AI bot, with an option to escalate to a human officer.",
        component: <ChatbotScreen />,
      },
      {
        title: "Policy & Scheme Updates",
        description:
          "Never miss an important deadline or a new government scheme. Get timely updates on installments, insurance, and subsidies.",
        component: <SchemesScreen />,
      },
      {
        title: "Offline Advisory Access",
        description:
          "Download important advisories and access them in the field, even without an internet connection. Sync your data when you're back online.",
        component: <OfflineScreen />,
      },
    ],
    []
  );
  const [appIndex, setAppIndex] = useState(0);

  const officerScreens = useMemo(
    () => [
      {
        title: "At-a-Glance Dashboard",
        description:
          "A high-level overview of your region, including active alerts, pending farmer queries, and overall crop health index.",
        component: <OfficerDashboard />,
      },
      {
        title: "Live Outbreak Monitoring",
        description:
          "A geospatial map that visualizes real-time pest and disease outbreaks, allowing for rapid, targeted intervention.",
        component: <OfficerOutbreakMap />,
      },
      {
        title: "Escalated Query Inbox",
        description:
          "A smart inbox that organizes and prioritizes complex farmer queries that the AI could not resolve, ensuring no farmer is left behind.",
        component: <OfficerQueryInbox />,
      },
      {
        title: "Farmer Directory & Management",
        description:
          "A searchable and filterable directory of all farmers in your jurisdiction, with access to their crop history and past advisories.",
        component: <OfficerFarmerDirectory />,
      },
      {
        title: "Targeted Advisory Broadcast",
        description:
          "A powerful tool to compose and send crucial advisories (e.g., pest warnings, weather alerts) to specific groups of farmers based on crop type or location.",
        component: <OfficerBroadcast />,
      },
    ],
    []
  );
  const [officerIndex, setOfficerIndex] = useState(0);

  return (
    <div className="p-8 md:p-12 bg-slate-50 animate-page-enter space-y-20">
      {/* Section 1: KisanSaathi Mobile App */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-2 animated-gradient-text">
          KisanSaathi: The Farmer's App
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          An intuitive mobile-first experience designed for the field, with
          offline capabilities.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-xl border flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <button
              onClick={() =>
                setAppIndex(
                  (p) => (p - 1 + appScreens.length) % appScreens.length
                )
              }
              className="absolute -left-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border"
            >
              <Icon name="chevron-left" className="w-6 h-6 text-slate-600" />
            </button>
            <PhoneMockup>
              <div className="h-full">{appScreens[appIndex].component}</div>
            </PhoneMockup>
            <button
              onClick={() => setAppIndex((p) => (p + 1) % appScreens.length)}
              className="absolute -right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border"
            >
              <Icon name="chevron-right" className="w-6 h-6 text-slate-600" />
            </button>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {appScreens[appIndex].title}
            </h3>
            <p className="text-slate-600">{appScreens[appIndex].description}</p>
          </div>
        </div>
      </section>

      {/* Section 2: KrishiAdhikari Officer Dashboard */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-2 animated-gradient-text">
          KrishiAdhikari: The Officer's Dashboard
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
          A powerful web-based command center for monitoring, analysis, and
          communication.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-xl border flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              {officerScreens[officerIndex].title}
            </h3>
            <p className="text-slate-600">
              {officerScreens[officerIndex].description}
            </p>
          </div>
          <div className="relative w-full md:w-2/3 flex items-center justify-center">
            <button
              onClick={() =>
                setOfficerIndex(
                  (p) => (p - 1 + officerScreens.length) % officerScreens.length
                )
              }
              className="absolute -left-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border"
            >
              <Icon name="chevron-left" className="w-6 h-6 text-slate-600" />
            </button>
            <BrowserMockup>
              <div>{officerScreens[officerIndex].component}</div>
            </BrowserMockup>
            <button
              onClick={() =>
                setOfficerIndex((p) => (p + 1) % officerScreens.length)
              }
              className="absolute -right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md border"
            >
              <Icon name="chevron-right" className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreensTab;
