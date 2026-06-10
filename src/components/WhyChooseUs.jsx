import {
  ShieldCheck,
  Award,
  Wallet,
  Zap,
  Smile,
  Headphones,
  Phone,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Installation",
      description:
        "Our experienced team ensures safe and professional installation for homes, offices, and commercial properties.",
      icon: <ShieldCheck size={34}/>,
    },
    {
      title: "Premium Quality",
      description:
        "We use high-quality nets, grills, and safety materials that ensure long-lasting protection.",
      icon: <Award size={34}/>,
    },
    {
      title: "Affordable Pricing",
      description:
        "Get the best bird protection solutions at competitive and budget-friendly prices.",
      icon: <Wallet size={34}/>,
    },
    {
      title: "Fast Service",
      description:
        "Quick response times and efficient project completion without compromising quality.",
      icon: <Zap size={34}/>,
    },
    {
      title: "Customer Satisfaction",
      description:
        "Trusted by hundreds of satisfied customers who rely on our professional services.",
      icon: <Smile size={34}/>,
    },
    {
      title: "24/7 Support",
      description:
        "Our team is always available to assist you with your safety and bird control requirements.",
      icon: <Headphones size={34}/>,
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
    },
    {
      value: "100%",
      label: "Customer Satisfaction",
    },
    {
      value: "7+",
      label: "Professional Services",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-400">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Trusted Safety Solutions
            <span className="block text-orange-500">
              For Every Space
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Aashiyana Bird Net Solutions provides reliable,
            affordable, and professional bird protection services
            designed to safeguard homes, offices, balconies,
            factories, and commercial spaces with premium quality
            installations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/50"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-4xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-orange-500 md:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-slate-400 md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold">
            Ready to Protect Your Property?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Get professional bird net installation and safety
            solutions from Jaipur's trusted experts.
          </p>

          <a
            href="tel:+917568005390"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <Phone/> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}