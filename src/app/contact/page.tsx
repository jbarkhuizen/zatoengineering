"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    serviceType: "precision-grinding",
    message: "",
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Sending your form state
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Optional: Reset form data state here to clear the inputs
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('An unexpected error occurred.');
  }
};

  return (
    <main className="w-full min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto block">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4 block">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Contact <span className="text-blue-500 font-medium">US</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Connect with our engineering specialists. Submit your components' technical specifications for precision grinding, hard chroming, or cylinder reconditioning.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Side: Info (Takes 5 cols) */}
          <div className="lg:col-span-5 space-y-8 block">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-zinc-100 tracking-tight">
                Zato Engineering Workshop
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Over 60 years of precision engineering experience. Our facility is fully equipped to handle large-scale industrial components and high-tolerance restorations.
              </p>
            </div>

            <div className="space-y-4 block">

            {/* Card 1 */}

              <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-zato-gold/80 hover:bg-slate-900/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                <h3 className="font-medium text-slate-200 group-hover:text-zato-gold transition-colors">
                    Specialised Services
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Cylinder reconditioning, precision cylindrical grinding, heavy industrial hard chrome plating, and custom machining.
                </p>
              </div>
              
            {/* Card 2 */}

              <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-zato-gold/80 hover:bg-slate-900/40 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                <h3 className="font-medium text-slate-200 group-hover:text-zato-gold transition-colors">
                    Quality Turnaround
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    All components are inspected, ground, and plated to precise original equipment manufacturer (OEM) tolerances.
                </p>
              </div>

            </div>

            <div className="pt-8 border-t border-zinc-900 space-y-3 text-sm text-zinc-400 block">
              <p><strong className="text-zinc-200">Technical Inquiries:</strong> admin@zatoeng.co.za</p>
              <p><strong className="text-zinc-200">Contact Office:</strong>+27 11 362 5832</p>
              <p><strong className="text-zinc-200">Contact Cell:</strong>+27 82 780 7392</p>
              <p><strong className="text-zinc-200">Operating Hours:</strong> Mon – Fri: 07:30 – 15:00</p>
            </div>
          </div>

          {/* Right Side: Form (Takes 7 cols) */}
          <div className="lg:col-span-7 p-6 md:p-10 rounded-2xl border border-zinc-900 bg-zinc-900/10 block relative z-20">
            <form onSubmit={handleSubmit} className="space-y-6 block">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="G. Botha"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Engineering Firm Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Required Service
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="precision-grinding">Precision Grinding</option>
                  <option value="hard-chroming">Hard Chroming</option>
                  <option value="rock-drill-reconditioning">Rock Drill / Cylinder Reconditioning</option>
                  <option value="general-machining">General Industrial Machining / RFQ</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Scope of Work
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Please list component dimensions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium text-white transition-colors duration-200 cursor-pointer text-center block tracking-wide relative z-30 active:scale-[0.99]"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}