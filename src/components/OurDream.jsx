import ImageComparison from "./ImageComparison";

export default function OurDream() {
  return (
    <section
      id="our-dream"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div>
           <ImageComparison/>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wider">
              Our Dream
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Creating Safer Spaces For Every Family
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Our dream is to provide reliable safety solutions
              that protect homes, balconies, terraces, offices,
              and commercial spaces while ensuring the safety of
              birds and the environment.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We aim to become Jaipur's most trusted Bird Net and
              Safety Net service provider by delivering premium
              quality materials, professional installation, and
              complete customer satisfaction.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="text-3xl font-bold text-orange-500">
                  100%
                </h3>
                <p className="text-slate-700 mt-2">
                  Customer Satisfaction
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="text-3xl font-bold text-orange-500">
                  24/7
                </h3>
                <p className="text-slate-700 mt-2">
                  Customer Support
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}