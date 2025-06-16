"use client";
import React, { useState } from "react";

const cameraOptionsLarge = [
  { label: "250", value: 0 },
  { label: "500", value: 1 },
  { label: "1000", value: 2 },
];

const pricingModels = [
  {
    type: "ON PREMISE HW & Perpetual license SW",
    cameraTiers: [
      {
        cameras: "Upto 250 cams",
        AIAlerts: "₹10,000/cam",
        softwareCost: "₹25,00,000",
        serverHardwareCost: "₹25,00,000 (4 Rack servers)",
        rackAndCablingCost: "₹3,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹28,00,000",
        totalCost: "₹53,00,000(one time)",
      },
      {
        cameras: "Upto 500 cams",
        AIAlerts: "₹7,000/cam",
        softwareCost: "₹35,00,000",
        serverHardwareCost: "₹45,00,000 (8 Rack servers)",
        rackAndCablingCost: "₹4,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹49,00,000",
        totalCost: "₹84,00,000(one time)",
      },
      {
        cameras: "Upto 1000 cams",
        AIAlerts: "₹5,000/cam",
        softwareCost: "₹60,00,000",
        serverHardwareCost: "₹80,00,000 (12 Rack servers)",
        rackAndCablingCost: "₹5,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹85,00,000",
        totalCost: "₹1,45,00,000(one time)",
      },
    ],
  },
  {
    type: "Cloud Deployment & Perpetual license SW",
    cameraTiers: [
      {
        cameras: "Upto 250 cams",
        AIAlerts: "₹10,000/cam",
        softwareCost: "₹25,00,000",
        cloudCostMonthly: "₹3,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹3,00,000/month + ₹25,00,000 (one time)",
      },
      {
        cameras: "Upto 500 cams",
        AIAlerts: "₹7,000/cam",
        softwareCost: "₹35,00,000",
        cloudCostMonthly: "₹6,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹6,00,000/month + ₹35,00,000 (one time)",
      },
      {
        cameras: "Upto 1000 cams",
        AIAlerts: "₹5,000/cam",
        softwareCost: "₹60,00,000",
        cloudCostMonthly: "₹8,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹8,00,000/month + ₹65,00,000 (one time)",
      },
    ],
  },
  {
    type: "ON PREMISE HW & SW as subscription",
    note: "Software minimum 3 years contract",
    cameraTiers: [
      {
        cameras: "Upto 250 cams",
        AIAlerts: "₹400/cam/month",
        softwareSubscriptionCost: "₹1,00,000/month",
        serverHardwareCost: "₹25,00,000 (4 Rack servers)",
        rackAndCablingCost: "₹3,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹28,00,000",
        totalCost: "₹1,00,000/month + ₹28,00,000 (one time)",
      },
      {
        cameras: "Upto 500 cams",
        AIAlerts: "₹300/cam/month",
        softwareSubscriptionCost: "₹1,50,000/month",
        serverHardwareCost: "₹45,00,000 (8 Rack servers)",
        rackAndCablingCost: "₹4,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹49,00,000",
        totalCost: "₹1,50,000/month + ₹45,00,000 (one time)",
      },
      {
        cameras: "Upto 1000 cams",
        AIAlerts: "₹250/cam/month",
        softwareSubscriptionCost: "₹2,50,000/month",
        serverHardwareCost: "₹80,00,000 (12 Rack servers)",
        rackAndCablingCost: "₹5,00,000",
        thirdPartyCosts: "Customer pays directly",
        totalHardwareCost: "₹85,00,000",
        totalCost: "₹2,50,000/month + ₹80,00,000 (one time)",
      },
    ],
  },
  {
    type: "Cloud Deployment & SW as subscription",
    note: "Software minimum 3 years contract",
    cameraTiers: [
      {
        cameras: "Upto 250 cams",
        AIAlerts: "₹400/cam/month",
        softwareSubscriptionCost: "₹1,00,000/month",
        cloudCostMonthly: "₹3,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹1,00,000/month + ₹3,00,000/month",
      },
      {
        cameras: "Upto 500 cams",
        AIAlerts: "₹300/cam/month",
        softwareSubscriptionCost: "₹1,50,000/month",
        cloudCostMonthly: "₹6,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹1,50,000/month + ₹6,00,000/month",
      },
      {
        cameras: "Upto 1000 cams",
        AIAlerts: "₹250/cam/month",
        softwareSubscriptionCost: "₹2,50,000/month",
        cloudCostMonthly: "₹8,00,000/month",
        thirdPartyCosts: "Customer pays directly",
        totalCost: "₹2,50,000/month + ₹8,00,000/month",
      },
    ],
  },
];

const featureKeys = [
  "AIAlerts",
  "softwareCost",
  "softwareSubscriptionCost",
  "serverHardwareCost",
  "cloudCostMonthly",
  "rackAndCablingCost",
  "thirdPartyCosts",
  "totalHardwareCost",
];

const featureLabels: Record<string, string> = {
  AIAlerts: "AI Alerts",
  softwareCost: "Software Cost",
  softwareSubscriptionCost: "Software Subscription Cost",
  serverHardwareCost: "Server Hardware Cost",
  cloudCostMonthly: "Cloud Cost (Monthly)",
  rackAndCablingCost: "Rack & Cabling Cost",
  thirdPartyCosts: "Third Party Costs",
  totalHardwareCost: "Total Hardware Cost",
};

// Small scale VA table data
const vaTable = {
  cameras: [10, 25, 50, 100],
  applications: [
    {
      type: "Non-real time",
      costs: {
        "10": "₹40,000",
        "25": "₹20,000",
        "50": "₹15,000",
        "100": "₹10,000",
      },
    },
    {
      type: "Real time",
      costs: {
        "10": "₹60,000",
        "25": "₹50,000",
        "50": "₹40,000",
        "100": "₹30,000",
      },
    },
    {
      type: "Web Platform",
      costs: {
        "10": "₹1,00,000",
        "25": "₹70,000",
        "50": "Free",
        "100": "Free",
      },
    },
    {
      type: "Alert report (email, WhatsApp, etc.)",
      costs: {
        "10": "₹50,000",
        "25": "₹30,000",
        "50": "Free",
        "100": "Free",
      },
    },
  ],
  notes: [
    "3rd party charges excluded",
    "Video Management System: For existing camera — Manufacturer to provide",
    "For new camera setup — Custom quotation will be given",
  ],
};

const useCases = {
  realTime: [
    "MHE collision Alert",
    "Fire and smoke detection",
    "Accident/Fall detection",
    "Security and access control",
    "Fuel station access tracking",
    "Photography in unauthorized places",
    "Tailgating",
    "ID card compliance",
    "Face attendance",
    "Intrusion detection",
    "Virtual fencing",
    "ANPR",
    "Violence detection",
    "Mask detection",
    "Suspicious behaviour",
    "Speed violation detection",
  ],
  nonRealTime: [
    "Mobile phone usage",
    "Visual inventory management",
    "Sleeping inside workplace",
    "Guard sleeping/ absent detection",
    "Wildlife monitoring",
  ],
  hybrid: [
    "Safety gear compliance",
    "Box counting",
    "Face recognition",
    "Weigh scale monitoring",
    "Crowd detection",
    "Queue management",
    "Parking space management",
    "Litter management",
    "Footfall counting",
    "Customer behaviour analysis",
  ],
};

type Tier250 = {
  cameras: string;
  AIAlerts: string;
  softwareCost: string;
  serverHardwareCost: string;
  rackAndCablingCost: string;
  thirdPartyCosts: string;
  totalHardwareCost: string;
  totalCost: string;
};

type CloudTier = {
  cameras: string;
  AIAlerts: string;
  softwareCost: string;
  cloudCostMonthly: string;
  thirdPartyCosts: string;
  totalCost: string;
};

type SubTier = {
  cameras: string;
  AIAlerts: string;
  softwareSubscriptionCost: string;
  serverHardwareCost: string;
  rackAndCablingCost: string;
  thirdPartyCosts: string;
  totalHardwareCost: string;
  totalCost: string;
};

type CloudSubTier = {
  cameras: string;
  AIAlerts: string;
  softwareSubscriptionCost: string;
  cloudCostMonthly: string;
  thirdPartyCosts: string;
  totalCost: string;
};

type TierUnion = Tier250 | CloudTier | SubTier | CloudSubTier;

export default function Home() {
  const [setupType, setSetupType] = useState<"small" | "large">("small");
  const [selectedTier, setSelectedTier] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Announcement Bar */}

      {/* Header Section */}
      <header className="px-6 sm:px-12 lg:px-24 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Note: Video Management System (VMS) is free for all plans below
          </p>
        </div>

        {/* Setup Type Toggle */}
        <div className="flex justify-center mt-6 sm:mt-12 px-4">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 flex w-full max-w-md relative overflow-hidden">
            {/* Animated background slider */}
            <div
              className={`absolute inset-y-1 bg-gray-900 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                setupType === "small" ? "left-1 right-1/2" : "left-1/2 right-1"
              }`}
            />

            <button
              onClick={() => setSetupType("small")}
              className={`relative flex-1 py-2 sm:py-2.5 rounded-lg font-medium text-sm z-10 transition-colors duration-200 flex items-center justify-center ${
                setupType === "small"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="whitespace-nowrap">Edge-Scale</span>
            </button>
            <button
              onClick={() => setSetupType("large")}
              className={`relative flex-1 py-2 sm:py-2.5 rounded-lg font-medium text-sm z-10 transition-colors duration-200 flex items-center justify-center ${
                setupType === "large"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="whitespace-nowrap">Enterprise-Scale</span>
            </button>
          </div>
        </div>
      </header>

      {/* Small Scale Section */}
      {setupType === "small" && (
        <div className="px-6 sm:px-12 lg:px-24">
          {/* VA Table */}
          <section className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Video Analytics Pricing
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-4 px-6 font-bold text-gray-700 text-left">
                          Application
                        </th>
                        {vaTable.cameras.map((cam) => (
                          <th
                            key={cam}
                            className="py-4 px-6 font-bold text-gray-700 text-right"
                          >
                            {cam} cams
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {vaTable.applications.map((app) => (
                        <tr key={app.type} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {app.type}
                          </td>
                          {vaTable.cameras.map((cam) => (
                            <td
                              key={cam}
                              className="py-4 px-6 text-right font-medium"
                            >
                              <span className="text-gray-900">
                                {
                                  app.costs[
                                    cam.toString() as keyof typeof app.costs
                                  ]
                                }
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4">
                <ul className="text-sm text-gray-600 space-y-1">
                  {vaTable.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16 pb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Use Cases
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-colors ease-out duration-300">
                  <div className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real Time
                  </div>
                  <ul className="space-y-2">
                    {useCases.realTime.map((uc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-1 text-xs">
                          •
                        </span>
                        <span className="text-sm text-gray-700">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-colors ease-out duration-300">
                  <div className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Non-Real Time
                  </div>
                  <ul className="space-y-2">
                    {useCases.nonRealTime.map((uc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-1 text-xs">
                          •
                        </span>
                        <span className="text-sm text-gray-700">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-colors ease-out duration-300">
                  <div className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Hybrid
                  </div>
                  <ul className="space-y-2">
                    {useCases.hybrid.map((uc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-1 text-xs">
                          •
                        </span>
                        <span className="text-sm text-gray-700">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Large Scale Section */}
      {setupType === "large" && (
        <div className="px-6 sm:px-12 lg:px-24">
          {/* Camera Tier Selection */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {cameraOptionsLarge.map((option, idx) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedTier(idx)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-150 ease-in-out text-sm ${
                    selectedTier === idx
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option.label} Cameras
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingModels.map((model) => {
                  const tier = model.cameraTiers[selectedTier] as TierUnion;
                  return (
                    <div
                      key={model.type}
                      className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-colors ease-in duration-300 h-full flex flex-col"
                    >
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Plan Name */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {model.type.split(" ")[0]}{" "}
                            {model.type.split(" ")[1]}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {model.type.split(" ").slice(2).join(" ")}
                          </p>
                          {model.note && (
                            <div className="mt-3">
                              <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                {model.note}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Price */}
                        <div className="mb-6 border-t border-b border-gray-100 py-4">
                          <div className="text-xl font-semibold text-gray-900">
                            {tier.totalCost.split(" (")[0].split(" +")[0]}
                          </div>
                          {tier.totalCost.includes("+") && (
                            <div className="text-sm text-gray-600 mt-1">
                              + {tier.totalCost.split("+ ")[1]}
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6 flex-grow">
                          <div className="w-full flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              AI Alerts
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              {tier.AIAlerts}
                            </span>
                          </div>

                          {"softwareCost" in tier && tier.softwareCost && (
                            <div className="w-full flex items-center justify-between">
                              <span className="text-sm text-gray-600">
                                Software
                              </span>
                              <span className="text-sm font-medium text-gray-900">
                                {tier.softwareCost}
                              </span>
                            </div>
                          )}

                          {"softwareSubscriptionCost" in tier &&
                            tier.softwareSubscriptionCost && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  Software Sub.
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.softwareSubscriptionCost}
                                </span>
                              </div>
                            )}

                          {"serverHardwareCost" in tier &&
                            tier.serverHardwareCost && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  Hardware
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.serverHardwareCost.split(" (")[0]}
                                </span>
                              </div>
                            )}

                          {"rackAndCablingCost" in tier &&
                            tier.rackAndCablingCost && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  Rack and Cabling
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.rackAndCablingCost}
                                </span>
                              </div>
                            )}

                          {"totalHardwareCost" in tier &&
                            tier.totalHardwareCost && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  Total Hardware Cost
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.totalHardwareCost}
                                </span>
                              </div>
                            )}

                          {"cloudCostMonthly" in tier &&
                            tier.cloudCostMonthly && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  Cloud Cost
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.cloudCostMonthly}
                                </span>
                              </div>
                            )}

                          {"thirdPartyCosts" in tier &&
                            tier.thirdPartyCosts && (
                              <div className="w-full flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                  3rd Party Costs like SMS, email etc.
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {tier.thirdPartyCosts}
                                </span>
                              </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        {/* <button className="mt-auto w-full py-2 px-4 rounded-lg font-medium text-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                          Get Started
                        </button> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Comparison Table */}
          <section className="mb-16 pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Detailed comparison
                </h2>
                <p className="text-gray-600">
                  See what&apos;s included in each deployment model
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-6 font-bold text-gray-700 text-left sticky left-0 bg-gray-50">
                          Feature
                        </th>
                        {pricingModels.map((model) => (
                          <th
                            key={model.type}
                            className="py-4 px-6 font-bold text-gray-700 text-left min-w-[180px]"
                          >
                            <div>{model.type.split(" ")[0]}</div>
                            <div className="text-sm text-gray-500">
                              {model.type.split(" ").slice(1).join(" ")}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {featureKeys.map((key) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-gray-900 sticky left-0 bg-white">
                            {featureLabels[key]}
                          </td>
                          {pricingModels.map((model) => {
                            const tier = model.cameraTiers[
                              selectedTier
                            ] as TierUnion;
                            const value = (tier as TierUnion)[
                              key as keyof TierUnion
                            ];
                            return (
                              <td key={model.type} className="py-4 px-6">
                                {value ? (
                                  <div className="text-gray-900">
                                    {value === "Customer pays directly"
                                      ? "Customer pays"
                                      : typeof value === "string"
                                      ? value.split(" (")[0]
                                      : value}
                                  </div>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
