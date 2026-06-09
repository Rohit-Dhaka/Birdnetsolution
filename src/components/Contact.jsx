import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      value:
        "Shop No. 62, Manglam Ananda Apartment, Sanganer, Jaipur - 302029",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 7568005390",
      link: "tel:+917568005390",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "info@aashiyanabirdnet.com",
      link: "mailto:info@aashiyanabirdnet.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sun : 8:00 AM - 8:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Let's Discuss Your
            <span className="block text-orange-500">
              Safety Requirements
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Need Bird Net, Safety Net, Invisible Grill or Mosquito
            Net installation? Contact us today for a free
            consultation and quotation.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-4 rounded-2xl border border-white/5 p-4 transition-all duration-300 hover:border-orange-500/30 hover:bg-white/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
                      <Icon
                        size={24}
                        className="text-orange-500"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="mt-1 block text-slate-400 transition hover:text-orange-500"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-slate-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+917568005390"
                className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/917568005390"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold">
              Request A Free Quote
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-orange-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-orange-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-orange-500"
              />

              <select
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-orange-500"
              >
                <option className="text-black">
                  Select Service
                </option>
                <option className="text-black">
                  Bird Net Installation
                </option>
                <option className="text-black">
                  Safety Net
                </option>
                <option className="text-black">
                  Invisible Grill
                </option>
                <option className="text-black">
                  Mosquito Net
                </option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your requirements..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                500+
              </h3>
              <p className="mt-2 text-slate-400">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                100%
              </h3>
              <p className="mt-2 text-slate-400">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
                Support Available
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">
                7+
              </h3>
              <p className="mt-2 text-slate-400">
                Professional Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}