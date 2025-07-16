import React from 'react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '$0 / month',
    features: ['1 Project', '10,000 API Calls/mo', 'Basic Analytics', 'Community Support'],
    cta: 'Start for Free'
  },
  {
    name: 'Pro',
    price: '$49 / month',
    features: ['10 Projects', '1 Million API Calls/mo', 'AI-Powered Analytics', 'Advanced Security', 'Email Support'],
    cta: 'Choose Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: "Let's Talk",
    features: ['Unlimited Projects', 'Custom API Call Volume', 'On-Premise Deployment', 'Security Audits', '24/7 Support'],
    cta: 'Contact Sales'
  }
];

const Pricing = () => (
  <section className="py-16 px-4 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
    <p className="text-center mb-12 text-gray-600">Start for free and scale as you go. No hidden fees, ever.</p>
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div key={plan.name} className={`p-6 border rounded-lg shadow ${plan.popular ? 'border-blue-600' : ''}`}>
          {plan.popular && <p className="text-sm font-bold text-blue-600 mb-2">Most Popular</p>}
          <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-xl text-gray-800 mb-4">{plan.price}</p>
          <ul className="mb-4 space-y-2 text-gray-700">
            {plan.features.map((f, i) => <li key={i}>• {f}</li>)}
          </ul>
          <Button>{plan.cta}</Button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
