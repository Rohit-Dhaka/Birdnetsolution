import {
  Leaf,
  Shield,
  Bird,
  Bug,
  Building2,
  Fence,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Green Parda",
      description:
        "High-quality green parda for safety, privacy, and protection.",
      icon: Leaf,
    },
    {
      title: "Solar Power Fencing",
      description:
        "Advanced solar fencing system for maximum property security.",
      icon: Zap,
    },
    {
      title: "Spike Installation",
      description:
        "Prevent birds from landing on roofs, ledges, and balconies.",
      icon: Fence,
    },
    {
      title: "Bird Net Service",
      description:
        "Premium bird net solutions for homes, offices, and industries.",
      icon: Bird,
    },
    {
      title: "Mosquito Net Service",
      description:
        "Protect your family from mosquitoes and insects effectively.",
      icon: Bug,
    },
    {
      title: "Invisible Grill",
      description:
        "Modern invisible grills for balcony and window safety.",
      icon: Building2,
    },
    {
      title: "Safety Net Service",
      description:
        "Strong safety nets for children, pets, and families.",
      icon: Shield,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Professional
            <span className="block text-orange-500">
              Safety Solutions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We provide high-quality bird protection and safety
            solutions for homes, apartments, offices, and
            commercial buildings with professional installation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/50"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
                    <Icon
                      size={32}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-orange-500 transition group-hover:gap-4">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold">
            Need Professional Installation?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Contact our expert team today and get a free site
            inspection along with the best safety solution for
            your property.
          </p>

          <a
            href="tel:+917568005390"
            className="mt-8 inline-flex items-center rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            📞 Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}