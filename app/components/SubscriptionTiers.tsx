'use client';
import React, { useState } from 'react';

type PaymentIntervals = 'Monthly' | 'Quarterly' | 'Annual';
type SubscriptionLevel = 'Basic' | 'Advanced' | 'Premium';
type SubscriptionTier = {
  name: SubscriptionLevel;
  description: string;
  price: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
  features: string[];
};

const priceTabs: PaymentIntervals[] = ['Monthly', 'Quarterly', 'Annual'];
const tierData: SubscriptionTier[] = [
  {
    name: 'Basic',
    description:
      'For invidivudals with a single property to manage. Useful for keeping track of maintenance issues and property expenses/income.',
    price: { monthly: 6.99, quarterly: 19.99, annual: 75.99 },
    features: [
      '1 Property as standard',
      '1 User included',
      '24/7 Live Chat support',
      'Maintenance Tracker',
      'Analytics & reports'
    ]
  },
  {
    name: 'Advanced',
    description:
      'Ideal for landlords managing a few properties. Use "The Hive" to market your propeties and message your tenants directly via our real-time messaging service.',
    price: { monthly: 14.99, quarterly: 42.99, annual: 161.99 },
    features: [
      'All Basic features',
      'Up to 5 properties',
      'Up to 2 additional users at £5/month each',
      'Tenant Messaging',
      'Hive Marketing'
    ]
  },
  {
    name: 'Premium',
    description:
      'Perfect for property managers with a substantial portfolio. Benefit from unlimited properties, advanced AI document creation, and 3rd Party Marketing to ensure your operations run smoothly.',
    price: { monthly: 24.99, quarterly: 71.99, annual: 269.99 },
    features: [
      'All Advanced features',
      'Unlimited properties',
      'Up to 5 additional users at £5/month each',
      '3rd Party Marketing',
      'AI Document Creation'
    ]
  }
];

const SubscriptionTiers = () => {
  const [selectedTab, setSelectedTab] = useState<number[]>([
    0, // Starter
    0, // Pro
    0 // Premium
  ]);
  const handleTab: (tierIdx: number, tabIdx: number) => void = (
    tierIdx: number,
    tabIdx: number
  ) => {
    setSelectedTab(prev => prev.map((v, i) => (i === tierIdx ? tabIdx : v)));
  };

  return (
    <section id='pricing' className='px-4'>
      <h2 className='text-4xl font-bold text-yellow-900 mb-4 text-center'>
        Plans & Pricing
      </h2>
      <p className='text-yellow-900 text-center mb-4 sm:w-2/3 mx-auto md:w-1/2'>
        We have tailored plans to suit all your needs. Combining powerful
        features and affordability to streamline the management of your
        properties. Check them out below!
      </p>
      <div className='grid grid-cols-1 sm:w-4/5 mx-auto md:grid-cols-3 gap-6 md:gap-8 md:w-full'>
        {tierData.map((tier, i) => (
          <div
            key={tier.name}
            className='bg-white border border-yellow-100 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center min-w-0 min-h-[370px] h-full justify-between'
          >
            <h3 className='text-lg sm:text-xl font-semibold text-yellow-700 mb-2 text-center'>
              {tier.name}
            </h3>
            <p className='text-yellow-700 text-center mb-4 text-sm'>
              <i>{tier.description}</i>
            </p>
            <div className='flex gap-2 mb-2'>
              {priceTabs.map((tab, tabIdx) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                    selectedTab[i] === tabIdx
                      ? 'bg-yellow-500 text-white border-yellow-500'
                      : 'bg-white text-yellow-700 border-yellow-200 hover:bg-yellow-100'
                  }`}
                  onClick={() => handleTab(i, tabIdx)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className='text-2xl sm:text-3xl font-bold text-yellow-900 mb-2 text-center'>
              {(() => {
                const tabKey = priceTabs[
                  selectedTab[i]
                ].toLowerCase() as keyof typeof tier.price;
                const value: number = tier.price[tabKey];
                return <span>£{value}</span>;
              })()}
            </p>
            <ul className='text-xs sm:text-sm mb-6 space-y-2 text-center bg-white border border-yellow-100'>
              {tier.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className='font-semibold py-2 px-4 rounded w-full transition text-xs sm:text-base bg-yellow-500 hover:bg-yellow-600 text-white'>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionTiers;
