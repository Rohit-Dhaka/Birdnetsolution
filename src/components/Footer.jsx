import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Aashiyana Bird Net Solutions
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We provide professional Bird Net, Safety Net,
              Invisible Grill, Mosquito Net, Solar Fencing,
              and Spike Installation services across Jaipur.
              Our mission is to ensure safety, protection,
              and peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to='/' className="hover:text-orange-400 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/why-choose-us" className="hover:text-orange-400 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link to="/our-dream" className="hover:text-orange-400 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">
                  Our Dream
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-orange-400 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-400 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">
                  Contact 
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 flex flex-col">
              <Link to="/services" className=" hover:text-orange-500 duration-300">Bird Net Service</Link>
              <Link to="/services" className=" hover:text-orange-500 duration-300">Safety Net Service</Link>
              <Link to="/services" className=" hover:text-orange-500 duration-300">Invisible Grill</Link>
              <Link to="/services" className=" hover:text-orange-500 duration-300">Mosquito Net Service</Link>
              <Link to="/services" className=" hover:text-orange-500 duration-300">Spike Installation</Link>
              <Link to="/services" className=" hover:text-orange-500 duration-300">Solar Power Fencing</Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0" size={18} />
                <p>
                  Shop No. 62, Manglam Ananda Apartment,
                  Sanganer, Jaipur - 302029
                </p>
              </div>

              <div className="flex items-center gap-3">
                  <a href="tel:7568005390">
                    <Phone size={18} className=" cursor-pointer"  />                  
                </a>
                <a href="tel:7568005390">
                  +91 7568005390
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className=" cursor-pointer"  />
               <a href="mailto:aashiyanabirdnet@gmail.com">
                aashiyanabirdnet@gmail.com
               </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Subscribe For Updates
              </h3>

              <p className="mt-2 text-slate-400">
                Get updates about our latest services,
                offers and safety solutions.
              </p>
            </div>

            <form action="https://formsubmit.co/rohitdhaka2110@gmail.com" method="POST" className="flex w-full max-w-lg overflow-hidden rounded-xl border border-slate-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="bg-orange-500 px-5 text-white hover:bg-orange-600 transition cursor-pointer"
                  aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm max-sm:text-center">
            © {year} Aashiyana Bird Net Solutions. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/termsconditions">Terms & Conditions</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}