import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldAlert, Heart } from 'lucide-react';

interface ContactProps {
  openEmergency: () => void;
}

export default function Contact({ openEmergency }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Dental Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Dental Inquiry',
        message: ''
      });
    }, 4500);
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Contact Introduction Header */}
      <section className="text-center md:text-left space-y-4">
        <span className="inline-block bg-[#e7eeff] text-[#004597] px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
          Get In Touch 24/7
        </span>
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-[#111c2c] leading-tight">
          We Are Here For You Whenever You Need Dental Care
        </h1>
        <p className="text-sm md:text-base text-[#424753] leading-relaxed max-w-2xl">
          Whether you seek premium titanium implants down specialized orthopedic treatments, or require immediate relief for dental emergency trauma in Dhaka, get in touch today.
        </p>
      </section>

      {/* Grid of Contact Form and Details */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Details Card: col-5 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#004597] text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-md">
            <div className="space-y-6 relative z-10">
              <h3 className="font-headline text-2xl font-bold">Doctor BD 24 Dental & Implant Center</h3>
              <p className="text-sm text-blue-100/90 leading-relaxed">
                Strategically located near the community heart at Biharipara, Mirpur, allowing convenient clinical dental chair access within Dhaka City limits.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#7df4ff] shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm flex-1">
                    <p className="font-bold text-white">Our Address</p>
                    <p className="text-blue-100">House 5/1/K-13, Biharipara, Ansar Camp Road, Mirpur 1, Dhaka 1216</p>
                    <a 
                      href="https://www.google.com/maps/place/Professor+Dental,+Mirpur./@23.7903084,90.3528151,639m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755c0ea7accc2a5:0x3a15e46e674c4a74!8m2!3d23.7903035!4d90.35539!16s%2Fg%2F11gfn8qj9p?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-xs text-[#7df4ff] font-bold mt-1.5 hover:underline hover:text-white"
                    >
                      View on Google Maps ↗
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-[#7df4ff] shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    <p className="font-bold text-white">24/7 Support Line</p>
                    <a href="tel:01712599003" className="text-[#7df4ff] font-bold hover:underline">
                      01712599003
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-[#7df4ff] shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    <p className="font-bold text-white">General Email</p>
                    <p className="text-blue-100">support@doctorbd24.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-[#7df4ff] shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    <p className="font-bold text-white">Working Hours</p>
                    <p className="text-blue-100">Open 24 Hours a Day, 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Emergency Assistance block */}
          <div className="bg-[#ffdad6] text-[#ba1a1a] p-6 rounded-3xl border border-[#ffb4ab] flex items-center gap-4 hover:shadow-xs transition-shadow">
            <ShieldAlert className="w-10 h-10 shrink-0 text-[#ba1a1a]" />
            <div>
              <h4 className="text-sm font-bold">24-Hour Urgent Dental Care</h4>
              <p className="text-xs text-red-950 mb-2">Need immediate clinic preparation or on-call dentist support for severe pain?</p>
              <button
                onClick={openEmergency}
                className="bg-[#ba1a1a] text-white py-1.5 px-4 rounded-lg font-bold text-xs shadow-sm hover:bg-[#93000a] transition-colors active:scale-95 duration-100"
              >
                Trigger Hotline Support
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form: col-7 */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-[#dee8ff] shadow-sm [box-shadow:0_4px_24px_rgba(0,0,0,0.015)] relative">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#004597]">
              <MessageSquare className="w-5 h-5" />
              <h3 className="font-headline text-lg font-bold text-[#111c2c]">Send Us a Digital Message</h3>
            </div>
            <p className="text-xs text-[#424753] leading-relaxed">
              Fill up the quick registration message box below. Our specialized reception health managers process details offline and contact your device in under 10 minutes.
            </p>

            {submitted ? (
              <div className="bg-[#ccfcff]/45 border border-[#5dd8e2] text-[#006e75] p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 animate-scale-up py-12">
                <CheckCircle2 className="w-16 h-16 text-[#006e75] animate-bounce" />
                <h4 className="font-headline text-md font-bold">Message Dispatched Successfully!</h4>
                <p className="text-xs max-w-sm">
                  Thank you for submitting, {formData.name || 'valued patient'}. Our clinical coordinators will phone you at <span className="font-bold underline">{formData.phone}</span> very shortly to guide you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S.M. Munadil"
                      className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl outline-none focus:border-[#004597] bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 01712xxxxxx"
                      className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl outline-none focus:border-[#004597] bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. support@doctorbd24.com"
                      className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl outline-none focus:border-[#004597] bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Subject of Interest</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl outline-none focus:border-[#004597] bg-slate-50"
                    >
                      <option>General Dental Inquiry</option>
                      <option>Braces & Invisalign Alignment</option>
                      <option>Dental Implants & Surgery</option>
                      <option>Painless Root Canal Inquiry</option>
                      <option>Suggestions or feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Detailed Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your current clinical symptoms, requested scheduling preferences, or question..."
                    className="w-full text-xs p-3 border border-[#c2c6d5] rounded-xl outline-none focus:border-[#004597] bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#004597] hover:bg-[#00387a] text-white w-full h-11 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 duration-100 text-xs tracking-wide"
                >
                  <Send className="w-4 h-4" /> Send Secure Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled Interactive Clinic Location Map (HTML layout-mock) */}
      <section className="bg-white rounded-[2rem] border border-[#dee8ff] p-6 space-y-6">
        <h3 className="font-headline text-lg font-bold text-[#111c2c]">Our Location & Neighborhood Map</h3>
        <p className="text-xs text-[#424753]">
          Located at Ansar Camp Road, Mirpur 1, Dhaka 1216. Open 24/7. Close to key landmarks, accessible via major regional transit corridors.
        </p>

        {/* Visual Map Simulator */}
        <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex flex-col justify-between p-4 group">
          {/* Static styled elements as map background */}
          <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#004597 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}></div>
          
          {/* Mock Map Streets and Labels */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white/40 to-slate-200/90 pointer-events-none flex items-center justify-center">
            {/* Street 1 */}
            <div className="absolute h-[6px] w-[200%] bg-white border-y border-slate-350 -rotate-12 left-[-50%] top-[40%] text-[8px] text-slate-400 pl-48 font-bold font-mono uppercase tracking-widest leading-none select-none">
              Mirpur Road Link Map
            </div>
            {/* Street 2 */}
            <div className="absolute h-[8px] w-[200%] bg-slate-200 border-y border-slate-350 rotate-45 left-[-50%] top-[30%] text-[8px] text-slate-400 pl-72 font-semibold font-mono uppercase tracking-widest leading-none select-none">
              Ansar Camp Road
            </div>
            {/* Street 3 */}
            <div className="absolute h-[6px] w-[200%] bg-white border-y border-slate-350 -rotate-[60deg] left-[-30%] top-[-20%] text-[8px] text-slate-400 pl-[38rem] font-semibold font-mono uppercase tracking-widest leading-none select-none">
              Biharipara Corridor
            </div>
          </div>

          {/* Interactive locator pin */}
          <div className="absolute left-[45%] top-[35%] flex flex-col items-center animate-pulse">
            <div className="bg-[#004597] text-white p-2.5 rounded-xl text-xs font-bold shadow-lg border border-white flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-[#7df4ff]" /> Doctor BD 24 (Head Clinic Office)
            </div>
            <div className="w-2.5 h-2.5 bg-[#004597] rounded-full border border-white -mt-0.5"></div>
          </div>

          {/* Map Overlay Info Panel */}
          <div className="relative mt-auto bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg max-w-sm space-y-2 z-10 transition-transform group-hover:scale-102">
            <span className="inline-block bg-[#004597] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Ansar Camp Road
            </span>
            <p className="text-xs font-bold text-slate-800">
              House 5/1/K-13, Biharipara, Mirpur 1, Dhaka 1216
            </p>
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium">
              <span>Ambulance Egress: Direct</span>
              <span>•</span>
              <a href="tel:01712599003" className="text-[#004597] font-bold hover:underline">Support 24/7</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
