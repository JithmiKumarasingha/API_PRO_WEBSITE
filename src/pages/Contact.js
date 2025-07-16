import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Message sent!');
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-700 mb-8">Have a technical question, a sales inquiry, or just want to chat? We'd love to hear from you.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Work Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full border p-2 rounded h-32" required />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
      <div className="mt-12 text-gray-600">
        <p><strong>Our Office:</strong> 123 Tech Avenue, Innovation City, Connectiville 45678</p>
        <p><strong>Email Us:</strong> hello@apipro.com</p>
        <p><strong>Call Us:</strong> +1 (555) 123-4567</p>
      </div>
    </section>
  );
};

export default Contact;
