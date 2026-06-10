import GreenParda from "../assets/Images/Png/GreenParda.png";
import SolarFencing from "../assets/Images/Png/SolarPowerFencing.png";
import SpikeInstallation from "../assets/Images/Png/SpikeInstallation.png";
import BirdNet from "../assets/Images/Png/BirdNetService.png";
import MosquitoNet from "../assets/Images/Png/MosquitoNetService.png";
import InvisibleGrill from "../assets/Images/Png/InvisibleGrillService.png";
import SafetyNet from "../assets/Images/Png/SafetyNetService.png";

export default function Gallery() {
 const services = [
  {
    title: "Green Parda",
    image: GreenParda     
  },
  {
    title: "Solar Power Fencing",
    image: SolarFencing
      
  },
  {
    title: "Spike Installation",
    image: SpikeInstallation      
  },
  {
    title: "Bird Net Service",
    image: BirdNet
      
  },
  {
    title: "Mosquito Net Service",
    image: MosquitoNet
      
  },
  {
    title: "Invisible Grill Service",
    image: InvisibleGrill
      
  },
  {
    title: "Safety Net Service",
    image: SafetyNet
      
  },
];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Professional Safety Solutions
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600">
            Reliable bird net, safety net, mosquito net and fencing
            solutions for homes, offices and commercial spaces.
          </p>
        </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="overflow-hidden h-64">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900">
          {service.title}
        </h3>

        <div className="w-14 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}