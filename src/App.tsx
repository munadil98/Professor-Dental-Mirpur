import { useState, useEffect, FormEvent } from 'react';
import { 
  Activity, Phone, ShieldAlert, Calendar, MapPin, Clock, MessageSquare, 
  X, CheckCircle, Flame, Star, Send, Heart, ArrowRight, Sparkles, AlertTriangle 
} from 'lucide-react';
import Home from './components/Home';
import Services from './components/Services';
import Success from './components/Success';
import Contact from './components/Contact';
import type { TabType, Appointment } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Appointment Form States
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (09:00 AM - 12:00 PM)');
  const [department, setDepartment] = useState('Orthodontics & Invisalign');
  const [doctor, setDoctor] = useState('Dr. Munadil Ahmed, BDS, DDS (Orthodontics)');
  const [symptoms, setSymptoms] = useState('');
  const [bookedAppointment, setBookedAppointment] = useState<Appointment | null>(null);

  // Chat message state
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; action?: string }>>([
    { 
      sender: 'bot', 
      text: "Hello! I am Asha, your 24/7 Dental Assistant at Doctor BD 24 Dental & Implant Center. How can we support your smile today? Feel free to ask about our dental implants, braces, root canals, fees, or location in Mirpur!" 
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatTyping, setIsChatTyping] = useState(false);

  // Sync doctors with department selection
  useEffect(() => {
    if (department === 'Orthodontics & Invisalign') {
      setDoctor('Dr. Munadil Ahmed, BDS, DDS (Orthodontics)');
    } else if (department === 'Dental Implants & Surgery') {
      setDoctor('Dr. S.M. Rahman, BDS, MS (Oral & Maxillofacial Implantology)');
    } else if (department === 'General & Cosmetic Dentistry') {
      setDoctor('Dr. Sabrina Chowdhury, BDS, MPH');
    } else if (department === 'Root Canal Therapy (Endodontics)') {
      setDoctor('Dr. Tasnim Ara, BDS, FCPS (Restorative Dentistry)');
    } else {
      setDoctor('Dr. Farhana Yasmin, BDS, MS (Pedodontics)');
    }
  }, [department]);

  // Helper to get WhatsApp message link for appointment details
  const getWhatsAppLink = (app: Appointment) => {
    const formattedText = `*Doctor BD 24 Dental Care - Patient Appointment Info*%0A%0A` +
      `• *Name:* ${app.fullName}%0A` +
      `• *Phone:* ${app.phoneNumber}%0A` +
      `• *Email:* ${app.email || 'N/A'}%0A` +
      `• *Date:* ${app.date}%0A` +
      `• *Time Slot:* ${app.timeSlot}%0A` +
      `• *Dental Service:* ${app.department}%0A` +
      `• *Doctor Specialist:* ${app.doctor}%0A` +
      `• *Chief Complaint:* ${app.symptoms || 'None detailed'}`;
    return `https://wa.me/8801712599003?text=${formattedText}`;
  };

  // Handle appointment submission
  const handleBookAppointment = (e: FormEvent) => {
    e.preventDefault();
    const newAppointment: Appointment = {
      fullName: patientName,
      phoneNumber: patientPhone,
      email: patientEmail,
      date: appointmentDate,
      timeSlot,
      department,
      doctor,
      symptoms
    };
    setBookedAppointment(newAppointment);
    setIsBookingOpen(false);

    // Reset Form Fields
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setAppointmentDate('');
    setSymptoms('');

    // Open WhatsApp URL in a new tab
    const waUrl = getWhatsAppLink(newAppointment);
    window.open(waUrl, '_blank');
  };

  // Bot response logic
  const handleSendChat = (textToSend?: string) => {
    const rawText = textToSend || chatInput;
    if (!rawText.trim()) return;

    // Add user message
    const userMsg = { sender: 'user' as const, text: rawText };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setChatInput('');

    setIsChatTyping(true);

    // AI automated clinical simulation
    setTimeout(() => {
      let botReply = '';
      let botAction = '';
      const text = rawText.toLowerCase();

      if (text.includes('emergency') || text.includes('toothache') || text.includes('pain') || text.includes('bleeding') || text.includes('swelling') || text.includes('accident') || text.includes('broken')) {
        botReply = "🚨 DENTAL EMERGENCY DETECTED: If you are experiencing acute dental trauma, severe bleeding, or uncontrolled facial swelling, please call our 24/7 emergency unit directly at 01712599003! Our on-call dentist is available for immediate setup.";
        botAction = "phone";
      } else if (text.includes('book') || text.includes('appointment') || text.includes('schedule') || text.includes('doctor') || text.includes('visit')) {
        botReply = "Certainly! I can launch our dentist scheduling portal immediately so you can secure a slot for scaling, implants, braces, or consultation with our specialists.";
        botAction = "book";
      } else if (text.includes('location') || text.includes('where') || text.includes('address') || text.includes('place')) {
        botReply = "We are located at: House 5/1/K-13, Biharipara, Ansar Camp Road, Mirpur 1, Dhaka 1216. Our modern spacious clinic operates under Professor Dental, Mirpur.";
        botAction = "location";
      } else if (text.includes('cost') || text.includes('price') || text.includes('fees') || text.includes('rate') || text.includes('bdt')) {
        botReply = "Our charges are extremely competitive and transparent: Dental consultation and diagnostic digital screening fee is only 600 BDT. Basic Scaling starts at 1,200 BDT. Tooth Extractions start at 1,000 BDT, and painless Root Canals start at 2,500 BDT.";
      } else if (text.includes('care') || text.includes('service') || text.includes('teeth') || text.includes('implants') || text.includes('braces')) {
        botReply = "Doctor BD 24 Dental Center specializes in premium Orthodontic aligners, high-grade Titanium Implants, root canal therapy, teeth whitening, deep scaling, and pediatric dental care.";
      } else {
        botReply = "Thank you for reaching out. As your dental coordinator, I highly recommend scheduling a consultation at our Mirpur clinic so that our specialists can examine your teeth. Would you like to book an appointment slot right now?";
        botAction = "book_suggest";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply, action: botAction }]);
      setIsChatTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] text-[#111c2c] font-sans flex flex-col selection:bg-[#ccdaff] selection:text-[#001a41]">
      
      {/* 24/7 Clinical Emergency Top Notification Banner */}
      <div className="bg-[#ba1a1a] text-white text-xs py-2 px-4 shadow-sm flex justify-between items-center z-40 select-none">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full font-semibold">
          <span className="flex h-2 w-2 rounded-full bg-[#ffdad6] animate-ping shrink-0"></span>
          <span>🚨 Emergency Dental Care Unit Active in Mirpur. Open 24/7. Call: </span>
          <a href="tel:01712599003" className="underline font-bold hover:text-red-200 transition-colors">01712599003</a>
        </div>
      </div>

      {/* Main Header / Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-[#dee8ff] z-30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2.5 bg-[#004597] text-white rounded-xl shadow-md group-hover:scale-105 duration-300">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-headline text-lg font-extrabold tracking-tight text-[#111c2c] block leading-none">
                Doctor BD 24
              </span>
              <span className="text-[10px] text-[#006e75] tracking-widest font-bold uppercase block mt-0.5 select-none">
                Dental & Implant Center
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#424753]">
            <button
              onClick={() => setActiveTab('home')}
              className={`py-2 transition-all relative ${activeTab === 'home' ? 'text-[#004597]' : 'hover:text-[#004597]'}`}
            >
              Home
              {activeTab === 'home' && <span className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#004597] rounded-full" />}
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`py-2 transition-all relative ${activeTab === 'services' ? 'text-[#004597]' : 'hover:text-[#004597]'}`}
            >
              Our Services
              {activeTab === 'services' && <span className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#004597] rounded-full" />}
            </button>
            <button
              onClick={() => setActiveTab('success')}
              className={`py-2 transition-all relative ${activeTab === 'success' ? 'text-[#004597]' : 'hover:text-[#004597]'}`}
            >
              Success Stories
              {activeTab === 'success' && <span className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#004597] rounded-full" />}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-2 transition-all relative ${activeTab === 'contact' ? 'text-[#004597]' : 'hover:text-[#004597]'}`}
            >
              Contact Us
              {activeTab === 'contact' && <span className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#004597] rounded-full" />}
            </button>
          </nav>

          {/* Desktop Call CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#004597] text-white hover:bg-[#00387a] px-6 h-11 rounded-xl text-xs font-bold shadow-sm active:scale-95 duration-200 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </button>
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="bg-[#ffdad6] hover:bg-[#ffb4ab] text-[#ba1a1a] px-6 h-11 rounded-xl text-xs font-bold border border-[#ffdbd6] active:scale-95 duration-200"
            >
              Emergency Unit
            </button>
          </div>

          {/* Mobile Booking Header Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#004597] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xs"
            >
              Book Now
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Container Slot */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-12 py-8 pb-32 md:pb-16">
        
        {/* Dynamic Appointment Success Notice Badge */}
        {bookedAppointment && (
          <div className="mb-8 bg-[#ccfcff]/60 border-2 border-[#a3f3f9] p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-scale-up">
            <div className="flex items-start gap-3 w-full">
              <div className="p-2 bg-[#006e75] text-white rounded-xl shrink-0 mt-0.5">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-md font-bold text-[#111c2c]">Outpatient Appointment Slip Confirmed</h3>
                <p className="text-xs text-slate-700">
                  Patient <span className="font-bold">{bookedAppointment.fullName}</span>, your coordinate has logged for <span className="font-bold underline">{bookedAppointment.date}</span> (Slot: {bookedAppointment.timeSlot}).
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 text-[11px] pt-1 leading-none font-medium">
                  <span>• Department: {bookedAppointment.department}</span>
                  <span>• Assigned Specialist: {bookedAppointment.doctor}</span>
                  {bookedAppointment.phoneNumber && <span>• Mobile: {bookedAppointment.phoneNumber}</span>}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0 justify-end w-full md:w-auto">
              <a 
                href={getWhatsAppLink(bookedAppointment)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c35e] text-white py-1.5 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors text-center shrink-0"
              >
                Send via WhatsApp 💬
              </a>
              <button 
                onClick={() => setBookedAppointment(null)}
                className="border border-[#7af1fc] bg-white text-slate-700 hover:bg-slate-50 py-1.5 px-4 rounded-xl text-xs font-semibold shrink-0"
              >
                Clear Slip
              </button>
            </div>
          </div>
        )}

        {/* Tab Router Render mapping */}
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab} 
            openBooking={() => setIsBookingOpen(true)} 
            openEmergency={() => setIsEmergencyOpen(true)} 
          />
        )}
        
        {activeTab === 'services' && (
          <Services 
            openBooking={() => setIsBookingOpen(true)} 
            openEmergency={() => setIsEmergencyOpen(true)} 
          />
        )}

        {activeTab === 'success' && (
          <Success 
            openEmergency={() => setIsEmergencyOpen(true)} 
            openBooking={() => setIsBookingOpen(true)} 
          />
        )}

        {activeTab === 'contact' && (
          <Contact openEmergency={() => setIsEmergencyOpen(true)} />
        )}

      </main>

      {/* Styled Footer Block */}
      <footer className="bg-[#111c2c] text-white border-t border-slate-800 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg text-white">
                <Activity className="w-5 h-5 text-[#7df4ff]" />
              </div>
              <span className="font-headline text-md font-extrabold text-white">Doctor BD 24</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Your Trusted Health Partner 24/7 providing compassionate care and advanced medical solutions in Dhaka, Bangladesh.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-slate-300">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <button onClick={() => setActiveTab('home')} className="hover:text-white hover:underline text-left">Home Overview</button>
              <button onClick={() => setActiveTab('services')} className="hover:text-white hover:underline text-left">Advanced Services</button>
              <button onClick={() => setActiveTab('success')} className="hover:text-white hover:underline text-left">Recovery Stories</button>
              <button onClick={() => setActiveTab('contact')} className="hover:text-white hover:underline text-left">Contact & Location</button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-slate-300">Our Departments</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <span>Cardiology Emergency</span>
              <span>General Pathology Lab</span>
              <span>In-Home Clinical Nursing Care</span>
              <span>Laparoscopic & Keyhole Surgery</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-slate-300">Mirpur Hub Location</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              House 5/1/K-13, Biharipara, Ansar Camp Road, Dhaka 1216, Bangladesh.
            </p>
            <div className="pt-2 text-xs font-bold text-[#7df4ff]">
              Hotline: <a href="tel:01712599003" className="underline">01712599003</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center text-xs text-slate-500 pt-10 mt-10 border-t border-slate-800">
          <p>© {new Date().getFullYear()} Doctor BD 24 healthcare. All legal rights managed securely. Verified Community Medicine Node.</p>
        </div>
      </footer>

      {/* Floating Action Button for Chat - Asha chatbot */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-24 right-5 md:bottom-8 md:right-8 w-14 h-14 bg-[#004597] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-95 hover:scale-105 transition-transform z-40 group border-2 border-white"
        aria-label="Open Asha health chat assistant"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-0 top-0 block h-3 w-3 rounded-full bg-[#7df4ff] ring-2 ring-white animate-pulse"></span>
      </button>

      {/* Floating Interactive Chat Assistant Window (Asha) */}
      {isChatOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-8 w-full sm:max-w-md h-full sm:h-[500px] bg-white sm:rounded-2xl shadow-2xl z-50 flex flex-col border border-[#dee8ff] overflow-hidden animate-scale-up">
          
          {/* Chat Window Header */}
          <div className="p-4 bg-[#004597] text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-[#7df4ff] animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div>
                <h4 className="font-headline text-sm font-bold">Asha — AI Health Coordinator</h4>
                <div className="flex items-center gap-1.5 text-[9px] text-[#ccdaff] font-bold tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE & ACTIVE</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat body: list scrollable messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[85%] ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}
              >
                <div className={`p-3 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-[#004597] text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'}`}>
                  {msg.text}

                  {/* Actions inside chat */}
                  {msg.action === 'phone' && (
                    <div className="mt-3">
                      <a 
                        href="tel:01712599003" 
                        className="inline-flex items-center gap-1.5 bg-[#ba1a1a] text-white py-1.5 px-3 rounded-lg font-bold text-[11px] uppercase tracking-wide hover:bg-[#93000a] shadow-xs"
                      >
                        <Phone className="w-3 h-3 text-white" /> Dial Hotline Now
                      </a>
                    </div>
                  )}

                  {msg.action === 'book' && (
                    <div className="mt-3">
                      <button 
                        onClick={() => {
                          setIsChatOpen(false);
                          setIsBookingOpen(true);
                        }}
                        className="inline-flex items-center gap-1 bg-[#006e75] text-white py-1.5 px-3 rounded-lg font-bold text-[11px] uppercase tracking-wide shadow-xs hover:bg-[#004f54]"
                      >
                        <Calendar className="w-3 h-3" /> Launch Booker Slot
                      </button>
                    </div>
                  )}

                  {msg.action === 'location' && (
                    <div className="mt-3">
                      <a 
                        href="https://www.google.com/maps/place/Professor+Dental,+Mirpur./@23.7903084,90.3528151,639m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755c0ea7accc2a5:0x3a15e46e674c4a74!8m2!3d23.7903035!4d90.35539!16s%2Fg%2F11gfn8qj9p?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#004597] text-white py-1.5 px-3 rounded-lg font-bold text-[11px] uppercase tracking-wide shadow-xs hover:bg-[#00387a]"
                      >
                        <MapPin className="w-3 h-3 text-white" /> View Google Map ↗
                      </a>
                    </div>
                  )}

                  {msg.action === 'book_suggest' && (
                    <div className="mt-3 flex gap-2">
                      <button 
                        onClick={() => {
                          setIsChatOpen(false);
                          setIsBookingOpen(true);
                        }}
                        className="bg-[#004597] text-white py-1.5 px-3 rounded-lg font-bold text-[10px] uppercase shadow-xs outline-none"
                      >
                        Yes, Book Now
                      </button>
                      <button 
                        onClick={() => {
                          setMessages(prev => [...prev, { sender: 'bot', text: 'No problem! Feel free to ask me anything else about locations, test charges, or general services and doctors.' }]);
                        }}
                        className="bg-slate-100 text-slate-700 py-1.5 px-3 rounded-lg font-semibold text-[10px]"
                      >
                        Ask location/fees
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 pl-1">
                  {msg.sender === 'user' ? 'You' : 'Asha'}
                </span>
              </div>
            ))}

            {isChatTyping && (
              <div className="flex items-center gap-1.5 bg-white p-3 rounded-xl border border-slate-200 w-24 shrink-0 shadow-xs">
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-300"></span>
              </div>
            )}
          </div>

          {/* Quick chip responses helper buttons */}
          <div className="p-2 border-t border-slate-100 flex gap-1.5 overflow-x-auto shrink-0 bg-slate-50 select-none">
            <button 
              onClick={() => handleSendChat("🚨 Urgent dental pain crisis")}
              className="shrink-0 text-[10px] bg-red-50 hover:bg-red-100 border border-red-200 text-[#ba1a1a] px-3 py-1 rounded-full font-bold transition-colors"
            >
              🚨 Dental Emergency
            </button>
            <button 
              onClick={() => handleSendChat("📅 Schedule a dental appointment")}
              className="shrink-0 text-[10px] bg-blue-50 border border-blue-200 text-[#004597] px-3 py-1 rounded-full font-bold transition-colors"
            >
              📅 Book Appointment
            </button>
            <button 
              onClick={() => handleSendChat("💵 Dental implants and treatment costs")}
              className="shrink-0 text-[10px] bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold transition-colors"
            >
              💵 Treatment pricing
            </button>
            <button 
              onClick={() => handleSendChat("📍 Where is the clinic located?")}
              className="shrink-0 text-[10px] bg-teal-50 border border-teal-200 text-[#006e75] px-3 py-1 rounded-full font-bold transition-colors"
            >
              📍 Location coordinates
            </button>
          </div>

          {/* Chat input box */}
          <div className="p-3 border-t border-slate-200 shrink-0 flex gap-2 bg-white">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
              placeholder="Ask Asha health questions..."
              className="flex-grow text-xs h-9 px-3 border border-slate-200 rounded-xl outline-none focus:border-[#004597]"
            />
            <button
              onClick={() => handleSendChat()}
              className="bg-[#004597] text-white p-2 rounded-xl hover:bg-[#00387a] duration-150 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Appointment Booking Modal Overlay */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-[#111c2c]/65 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-[#dee8ff]">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[#e2e8f0] flex justify-between items-center bg-[#f0f3ff]">
              <div className="flex items-center gap-2 text-[#004597]">
                <Calendar className="w-5 h-5" />
                <h3 className="font-headline text-md font-bold">Secure Outpatient Slot</h3>
              </div>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="p-1.5 hover:bg-slate-200 rounded-full text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form body */}
            <form onSubmit={handleBookAppointment} className="p-6 overflow-y-auto space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Patient Full Name</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Rahim Ahmed"
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Active Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="e.g. 01712xxxxxx"
                    className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Email (Optional)</label>
                  <input
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Time Slot Segment</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                  >
                    <option>Morning (09:00 AM - 12:00 PM)</option>
                    <option>Afternoon (01:00 PM - 04:00 PM)</option>
                    <option>Evening (05:00 PM - 09:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Dental Subspecialty</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597]"
                >
                  <option>Orthodontics & Invisalign</option>
                  <option>Dental Implants & Surgery</option>
                  <option>General & Cosmetic Dentistry</option>
                  <option>Root Canal Therapy (Endodontics)</option>
                  <option>Pediatric Dentistry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#424753] uppercase tracking-wider">Core Oral Symptoms Description</label>
                <textarea
                  rows={3}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Briefly state your dental concerns (e.g. tooth sensitivity, pain, braces counseling)..."
                  className="w-full text-xs p-3 border border-[#c2c6d5] rounded-xl bg-slate-50 outline-none focus:border-[#004597] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-[#004597] hover:bg-[#00387a] text-white py-3 px-6 rounded-xl text-xs font-bold flex-1 shadow-md active:scale-95 duration-100"
                >
                  Confirm Secure Slot Book
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="border border-[#c2c6d5] text-slate-700 bg-white py-3 px-5 rounded-xl text-xs font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Emergency Immediate Action Triage Modal Overlay */}
      {isEmergencyOpen && (
        <div className="fixed inset-0 bg-[#93000a]/65 z-[60] flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#ffdad6] animate-scale-up">
            
            <div className="p-6 bg-[#ba1a1a] text-white text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <ShieldAlert className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-lg font-extrabold">24/7 Urgent Dental Care Unit</h3>
                <p className="text-xs text-red-100">On-Call Oral Surgeon & Trauma Coordinator</p>
              </div>
            </div>

            <div className="p-6 text-center space-y-4">
              <p className="text-xs text-slate-700 leading-relaxed">
                If you are experiencing severe dental trauma, hemorrhage/bleeding, acute jaw fractures, lockjaw, or swelling blocking your airway, call us immediately:
              </p>
              <div className="bg-[#ffdad6] p-4 rounded-xl border border-[#ffb4ab]">
                <span className="text-[10px] text-red-950 font-bold block uppercase tracking-wider">Emergency Dental Helpline</span>
                <a 
                  href="tel:01712599003" 
                  className="text-2xl font-extrabold text-[#ba1a1a] hover:underline block pt-1 hover:scale-102 transition-transform"
                >
                  01712599003
                </a>
              </div>
              <p className="text-[10px] text-slate-500 italic">
                Our resident maxillofacial unit maps locations over calls and targets arrival or preparative setup in 15 minutes anywhere in Mirpur/Dhaka vicinity.
              </p>

              <div className="pt-2 flex gap-3">
                <a 
                  href="tel:01712599003"
                  className="bg-[#ba1a1a] text-white py-3 px-6 rounded-xl font-bold text-xs flex-1 shadow-md hover:bg-[#93000a] text-center"
                >
                  Dial Now
                </a>
                <button
                  onClick={() => setIsEmergencyOpen(false)}
                  className="border border-[#c2c6d5] text-slate-700 bg-white py-3 h-11 px-5 rounded-xl text-xs font-semibold"
                >
                  Dismiss Call
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Mobile Bot Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#dee8ff] py-2 px-3 flex justify-around items-center z-30 [box-shadow:0_-4px_20px_rgba(0,0,0,0.02)]">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${activeTab === 'home' ? 'text-[#004597]' : 'text-[#424753]'}`}
        >
          <Heart className="w-5 h-5 shrink-0" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${activeTab === 'services' ? 'text-[#004597]' : 'text-[#424753]'}`}
        >
          <Activity className="w-5 h-5 shrink-0" />
          <span>Services</span>
        </button>
        <button
          onClick={() => setActiveTab('success')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${activeTab === 'success' ? 'text-[#004597]' : 'text-[#424753]'}`}
        >
          <Star className="w-5 h-5 shrink-0" />
          <span>Success</span>
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-bold ${activeTab === 'contact' ? 'text-[#004597]' : 'text-[#424753]'}`}
        >
          <MapPin className="w-5 h-5 shrink-0" />
          <span>Contact</span>
        </button>
      </div>

    </div>
  );
}
