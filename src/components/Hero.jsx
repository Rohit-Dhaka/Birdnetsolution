import { Phone, ShieldCheck } from "lucide-react";

import GreenParda from "../assets/Images/Png/GreenParda.webp";
import SolarFencing from "../assets/Images/Png/SolarPowerFencing.webp";
import SpikeInstallation from "../assets/Images/Png/SpikeInstallation.webp";
import BirdNet from "../assets/Images/Png/BirdNetService.webp";
import MosquitoNet from "../assets/Images/Png/MosquitoNetService.webp";
import InvisibleGrill from "../assets/Images/Png/InvisibleGrillService.webp";
import SafetyNet from "../assets/Images/Png/SafetyNetService.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const services = [
    { title: "Green Parda", image: GreenParda },
    { title: "Solar Power Fencing", image: SolarFencing },
    { title: "Spike Installation", image: SpikeInstallation },
    { title: "Bird Net Service", image: BirdNet },
    { title: "Mosquito Net Service", image: MosquitoNet },
    { title: "Invisible Grill Service", image: InvisibleGrill },
    { title: "Safety Net Service", image: SafetyNet },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* Content First */}
    <div className="order-1">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
        <ShieldCheck size={16} />
        Trusted Bird Net Solutions In Jaipur
      </span>

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Safety For Birds,
        <span className="block text-orange-500">
          Peace For You!
        </span>
      </h1>

      <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
        Professional Bird Net, Safety Net, Invisible Grill,
        Mosquito Net, Spike Installation and Solar Fencing
        Services. Protect your home, balcony and family
        with premium quality safety solutions.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="w-full sm:w-auto text-center rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white hover:bg-orange-600 transition"
        >
          Get Free Quote
        </a>

        <a
          href="tel:+917568005390"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-7 py-4 hover:border-orange-500 transition"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6">
        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            500+
          </h3>
          <p className="text-slate-400">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            100%
          </h3>
          <p className="text-slate-400">Satisfaction</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            24/7
          </h3>
          <p className="text-slate-400">Support</p>
        </div>
      </div>
    </div>

    
    
      

    <div className="order-2 lg:order-2">
        <Swiper
modules={[Autoplay, Pagination]}
        observer={true}
        observeParents={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full rounded-3xl overflow-hidden relative"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-200">
                  Premium quality installation service
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    

  </div>
</div>
    </section>
  );
}