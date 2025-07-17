import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Up to 1,000 API calls/month',
        'Basic analytics dashboard',
        'Email support',
        'Standard rate limiting',
        'Basic documentation',
        'Community forum access'
      ],
      limitations: [
        'No custom domains',
        'Limited integrations',
        'No advanced security features'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Ideal for growing teams and businesses',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Up to 100,000 API calls/month',
        'Advanced analytics & insights',
        'Priority email & chat support',
        'Custom rate limiting',
        'Auto-generated documentation',
        'Advanced monitoring & alerts',
        'Custom domains',
        'Team collaboration tools',
        'OAuth 2.0 authentication'
        
      ],
      limitations: [
        'Limited to 5 team members',
        'Standard SLA'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with specific needs',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Unlimited API calls',
        'AI-powered analytics',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solutions',
        'Advanced security & compliance',
        'Custom SLA up to 99.99%',
        'Unlimited team members',
        'Multi-region deployment',
        'Custom workflows',
        'Advanced audit logs',
        'Custom reporting'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];


  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return 'Free';
    const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    const period = billingPeriod === 'monthly' ? 'month' : 'year';
    return `$${price}/${period}`;
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0) return '';
    const annualPrice = plan.yearlyPrice;
    const monthlyTotal = plan.monthlyPrice * 12;
    const savings = Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100);
    return billingPeriod === 'yearly' ? `Save ${savings}%` : '';
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent <span className="text-purple-300">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-white' : 'text-purple-300'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingPeriod === 'yearly' ? 'bg-purple-600' : 'bg-purple-400'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === 'yearly' ? 'text-white' : 'text-purple-300'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="ml-2 bg-purple-600 text-purple-100 px-2 py-1 rounded-full text-sm">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow ${
                  plan.popular ? 'border-2 border-purple-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {getPrice(plan)}
                  </div>
                  {getSavings(plan) && (
                    <div className="text-green-600 font-semibold text-sm">
                      {getSavings(plan)}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Features:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 text-lg">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Limitations:</h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2 text-lg">×</span>
                          <span className="text-gray-600 text-sm">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
 </div>
  );
};

export default Pricing;