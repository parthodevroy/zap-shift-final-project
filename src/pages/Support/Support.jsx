import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I report a lost parcel?",
    a: "Go to the 'Create Report' section and submit details about your parcel including tracking ID.",
  },
  {
    q: "How to track my delivery?",
    a: "Use your tracking ID in the 'Track Parcel' section to see live updates.",
  },
  {
    q: "Can I report anonymously?",
    a: "Yes, you can submit a report without revealing your personal information.",
  },
  {
    q: "How long will it take to resolve a delivery issue?",
    a: "Most issues get reviewed within 24 hours, and you will receive an update via email.",
  },
];

const Support = () => {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", parcelId: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitReport = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.parcelId || !form.message) {
      setStatus({ ok: false, msg: "Please fill all fields." });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); 
    setLoading(false);
    setStatus({ ok: true, msg: "Report submitted successfully!" });
    setForm({ name: "", email: "", parcelId: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white black">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="bg-green-600 text-black px-4 py-1 rounded-full text-sm inline-block">
            Parcel Support
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Report a delivery issue & keep your parcels safe
          </h1>

          <p className="text-gray-800 max-w-lg">
            Submit issues for lost parcels, delayed deliveries, or suspicious activity.
            Our support team will review and resolve quickly.
          </p>

          <div className="flex gap-3">
            <a href="#form" className="px-6 py-3 bg-green-600 rounded-xl text-black font-bold shadow-xl">
              Create Report
            </a>
            <a href="#faqs" className="px-6 py-3 border border-gray-700 rounded-xl hover:border-gray-500">
              View FAQs
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-green-900/20">
            <img
              className="w-full h-80 object-cover"
              src="https://cdn.pixabay.com/photo/2022/01/28/12/17/florist-6974505_1280.jpg"
              alt="parcel delivery"
            />
          </div>
        </motion.div>
      </header>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto text-white px-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: "📦", title: "Report Parcels", desc: "Lost, damaged, or delayed parcels." },
          { icon: "🚨", title: "Safety Alerts", desc: "Suspicious delivery or suspicious persons." },
          { icon: "💬", title: "Customer Support", desc: "Get assistance with your deliveries." },
        ].map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="p-6 bg-[#0c151d] border border-green-600/20 shadow-xl rounded-2xl"
          >
            <p className="text-4xl">{c.icon}</p>
            <h3 className="text-xl font-bold mt-3">{c.title}</h3>
            <p className="text-white mt-2">{c.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FORM + FAQ */}
      <main className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* FORM */}
        <motion.div
          id="form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white text-black p-8 rounded-3xl border border-green-600/20 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-3">Submit a Delivery Report</h2>

          <form onSubmit={submitReport} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="input-field border-2 border-gray-100"
              />
              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="input-field border-2 border-gray-100"
              />
            </div>

            <input
              name="parcelId"
              placeholder="Parcel ID / Tracking Number"
              value={form.parcelId}
              onChange={handleChange}
              className="input-field border-2 border-gray-100"
            />

            <textarea
              name="message"
              placeholder="Describe the issue..."
              value={form.message}
              onChange={handleChange}
              className="input-field h-32 border-2 border-gray-100"
            />

            <button
              disabled={loading}
              className="w-full py-3 bg-green-600 text-white font-bold rounded-xl"
            >
              {loading ? "Submitting..." : "Submit Report"}
            </button>

            {status && (
              <p className={`${status.ok ? "text-green-400" : "text-red-400"} mt-2`}>
                {status.msg}
              </p>
            )}
          </form>
        </motion.div>

        {/* FAQ */}
        <div id="faqs" className="space-y-4">
          <h2 className="text-xl font-bold">FAQs</h2>
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#0c151d] text-white p-4 rounded-xl border border-green-600/20">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="font-semibold text-lg w-full text-left"
              >
                {f.q}
              </button>
              {open === i && <p className="text-white mt-2">{f.a}</p>}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Support;
