import { useState } from 'react';
import { ShieldAlert, Users, Activity, Home as HomeIcon, Scissors, ArrowRight, HeartPulse, Sparkles, Phone, MapPin, BadgeCheck, FileText, X } from 'lucide-react';

interface ServicesProps {
  openBooking: () => void;
  openEmergency: () => void;
}

interface ServiceDetail {
  id: string;
  title: string;
  fullDesc: string;
  doctors: string[];
  pricing: string;
  duration: string;
  clinicalSteps: string[];
}

export default function Services({ openBooking, openEmergency }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const serviceExpandedData: Record<string, ServiceDetail> = {
    emergency: {
      id: 'emergency',
      title: 'Emergency 24/7 Dental Pain Relief',
      fullDesc: 'Providing specialized clinical stabilization for severe dental injuries, avulsed teeth, bleeding sockets, and dynamic facial swelling. Immediate procedures target instant pain relief.',
      doctors: ['Dr. S.M. Rahman, BDS, MS (Oral & Maxillofacial Implantology)', 'Dr. Tasnim Ara, BDS (Dental Surgery)'],
      pricing: 'Emergency Triage & Consultation: 800 BDT',
      duration: 'Immediate on-call clinician dispatch',
      clinicalSteps: [
        'Acute pain diagnostics and localized nerve block or safe numbing agent application',
        'Infection containment mapping and abscess drainage or temporary nerve sealing',
        'High-precision suturing for soft tissue hemorrhage or bleeding gums control',
        'Direct preparation for specialized oral surgery if structural trauma is detected'
      ]
    },
    consultation: {
      id: 'consultation',
      title: 'Orthodontics & Invisalign Consultation',
      fullDesc: 'Transform teeth alignment with modern dental braces (ceramic, self-ligating) or ultra-comfortable, custom clear Invisalign aligners under the supervision of highly certified Orthodontists.',
      doctors: ['Dr. Munadil Ahmed, BDS, DDS (Orthodontics)', 'Dr. Tasnim Ara, BDS (Dental Surgery)'],
      pricing: 'Standard Orthodontic Scan & Consultation: 1,500 BDT',
      duration: 'Consultation & 3D scan duration: 30-45 mins',
      clinicalSteps: [
        'High-speed digital intraoral scanner planning of your dental arc',
        'Comparative 3D teeth progression visual output generation',
        'Detailed treatment timeline outlining adjustments or customized tray delivery sequence'
      ]
    },
    diagnostic: {
      id: 'diagnostic',
      title: 'Premium Dental Implants & Oral Surgery',
      fullDesc: 'Safely and permanently restore missing clinical teeth roots via foreign-implanted high-grade titanium anchors topped with handcrafted ceramic dental crowns that fit your bite naturally.',
      doctors: ['Dr. S.M. Rahman, BDS, MS (Oral & Maxillofacial Implantology)', 'Dr. Farhana Yasmin, BDS, MS'],
      pricing: 'Titanium Implants starting at 35,000 BDT',
      duration: 'Procedure time: 45-60 mins per implant unit',
      clinicalSteps: [
        'Panoramic dental cone-beam CT or digital 2D X-Ray density evaluation',
        'Surgical precise socket preparation and titanium implant placement',
        'Post-operative healing checkup and final solid porcelain crown fitting'
      ]
    },
    homehealth: {
      id: 'homehealth',
      title: 'Painless Root Canal Therapy (Endodontics)',
      fullDesc: 'Save a badly decayed or infected tooth completely without extraction. We clean infected dental pulp, sterilize canals, and seal roots securely.',
      doctors: ['Dr. Tasnim Ara, BDS, FCPS (Restorative Dentistry)', 'Dr. Farhana Yasmin, BDS, MS'],
      pricing: 'Single-visit painless root canal therapy: from 3,500 BDT',
      duration: 'Session duration: 40 mins',
      clinicalSteps: [
        'Advanced computer-guided local dental anesthesia block',
        'Precision rotary microscope-guided pulp and nerve cleaning',
        'Bio-compatible obturation root filling to prevent re-infection'
      ]
    },
    surgery: {
      id: 'surgery',
      title: 'Cosmetic Scaling, Polishing & Smile Makeover',
      fullDesc: 'Remove plaque buildup and reveal a dazzling bright smile. We use high-frequency ultrasonic dental scaling, stain sandblasting, and modern enamel-safe laser teeth whitening.',
      doctors: ['Dr. Sabrina Chowdhury, BDS, MPH', 'Dr. Farhana Yasmin, BDS, MS (Pedodontics)'],
      pricing: 'Premium Ultra-scaling: 1,200 BDT | Full Teeth Whitening: 8,000 BDT',
      duration: 'Aesthetic session: 30-45 mins',
      clinicalSteps: [
        'Ultrasonic micro-vibrations to loosen and wash away harmful tartar or calculus',
        'Abrasive-free dental paste polishing to eliminate tough coffee/tea stains',
        'Application of localized cavity-preventative fluoride varnish or laser bleaching gels'
      ]
    }
  };

  const handleOpenDetail = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleCloseDetail = () => {
    setSelectedServiceId(null);
  };

  return (
    <div className="space-y-16 animate-fade-in relative">
      {/* Services Hero Section */}
      <section className="text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#e7eeff] text-[#004597] px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Comprehensive Smile Care
            </span>
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-[#111c2c] leading-tight">
              Advanced Dental & Implant Services
            </h1>
            <p className="text-[#424753] leading-relaxed max-w-2xl">
              From preventative dental scaling to advanced Orthodontic aligners, premium Titanium implants, and 24/7 emergency endodontic care, Doctor BD 24 houses sterile dental suites and modern diagnostic systems.
            </p>
          </div>
          <div className="hidden md:block w-1/3">
            <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg border border-[#e2e8f0]">
              <img
                className="w-full h-full object-cover"
                alt="Clinic Interior at Doctor BD 24"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7XCFJdg--9LMeo49mOxNgQQA_Kb9COIsO7u0ZSu3AqpGvZon2kfkM2NljBMkszOwcoJRPpuWkPx3yNbEfkocUoWKXSvDzEyl70_297V8MOL9kYwy-xZOB6Ha2_uDLqYbFcpOfalw9yM0_I7jIoZ-vgLLi1yGefTYI14HBdD7FjE86rg6ex5Qv8JS3uh0E5TifrBNAOZIgrYaacOd0U_LnAc9r4K-g5qLA-dt6X5zc3Jr1bny--YQ9e_WPB1cxqE3FBke1l5oBTutI"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#004597]/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Service 1: Emergency Care */}
        <div
          onClick={() => handleOpenDetail('emergency')}
          className="md:col-span-8 bg-[#ffdad6] text-[#93000a] p-6 md:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-md cursor-pointer border border-[#ffdad6] group"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/50 rounded-2xl text-[#ba1a1a]">
                <ShieldAlert className="w-10 h-10" />
              </div>
              <span className="bg-[#ba1a1a] text-white px-4.5 py-1 rounded-full text-xs font-bold tracking-widest animate-pulse border border-[#fff2f0]">
                24/7 OPEN
              </span>
            </div>
            <h3 className="font-headline text-2xl font-extrabold text-[#93000a]">Urgent Dental Pain Relief</h3>
            <p className="text-sm md:text-base text-[#424753] leading-relaxed max-w-xl">
              Our specialized emergency endodontists and dental surgeons provide immediate relief for unbearable toothache pain, abscess gum swelling, bleeding sockets, and dental fractures.
            </p>
          </div>
          <div className="mt-8 relative z-10 flex">
            <button
              onClick={(e) => {
                e.stopPropagation();
                openEmergency();
              }}
              className="bg-[#ba1a1a] text-white hover:bg-[#93000a] h-11 px-6 rounded-full font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
            >
              Call Dental Emergency Now <Phone className="w-4 h-4 animate-bounce" />
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 text-[#ba1a1a] pointer-events-none transition-transform group-hover:scale-105 duration-500">
            <ShieldAlert className="w-72 h-72" />
          </div>
        </div>

        {/* Service 2: Braces & Invisalign */}
        <div
          onClick={() => handleOpenDetail('consultation')}
          className="md:col-span-4 bg-white border border-[#e2e8f0] p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="p-3 bg-[#f0f3ff] text-[#004597] rounded-2xl w-fit group-hover:bg-[#d8e2ff] transition-colors">
              <Users className="w-8 h-8 text-[#004597]" />
            </div>
            <h3 className="font-headline text-xl font-bold text-[#111c2c]">Braces & Invisalign</h3>
            <p className="text-sm text-[#424753] leading-relaxed">
              Straighten your teeth with ceramic/metal brackets or comfortable, completely invisible customized clear Invisalign aligners under elite certified orthodontists.
            </p>
          </div>
          <div className="mt-8 border-t border-[#e2e8f0] pt-4 flex justify-between items-center text-sm font-semibold text-[#004597] group-hover:text-[#00387a]">
            <span>View Dentists</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Service 3: Dental Implants & Surgery */}
        <div
          onClick={() => handleOpenDetail('diagnostic')}
          className="md:col-span-4 bg-white border border-[#e2e8f0] p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="p-3 bg-[#f0f3ff] text-[#004597] rounded-2xl w-fit group-hover:bg-[#d8e2ff] transition-colors">
              <Activity className="w-8 h-8 text-[#004597]" />
            </div>
            <h3 className="font-headline text-xl font-bold text-[#111c2c]">Implants & Oral Surgery</h3>
            <p className="text-sm text-[#424753] leading-relaxed">
              Permanent surgical dental replacement with premium bio-compatible titanium root anchors and handcrafted lifelike ceramic dental crowns.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
            <span className="bg-[#7af1fc]/20 text-[#006e75] text-[10px] uppercase tracking-wider font-bold px-2 rounded-md">TITANIUM ROOT</span>
            <span className="bg-[#7af1fc]/20 text-[#006e75] text-[10px] uppercase tracking-wider font-bold px-2 rounded-md">3D X-RAY</span>
            <span className="bg-[#7af1fc]/20 text-[#006e75] text-[10px] uppercase tracking-wider font-bold px-2 rounded-md">CROWNS</span>
          </div>
        </div>

        {/* Service 4: Painless Root Canal Therapy */}
        <div
          onClick={() => handleOpenDetail('homehealth')}
          className="md:col-span-4 bg-white border border-[#e2e8f0] p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="p-3 bg-[#f0f3ff] text-[#004597] rounded-2xl w-fit group-hover:bg-[#d8e2ff] transition-colors">
              <HomeIcon className="w-8 h-8 text-[#004597]" />
            </div>
            <h3 className="font-headline text-xl font-bold text-[#111c2c]">Painless Root Canals</h3>
            <p className="text-sm text-[#424753] leading-relaxed">
              Completely salvage decayed dental roots painlessly utilizing advanced rotary electronic endodontic microscopes and laser sterilization.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                alt="Female nurse"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiYH9bTGIgEU2-V6DmTUpXqk1KQ_VFPKz176iq7tj55b18aBdRe4Y0N7C7TSoVShs9YV-hBvg0SQLqtZdE-yODsFKZDgEXTAFoosJpY_c7v1OFjy-qwAM52ztcdWEMUYuAq9wEK18399pD38HTIdOnIxEtWCkJ1xQ37biTgyvL_jfU8zykdzn3ZXOfl3pHkDJlEAKC_ZuWOlaXWY4eCmy4Ba8V4SwtVjhQrbBFkBRL1OBJCI7fa7_KzCVT-SkasE6ODFlhMTcggl3-"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                alt="Male doctor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-d5gDD6W7XBaeEEtThxP57nZ9G-3Rxl2QLbzwXo6v1JLFSUTqF-qGd7EEwAT9fiYXshC74NygOnY89stAFadpzvEzxvQoPcO-HrRCW1lZSgiFMNcR1l6frWvUJlCU7vjVN3FWE3OG3xEI1Pv4uVAvb5bgmmAYEEcG8GrRemwsLilTNFvxr5XBX-6DXBhtyUJ21TyA15GBkqLtog1IWCxDO75r9-vT3OxMnbGMtNZonOewkRVW7kWFFmNEXUxh2pjT3GxoffI7MWd"
                referrerPolicy="no-referrer"
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#004597] text-white text-[9px] font-bold flex items-center justify-center">
                +4
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#006e75] tracking-wide">Daily Appointments</span>
          </div>
        </div>

        {/* Service 5: Cosmetic Scaling & Smile Makeover */}
        <div
          onClick={() => handleOpenDetail('surgery')}
          className="md:col-span-4 bg-[#004597] text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:opacity-95 hover:shadow-lg cursor-pointer group"
        >
          <div className="space-y-4">
            <div className="p-3 bg-white/10 text-white rounded-2xl w-fit">
              <Scissors className="w-8 h-8 rotate-90" />
            </div>
            <h3 className="font-headline text-xl font-bold text-white">Scaling & Whitening</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Professional ultrasonic dental scaling, stain removal, whitening, and custom ceramic veneers to craft your dream smile.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-wide hover:gap-3.5 transition-all">
            <span>Explore Smile Dentistry</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Appointment CTA / Inquiry Section */}
      <section className="bg-white rounded-3xl p-6 md:p-10 border border-[#e2e8f0] [box-shadow:0_4px_24px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="font-headline text-2xl font-bold text-[#111c2c]">Ready to revitalize your smile?</h2>
          <p className="text-sm text-[#424753] leading-relaxed max-w-xl">
            Schedule an in-clinic consultation or 3D dental scan in under 2 minutes. Our clinical coordinators call you back instantly to confirm slots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={openBooking}
              className="bg-[#004597] text-white shadow-md hover:bg-[#00387a] font-bold h-11 px-8 rounded-xl duration-200 active:scale-95"
            >
              Book a Visit
            </button>
            <button
              onClick={openBooking}
              className="border border-[#c2c6d5] text-[#111c2c] hover:bg-[#f0f3ff] bg-white h-11 px-8 rounded-xl font-medium duration-200"
            >
              Inquiry Form
            </button>
          </div>
        </div>

        <div className="w-full md:w-[32%] flex flex-col gap-3.5 shrink-0">
          <div className="bg-[#f0f3ff] p-4 rounded-2xl flex items-center gap-4">
            <div className="p-2.5 bg-white text-[#004597] rounded-xl shadow-xs">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#424753] leading-tight select-none font-medium">Quick Assistance</p>
              <a href="tel:01712599003" className="font-extrabold text-sm text-[#004597] hover:underline">
                01712599003
              </a>
            </div>
          </div>
          <div className="bg-[#f0f3ff] p-4 rounded-2xl flex items-center gap-4">
            <div className="p-2.5 bg-white text-[#004597] rounded-xl shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#424753] leading-tight select-none font-medium">Main Office Location</p>
              <p className="font-extrabold text-sm text-[#111c2c]">
                Biharipara, Dhaka 1216
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Overlay Component */}
      {selectedServiceId && serviceExpandedData[selectedServiceId] && (
        <div className="fixed inset-0 bg-[#111c2c]/65 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-[#dee8ff] animate-scale-up">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#e2e8f0] flex justify-between items-center bg-[#f0f3ff]">
              <div className="flex items-center gap-2 text-[#004597]">
                <HeartPulse className="w-6 h-6 animate-pulse" />
                <h3 className="font-headline text-lg font-bold">{serviceExpandedData[selectedServiceId].title}</h3>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 hover:bg-slate-200 text-slate-500 rounded-full transition-colors"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Services Description</h4>
                <p className="text-slate-700 leading-relaxed text-sm">{serviceExpandedData[selectedServiceId].fullDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-2xl space-y-1 border border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#006e75]">Clinical Specialists</h4>
                  <ul className="space-y-1">
                    {serviceExpandedData[selectedServiceId].doctors.map((doc, idx) => (
                      <li key={idx} className="text-xs font-semibold text-slate-800">{doc}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl space-y-2 border border-slate-100">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Pricing / Service Fees</h4>
                    <p className="text-xs font-bold text-[#004597]">{serviceExpandedData[selectedServiceId].pricing}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Response / Consultation Period</h4>
                    <p className="text-xs text-slate-700">{serviceExpandedData[selectedServiceId].duration}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Interactive Health Quality Steps</h4>
                <div className="space-y-2">
                  {serviceExpandedData[selectedServiceId].clinicalSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-[#e7eeff] text-[#004597] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-3 bg-slate-50 justify-end">
              <button
                onClick={handleCloseDetail}
                className="px-6 py-2 border border-[#c2c6d5] text-slate-700 bg-white hover:bg-slate-50 rounded-xl text-sm transition-colors font-medium"
              >
                Go Back
              </button>
              <button
                onClick={() => {
                  handleCloseDetail();
                  openBooking();
                }}
                className="px-8 py-2 bg-[#004597] hover:bg-[#00387a] text-white rounded-xl text-sm font-bold shadow-md transition-all duration-200"
              >
                Book with specialists
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
