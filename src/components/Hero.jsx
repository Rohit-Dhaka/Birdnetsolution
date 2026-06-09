import { Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              <ShieldCheck size={16} />
              Trusted Bird Net Solutions In Jaipur
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
              Safety For Birds,
              <span className="block text-orange-500">
                Peace For You!
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Professional Bird Net, Safety Net, Invisible Grill,
              Mosquito Net, Spike Installation and Solar Fencing
              Services. Protect your home, balcony and family
              with premium quality safety solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white hover:bg-orange-600 transition"
              >
                Get Free Quote
              </a>

              <a
                href="tel:+917568005390"
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-4 hover:border-orange-500 transition"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  500+
                </h3>
                <p className="text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  100%
                </h3>
                <p className="text-slate-400">
                  Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  24/7
                </h3>
                <p className="text-slate-400">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-3xl"></div>

            <img
              src="/hero-bird-net.jpg"
              alt="Bird Net Service"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}