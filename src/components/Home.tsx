import { ArrowRight, Activity, ShieldAlert, Heart, Calendar, BadgeCheck, MapPin, Clock, HeartHandshake, Phone } from 'lucide-react';
import type { TabType } from '../types';

interface HomeProps {
  setActiveTab: (tab: TabType) => void;
  openBooking: () => void;
  openEmergency: () => void;
}

export default function Home({ setActiveTab, openBooking, openEmergency }: HomeProps) {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#f0f3ff] rounded-3xl py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1 space-y-6">
            <span className="inline-block bg-[#d8e2ff] text-[#001a41] px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm">
              Trusted Dental & Implant Excellence
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-[#111c2c] leading-tight">
              Your Trusted Smile <span className="text-[#004597]">Partner 24/7</span>
            </h1>
            <p className="text-base md:text-lg text-[#424753] leading-relaxed max-w-xl">
              Providing compassionate care and modern state-of-the-art dental solutions for our community in Dhaka. Accessible, clean, and patient-focused oral healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setActiveTab('services')}
                className="bg-[#004597] text-white h-12 px-8 rounded-xl flex items-center justify-center font-medium shadow-md hover:bg-[#00387a] transition-all duration-200 active:scale-95"
              >
                Our Specialties
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="border border-[#004597] text-[#004597] bg-white hover:bg-[#f0f3ff] h-12 px-8 rounded-xl flex items-center justify-center font-medium transition-all duration-200 active:scale-95"
              >
                Contact Specialist
              </button>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-[#e7eeff]">
              <img
                alt="A friendly medical professional"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsjqAtcgwaZeMTn5E7qA1DQ-heCXhljbOHEcsGdnau1jwzkkF1bkfBoJJyGjL-iJfWbzzrdP-9Rpo3PRp8IFvcqkR2VvWQbn_FTRt1vLB0PSBaR0hwaLvrP7cMCpV_T3WuKODu-hrzu1Ea7xDGYuqaORyr8edn_8DtGYKdVL8iUFPyvSBsAdNWnnJtoX1NzBcrvE4LuxolMr_wfU_9420J9EFLCq-Bz1sRssN0q3U70JMophmq0b36caO8A"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004597]/25 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7df4ff] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ccdaff] rounded-full mix-blend-multiply filter blur-xl opacity-45 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-8 max-w-7xl mx-auto space-y-10" id="services-intro">
        <div className="text-center space-y-3">
          <h2 className="font-headline text-3xl font-bold text-[#111c2c]">Comprehensive Dental Solutions</h2>
          <div className="w-16 h-1.5 bg-[#004597] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Orthodontics & Invisalign (Large Featured Card) */}
          <div className="col-span-1 md:col-span-8 bg-white border border-[#e2e8f0] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex-1 space-y-4">
              <div className="p-3 bg-[#e7eeff] text-[#004597] rounded-2xl w-fit">
                <BadgeCheck className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#111c2c]">Orthodontics & Invisalign</h3>
              <p className="text-sm md:text-base text-[#424753] leading-relaxed">
                Transform your smile with premium conventional ceramic braces or modern, ultra-comfortable custom clear Invisalign aligners. Formulated by elite Orthodontists.
              </p>
              <button
                onClick={() => setActiveTab('services')}
                className="text-[#004597] font-bold text-sm tracking-wide gap-1 flex items-center hover:translate-x-1.5 transition-transform duration-200"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full md:w-[45%] aspect-video rounded-2xl bg-[#e7eeff] overflow-hidden shadow-inner border border-[#dee8ff]">
              <img
                className="w-full h-full object-cover"
                alt="Orthodontic and Invisalign visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkfmLpj-dunT3WbA3v4Hi5IGyulcceK1uzU3syWz2QBNghOemIY3oojTXsttUUEJB6IOEx09XLrE2gNiJcwzQ3_XgEVcvWQlGGbmkApz3P6nWJZ4_P8pFVQ03-h9Eol9VehuWof4A8neBHBW5xRnLtAQOI_lYV1LJTXkpxjr-I8-vRegmazQasiLIYHs-0C-l9nK3fe8Qx2O5VCy8p8dCafaM2xOAEhzlklJssJVGSUB2o5qZwfr2E4B7VbDog3fOkL8v5dn0akyds"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Dental Implants */}
          <div className="col-span-1 md:col-span-4 bg-[#dee8ff] border border-[#c2c6d5] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-white text-[#004597] rounded-2xl w-fit shadow-xs">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-headline text-xl font-bold text-[#111c2c]">Premium Implants</h3>
              <p className="text-sm text-[#424753] leading-relaxed">
                Restore bite functionality and aesthetics permanently with bio-compatible titanium roots and customized crowns.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-[#004597] font-bold text-xs mt-6 uppercase tracking-wider flex items-center gap-1 hover:translate-x-1 transition-all"
            >
              Explore implants <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Emergency 24/7 Dental */}
          <div className="col-span-1 md:col-span-4 bg-[#ba1a1a] text-white rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="p-3 bg-white/10 text-white rounded-2xl w-fit">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="font-headline text-xl font-bold">24/7 Dental Pain Relief</h3>
              <p className="text-sm text-red-100 leading-relaxed">
                Emergency tooth extractions, abscess drainages, and trauma stabilization when you need clinical relief instantly.
              </p>
            </div>
            <div className="mt-8 space-y-2 relative z-10">
              <span className="text-xs text-red-200 block">Dental Helpline:</span>
              <button
                onClick={openEmergency}
                className="w-full bg-white text-[#ba1a1a] py-3 px-4 rounded-xl font-bold tracking-wide shadow-md flex items-center justify-center gap-2 hover:bg-red-50 transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4 animate-bounce" /> 01712599003
              </button>
            </div>
            <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <ShieldAlert className="w-32 h-32" />
            </div>
          </div>

          {/* Root Canal Therapy */}
          <div className="col-span-1 md:col-span-4 bg-white border-2 border-dashed border-[#c2c6d5] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-[#f0f3ff] text-[#004597] rounded-2xl w-fit">
                <Heart className="w-6 h-6 text-[#004597]" />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#111c2c]">Root Canal Therapy</h3>
              <p className="text-sm text-[#424753] leading-relaxed">
                Save natural teeth painlessly and quickly via micro-endodontic rotary files. High precision and zero infection risks.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-[#004597] font-bold text-xs mt-6 tracking-wide flex items-center gap-1 hover:underline"
            >
              Learn about root canals
            </button>
          </div>

          {/* Cosmetic Scaling & Makeover */}
          <div className="col-span-1 md:col-span-4 bg-[#7af1fc]/35 text-[#006e75] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between border border-[#5dd8e2]/50 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-white text-[#006970] rounded-2xl w-fit shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-lg font-semibold text-[#111c2c]">Cosmetic Scaling</h3>
              <p className="text-sm text-[#424753] leading-relaxed">
                Digital teeth cleaning, laser whitening, scaling, and ceramic veneers to shape a beautiful bright smile.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('services')}
              className="text-[#006e75] font-bold text-xs mt-6 uppercase tracking-wider flex items-center gap-1 hover:translate-x-1 transition-transform"
            >
              Smile Makeover pricing <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* About Us / Location Section */}
      <section className="py-12 bg-white rounded-3xl border border-[#e2e8f0] shadow-xs px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-96 relative group border border-[#c2c6d5]">
            <div className="w-full h-full bg-[#dee8ff]">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Doctor BD 24 Modern facility building at twilight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwZ6LNR1YFYkjZlkGJbhGppdtqaDYlaUSCJDgAl4nr7m07Saa0EpQz9393kR69Mb6rkS37uVRGLxWlgGsqYiPa_pYCuir60qdV1b41xHDBDr7a52g_8U75avGVOH5R_qGfHvli9IbXLDQQIZcYpQICCsGmEVMt0gIpBXKGRnTvf0JMEHyuvImaoYlPmH1B_od_6VYInEnzspTd4JkQiJ5rGDwMl2IRAQ4kGln2sdaaGqiSnPo0w69zwhWKiBgE9MIgPgTok0-Blpnq"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#004597]/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-extrabold text-[#111c2c] leading-snug">
              Rooted in Biharipara, Dhaka
            </h2>
            <p className="text-base text-[#424753] leading-relaxed">
              Doctor BD 24 has been a beacon of dental excellence in the Mirpur community. Located at House 5/1/K-13, Ansar Camp Road, our modern clinic is designed with specialized dental chairs, active sterilization units, and digital panorama X-Ray configurations.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-[#f0f3ff] rounded-2xl hover:shadow-xs transition-shadow">
                <MapPin className="w-6 h-6 text-[#004597] shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-bold text-sm text-[#111c2c]">Our Location</p>
                  <p className="text-sm text-[#424753]">House 5/1/K-13, Biharipara, Ansar Camp Rd, Dhaka 1216</p>
                  <a 
                    href="https://www.google.com/maps/place/Professor+Dental,+Mirpur./@23.7903084,90.3528151,639m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755c0ea7accc2a5:0x3a15e46e674c4a74!8m2!3d23.7903035!4d90.35539!16s%2Fg%2F11gfn8qj9p?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs text-[#004597] font-bold mt-2 hover:underline hover:text-[#00387a]"
                  >
                    Get Directions on Google Maps ↗
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#f0f3ff] rounded-2xl hover:shadow-xs transition-shadow">
                <Clock className="w-6 h-6 text-[#004597] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-sm text-[#111c2c]">Working Hours</p>
                  <p className="text-sm text-[#424753]">Open 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success CTA */}
      <section className="py-12 max-w-7xl mx-auto" id="success">
        <div className="bg-[#0d5cc1] text-[#ccdaff] rounded-[3rem] p-8 md:p-14 relative overflow-hidden text-center shadow-xl">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#7af1fc]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
              Thousands of Healthy Smiles
            </h2>
            <p className="text-sm md:text-base text-blue-100 opacity-90 leading-relaxed">
              We take deep pride in our 98% patient satisfaction rate. Our experienced dental surgeons, certified orthodontists, and state-of-the-art sterile environments provide unparalleled quality of oral healthcare in Dhaka.
            </p>

            <div className="flex justify-center gap-8 md:gap-12 pt-6">
              <div className="flex flex-col items-center">
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-white">15k+</span>
                <span className="text-xs uppercase tracking-wider text-blue-200">Patients Served</span>
              </div>
              <div className="w-[1px] h-12 bg-white/20 self-center"></div>
              <div className="flex flex-col items-center">
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-white">50+</span>
                <span className="text-xs uppercase tracking-wider text-blue-200">Specialists</span>
              </div>
              <div className="w-[1px] h-12 bg-white/20 self-center"></div>
              <div className="flex flex-col items-center">
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-white">24/7</span>
                <span className="text-xs uppercase tracking-wider text-blue-200">Availability</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={openBooking}
                className="bg-[#7af1fc] text-[#004f54] hover:bg-[#5dd8e2] py-3.5 px-8 rounded-full font-bold transition-all shadow-md active:scale-95"
              >
                Book Appointment Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
