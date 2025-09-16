'use client';
import React, { useState } from 'react';

const reviewsData = [
  {
    name: 'Alice',
    review:
      'Property Hive made managing my rentals effortless. Highly recommend!'
  },
  { name: 'Ben', review: 'The tenant messaging feature is a game changer.' },
  {
    name: 'Carla',
    review: 'I love the maintenance tracker and the support team is fantastic.'
  },
  { name: 'Dan', review: 'Saved me so much in letting agent fees.' },
  { name: 'Ella', review: 'The dashboard is intuitive and easy to use.' },
  { name: 'Frank', review: 'Great for agencies with lots of properties.' },
  { name: 'Grace', review: 'AI document creation is a huge time saver.' },
  { name: 'Hassan', review: '24/7 chat support is always helpful.' }
  // Add more reviews as needed
];

function ReviewsCarousel() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 8;
  const totalPages = Math.ceil(reviewsData.length / cardsPerPage);
  const start = page * cardsPerPage;
  const end = start + cardsPerPage;
  const currentReviews = reviewsData.slice(start, end);

  return (
    <div className='flex items-center justify-center w-full mb-6'>
      {/* Left Arrow */}
      <button
        className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 text-yellow-800 font-bold text-2xl shadow disabled:opacity-40 transition hover:bg-yellow-300 mr-2'
        onClick={() => setPage(p => Math.max(0, p - 1))}
        disabled={page === 0}
        aria-label='Previous reviews'
      >
        &#8592;
      </button>

      {/* Reviews Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl'>
        {currentReviews.map((r, idx) => (
          <div
            key={idx}
            className='bg-white rounded-xl shadow p-5 flex flex-col items-start h-full min-h-[120px] border border-yellow-100'
          >
            <div className='font-semibold text-yellow-800 mb-2'>{r.name}</div>
            <div className='text-yellow-900 text-sm'>{r.review}</div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 text-yellow-800 font-bold text-2xl shadow disabled:opacity-40 transition hover:bg-yellow-300 ml-2'
        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
        disabled={page >= totalPages - 1}
        aria-label='Next reviews'
      >
        &#8594;
      </button>
    </div>
  );
}

const tierData = [
  {
    name: 'Basic',
    color: 'bg-white border border-yellow-100',
    price: { monthly: 19, quarterly: 54, annual: 199 },
    features: [
      'Up to 10 properties',
      'Tenant & rent tracking',
      'Email support'
    ],
    button: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    text: 'text-yellow-700',
    priceText: 'text-yellow-900',
    btnText: 'Get Started'
  },
  {
    name: 'Advanced',
    color: 'bg-yellow-400 border-2 border-yellow-700',
    price: { monthly: 49, quarterly: 139, annual: 499 },
    features: [
      'Up to 100 properties',
      'Automated reminders',
      'Maintenance requests',
      'Priority support'
    ],
    button: 'bg-white text-yellow-700 hover:bg-yellow-100',
    text: 'text-yellow-900',
    priceText: 'text-yellow-900',
    btnText: 'Get Started'
  },
  {
    name: 'Premium',
    color: 'bg-white border border-yellow-100',
    price: { monthly: 99, quarterly: 279, annual: 999 },
    features: [
      'Unlimited properties',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 premium support'
    ],
    button: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    text: 'text-yellow-700',
    priceText: 'text-yellow-900',
    btnText: 'Get Started'
  }
];

const priceTabs = [
  { label: 'Monthly', key: 'monthly' },
  { label: 'Quarterly', key: 'quarterly' },
  { label: 'Annual', key: 'annual' }
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState([
    0, // Starter
    0, // Pro
    0 // Premium
  ]);

  const [activeNav, setActiveNav] = useState('home');

  const handleTab = (tierIdx, tabIdx) => {
    setSelectedTab(prev => prev.map((v, i) => (i === tierIdx ? tabIdx : v)));
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 flex flex-col items-center justify-center font-sans relative'>
      <header className='w-full bg-yellow-100/90 border-b border-yellow-200 shadow-sm flex flex-col sm:flex-row items-center justify-between px-2 sm:px-8 py-2 sm:py-3 mb-4 fixed top-0 left-0 z-30'>
        <div className='flex items-center w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4'>
          <img
            src='/logo-placeholder.svg'
            alt='Logo'
            className='h-10 w-10 object-contain mr-2'
          />
        </div>
        <nav className='flex-1 flex justify-center sm:justify-center'>
          <ul className='flex gap-2 sm:gap-4 text-yellow-800 font-semibold text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2'>
            <li>
              <a
                href='#'
                className={`px-3 py-1 sm:px-4 sm:py-2 transition font-medium ${
                  activeNav === 'home' ? 'border-b-2 border-yellow-500' : ''
                }`}
                onClick={() => setActiveNav('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className={`px-3 py-1 sm:px-4 sm:py-2 transition font-medium hover:text-yellow-700 ${
                  activeNav === 'about' ? 'border-b-2 border-yellow-500' : ''
                }`}
                onClick={() => setActiveNav('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#features'
                className={`px-3 py-1 sm:px-4 sm:py-2 transition font-medium hover:text-yellow-700 ${
                  activeNav === 'features' ? 'border-b-2 border-yellow-500' : ''
                }`}
                onClick={() => setActiveNav('features')}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href='#pricing'
                className={`px-3 py-1 sm:px-4 sm:py-2 transition font-medium hover:text-yellow-700 ${
                  activeNav === 'pricing' ? 'border-b-2 border-yellow-500' : ''
                }`}
                onClick={() => setActiveNav('pricing')}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#reviews'
                className={`px-3 py-1 sm:px-4 sm:py-2 transition font-medium hover:text-yellow-700 ${
                  activeNav === 'reviews' ? 'border-b-2 border-yellow-500' : ''
                }`}
                onClick={() => setActiveNav('reviews')}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div className='flex gap-2 mt-2 sm:mt-0'>
          <button className='bg-white border border-yellow-500 text-yellow-700 font-semibold py-2 px-4 sm:px-5 rounded shadow transition text-sm sm:text-base hover:bg-yellow-50'>
            Try Demo
          </button>
          <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 sm:px-5 rounded shadow transition text-sm sm:text-base'>
            Login
          </button>
        </div>
      </header>
      <header className='w-full max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto py-6 sm:py-10 flex flex-col items-center px-4 sm:px-0 mt-2 sm:mt-0'>
        <h1 className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-900 mb-2 text-center leading-tight mt-10 sm:mt-14'>
          Property Hive
        </h1>
        <p className='text-base xs:text-lg sm:text-xl text-yellow-800 mb-6 text-center max-w-2xl'>
          The all-in-one property management platform for landlords, agencies,
          and property managers.
        </p>
        {/* Removed Get Started and Contact Sales buttons */}
      </header>
      <main className='w-full max-w-2xl md:max-w-5xl xl:max-w-7xl mx-auto flex-1 flex flex-col items-center px-2 sm:px-4 pt-24 sm:pt-28'>
        {/* Hero Banner Placeholder */}
        <div className='w-full flex justify-center mb-24'>
          <img
            src='/hero-banner-placeholder.svg'
            alt='SAAS Screenshot Placeholder'
            className='w-full max-w-3xl rounded-xl shadow-md object-cover'
            style={{ minHeight: '180px', background: '#fffbe6' }}
          />
        </div>
        {/* About Section */}
        <section id='about' className='w-full max-w-3xl mx-auto mb-28 px-4'>
          <h2 className='text-2xl font-bold text-yellow-900 mb-3 text-center'>
            About Property Hive
          </h2>
          <p className='text-yellow-900 text-base sm:text-lg text-center'>
            Property Hive is a modern SAAS platform designed to streamline
            property management processes, improve tenant communication, and
            reduce fees spent on lettings agents. Our intuitive dashboard and
            automation tools empower landlords, agencies, and property managers
            to efficiently manage properties, track rent, handle maintenance,
            and foster better relationships with tenants—all in one place.
          </p>
        </section>
        {/* Features Section */}
        <section
          id='features'
          className='w-full max-w-4xl mx-auto mb-28 px-2 sm:px-4'
        >
          <h2 className='text-2xl font-bold text-yellow-900 mb-4 text-center'>
            Features Comparison
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full border border-yellow-200 rounded-lg bg-white text-sm text-yellow-900'>
              <thead>
                <tr className='bg-yellow-100'>
                  <th className='py-2 px-3 border-b border-yellow-200 text-left font-semibold text-yellow-900'>
                    Feature
                  </th>
                  <th className='py-2 px-3 border-b border-yellow-200 text-center font-semibold text-yellow-900'>
                    Basic
                  </th>
                  <th className='py-2 px-3 border-b border-yellow-200 text-center font-semibold text-yellow-900'>
                    Advanced
                  </th>
                  <th className='py-2 px-3 border-b border-yellow-200 text-center font-semibold text-yellow-900'>
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    Properties
                  </td>
                  <td className='text-center border-b border-yellow-100'>
                    Up to 10
                  </td>
                  <td className='text-center border-b border-yellow-100'>
                    Up to 100
                  </td>
                  <td className='text-center border-b border-yellow-100'>
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    Users
                  </td>
                  <td className='text-center border-b border-yellow-100'>1</td>
                  <td className='text-center border-b border-yellow-100'>5</td>
                  <td className='text-center border-b border-yellow-100'>
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    Hive Marketing
                  </td>
                  <td className='text-center border-b border-yellow-100'>-</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    Maintenance Tracker
                  </td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    24/7 Chat Support
                  </td>
                  <td className='text-center border-b border-yellow-100'>-</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    Tenant Messaging
                  </td>
                  <td className='text-center border-b border-yellow-100'>-</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                </tr>
                <tr>
                  <td className='py-2 px-3 border-b border-yellow-100'>
                    3rd Party Marketing
                  </td>
                  <td className='text-center border-b border-yellow-100'>-</td>
                  <td className='text-center border-b border-yellow-100'>-</td>
                  <td className='text-center border-b border-yellow-100'>✔</td>
                </tr>
                <tr>
                  <td className='py-2 px-3'>AI Document Creation</td>
                  <td className='text-center'>-</td>
                  <td className='text-center'>-</td>
                  <td className='text-center'>✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'>
          {tierData.map((tier, i) => (
            <div
              key={tier.name}
              className={`${tier.color} rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center min-w-0 min-h-[370px] h-full justify-between`}
            >
              <h3
                className={`text-lg sm:text-xl font-semibold ${tier.text} mb-2 text-center`}
              >
                {tier.name}
              </h3>
              {/* Tabs */}
              <div className='flex gap-2 mb-2'>
                {priceTabs.map((tab, tabIdx) => (
                  <button
                    key={tab.key}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                      selectedTab[i] === tabIdx
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-white text-yellow-700 border-yellow-200 hover:bg-yellow-100'
                    }`}
                    onClick={() => handleTab(i, tabIdx)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Price */}
              <p
                className={`text-2xl sm:text-3xl font-bold ${tier.priceText} mb-2 text-center`}
              >
                {(() => {
                  const tabKey = priceTabs[selectedTab[i]]
                    .key as keyof typeof tier.price;
                  const value = tier.price[tabKey];
                  return typeof value === 'number' ? (
                    <span>£{value}</span>
                  ) : (
                    value
                  );
                })()}
              </p>
              <ul
                className={`text-xs sm:text-sm mb-6 space-y-2 text-center ${tier.text}`}
              >
                {tier.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={`font-semibold py-2 px-4 rounded w-full transition text-xs sm:text-base ${tier.button}`}
              >
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Reviews Section */}
      <section
        id='reviews'
        className='w-full max-w-6xl mx-auto mb-24 px-2 sm:px-4 mt-24 sm:mt-32'
      >
        <h2 className='text-2xl font-bold text-yellow-900 mb-8 text-center'>
          What Our Users Say
        </h2>
        <ReviewsCarousel />
      </section>

      <footer className='w-full max-w-2xl md:max-w-4xl xl:max-w-6xl mx-auto py-6 sm:py-8 flex flex-col items-center mt-8 sm:mt-12 text-yellow-800 text-xs sm:text-sm px-4 sm:px-0'>
        <div className='mb-2 text-center'>
          &copy; {new Date().getFullYear()} Property Hive. All rights reserved.
        </div>
        <div className='flex flex-col xs:flex-row gap-2 xs:gap-4 items-center justify-center'>
          <a href='#' className='hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='hover:underline'>
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
