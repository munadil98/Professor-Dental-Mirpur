import { useState, FormEvent } from 'react';
import { Star, Flame, BadgeCheck, Timer, ShieldAlert, Heart, Activity, Quote, Sparkles, MessageCirclePlus, Plus, ChevronRight } from 'lucide-react';
import type { ReviewStory } from '../types';

interface SuccessProps {
  openEmergency: () => void;
  openBooking: () => void;
}

export default function Success({ openEmergency, openBooking }: SuccessProps) {
  const [stories, setStories] = useState<ReviewStory[]>([
    {
      id: '1',
      name: 'Rahim Ahmed',
      condition: 'Invisalign Clear Aligners',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiGboYGNnDATJaUd9mWHTSE-p0gPwMThyuwkxue3U8m-P8Ah8EbpgxAge3uFB2xXbIyQmHW3kJ4wYlA7K_8jWS4-yJWDyYP6MrYTkWR-PirAJmzLsopLpNxQ-eskLITq7r6lGr15e6_8bfSzubH-htUzpGxjgZc_5lPVgjOVXLvMWj6mlv0BDZBT3tCzS-I7ZY4WRNI20pBsPp1DiWdcZGVM40Z0QgQuxLtVaRlN0lPFBPJV7skrDXUahcKlsq7Df9hFSIym4B9Dag',
      rating: 5,
      story: `"My crooked front teeth used to make me feel so self-conscious at work. The team at Doctor BD 24 designed custom Invisalign clear aligners for me. Within 8 months, my teeth are perfectly straight. No metal braces, complete comfort!"`,
      recoveryTime: 'Aligners completed in 8 months',
      statusLabel: 'Perfect Smile Alignment',
      iconName: 'timer'
    },
    {
      id: '2',
      name: 'Fatema Begum',
      condition: 'Titanium Dental Implants',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSLIDEY9KHBAlXvO_dzQ8BGBup6bx3O6QdXW9t74kuI6ui-6mkEd2DgZCLIy-Q6YrwLpqy6T1WBsm9J6TVRwem2U2N9TX5dVdhpfa5hpgVaFq0SxdqlIPMR2JD9dlnduOyl1bPG7jkgjca5KTZ-R1MWFPKO22qcQ5LjWMx0v8JHNDdMwAyzSFTm8SfkO4A9JVHpzrwuntSgbcgGSxBIhPvj0pRSMWY8kdm2drwcz_jSkS20L8mymvWoUBCVNI6za4gA11XRQcXs8QC',
      rating: 5,
      story: `"Losing my lower molars made chewing food nearly impossible. Dr. S.M. Rahman carefully did dual titanium implants topped with custom zirconia crowns. The procedure was completely painless under safe anesthesia, and I can chew flawlessly now."`,
      recoveryTime: 'Korean Implants & Zirconia Crown',
      statusLabel: 'Painless Bite Reconstruction',
      iconName: 'home'
    },
    {
      id: '3',
      name: 'Tanvir Hasan',
      condition: 'Complex Root Canal Salvage',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu9RqFgewgHIrUEPghKM0S6mKGlQiIxYL_R_jS5Wkw0qaZMEGdXomLPAqHTV1QXuaDbxWZClxeu89umfz6qb9JJtd5Gfd59XeX2REzj1EnZEVwX36Vd_OvoK0_tv3PF9LcettMC_IuA8r1-jD5wUFmfYv5Na3p6AqDBGSHAVcYhvDyviF8LL9gmqdUCtsnbtSRz4ESb-CY8aq0ppQTyYmbMurRacS-xvKlUw4vkrQ_kaQ0QvswhfioUBbTbFL7Cg7ZonJxwzCP0FRA',
      rating: 5,
      story: `"I had severe throbbing tooth pain that kept me awake all night. Asha, the dental chatbot, guided me to schedule an immediate root canal appointment. Dr. Tasnim saved my natural root within a single rotary session. Wonderful experience!"`,
      recoveryTime: 'Single-visit rotary therapy completed',
      statusLabel: 'Complete Tooth Saved',
      iconName: 'devices'
    }
  ]);

  // Form states for adding custom stories
  const [showAddForm, setShowAddForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formCondition, setFormCondition] = useState('');
  const [formStory, setFormStory] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formRecovery, setFormRecovery] = useState('');

  const handleAddStory = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formCondition || !formStory) return;

    const newStory: ReviewStory = {
      id: String(stories.length + 1),
      name: formName,
      condition: formCondition,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0-d5gDD6W7XBaeEEtThxP57nZ9G-3Rxl2QLbzwXo6v1JLFSUTqF-qGd7EEwAT9fiYXshC74NygOnY89stAFadpzvEzxvQoPcO-HrRCW1lZSgiFMNcR1l6frWvUJlCU7vjVN3FWE3OG3xEI1Pv4uVAvb5bgmmAYEEcG8GrRemwsLilTNFvxr5XBX-6DXBhtyUJ21TyA15GBkqLtog1IWCxDO75r9-vT3OxMnbGMtNZonOewkRVW7kWFFmNEXUxh2pjT3GxoffI7MWd',
      rating: formRating,
      story: `"${formStory}"`,
      recoveryTime: formRecovery || 'Patient-authored story',
      statusLabel: 'Verified Smile Transformation',
      iconName: 'verified',
      isCustom: true
    };

    setStories([newStory, ...stories]);
    setFormName('');
    setFormCondition('');
    setFormStory('');
    setFormRecovery('');
    setShowAddForm(false);
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Success Stories Hero Overlay */}
      <section className="relative rounded-3xl overflow-hidden bg-[#004597] p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">
              Perfecting Smiles, <br className="hidden md:block"/>Enhancing Confidence
            </h1>
            <p className="text-sm md:text-lg text-[#ccdaff] leading-relaxed max-w-xl">
              Real stories of oral recovery and glowing smile transformations from patient community nodes across Dhaka. Our specialized team prioritizes dental excellence to protect your smile.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/15 rounded-full flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#7df4ff]" />
                <span className="text-xs font-bold font-sans">15,000+ Happy Patients</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/15 rounded-full flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#7df4ff]" />
                <span className="text-xs font-bold font-sans">24/7 Open Emergency</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-[35%]">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-[#Dee8ff]/30">
              <img
                className="w-full h-full object-cover"
                alt="Consolidated medical team at Doctor BD 24"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-9dPmRi9dorefBRbzm_cq5Ris2DHrSTS9cpKz7NehxoL4NaKFATS5pGgCDuP16XzdHbK2FetBp9eO7s0ObSd90-0diGIp7ZVHf4ye5zg2rfxdd_lpIOvoXX6Tk2JoR8UYi-1_mZ1FXnnhaNHgAhsLPwGKAj6J5w3DgN8a5YbruvgwwIZddhEVVX2JOdyeNqP2Ur6eY05DsErBfnOSR8f4d0YGnMxNie0yOzMKZuE6iaijlf9z-vW2nCCsgNa-6u2vXmNeXc8Okh0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Stories Grid */}
      <section className="space-y-8" id="patient-logs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-headline text-2xl font-bold text-[#111c2c]">Verified Patient Recoveries</h2>
            <p className="text-xs text-[#424753]">Real health journeys experienced by community members in Mirpur, Dhaka.</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-[#004597] text-white py-2 px-5 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-[#00387a] transition-colors self-start sm:self-center"
          >
            <MessageCirclePlus className="w-4 h-4" /> Share Your Story
          </button>
        </div>

        {/* Story Form */}
        {showAddForm && (
          <form onSubmit={handleAddStory} className="bg-white border border-[#dee8ff] p-6 rounded-2xl shadow-sm space-y-4 max-w-xl animate-scale-up">
            <h3 className="font-headline text-sm font-bold text-[#111c2c]">Submit Recovery Experience Form</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#424753]">Full Name</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. S.M. Habib"
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-lg bg-slate-50 outline-none focus:border-[#004597]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#424753]">Medical Condition / Treatment</label>
                <input
                  type="text"
                  required
                  value={formCondition}
                  onChange={(e) => setFormCondition(e.target.value)}
                  placeholder="e.g. Asthma Management"
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-lg bg-slate-50 outline-none focus:border-[#004597]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#424753]">Recovery Timeframe / Notes</label>
                <input
                  type="text"
                  value={formRecovery}
                  onChange={(e) => setFormRecovery(e.target.value)}
                  placeholder="e.g. Healed in 10 days"
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-lg bg-slate-50 outline-none focus:border-[#004597]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#424753]">Satisfactory Rating</label>
                <select
                  value={formRating}
                  onChange={(e) => setFormRating(Number(e.target.value))}
                  className="w-full text-xs h-10 px-3 border border-[#c2c6d5] rounded-lg bg-slate-50 outline-none focus:border-[#004597]"
                >
                  <option value={5}>5 Stars - Outstanding</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Decent</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#424753]">Your Personal Healing Experience Story</label>
              <textarea
                required
                rows={3}
                value={formStory}
                onChange={(e) => setFormStory(e.target.value)}
                placeholder="Briefly state how clinical attention from Doctor BD 24 helped you recovery"
                className="w-full text-xs p-3 border border-[#c2c6d5] rounded-lg bg-slate-50 outline-none focus:border-[#004597] resize-none"
              ></textarea>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-[#004597] text-white py-2 px-5 rounded-lg text-xs font-bold"
              >
                Submit Story
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="border border-[#c2c6d5] text-[#424753] py-2 px-5 rounded-lg text-xs font-medium bg-white"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-[#ffffff] p-6 rounded-2xl border border-[#dee8ff] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ccdaff] bg-slate-100 shrink-0 shadow-inner">
                    <img
                      className="w-full h-full object-cover"
                      alt={story.name}
                      src={story.avatar}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline text-md font-bold text-[#111c2c] truncate">{story.name}</h3>
                    <p className="text-xs text-[#006e75] font-semibold truncate">{story.condition}</p>
                  </div>
                </div>

                <div className="flex text-yellow-500 gap-0.5">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-[#424753] leading-relaxed italic text-slate-600 relative pl-4 border-l-2 border-[#dee8ff]">
                  {story.story}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#004597]">
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#006e75]" />
                  <span>{story.recoveryTime}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider bg-[#dee8ff] py-1 px-2.5 rounded-full text-[#001a41]">
                  {story.statusLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Impact section block */}
      <section className="bg-[#dee8ff]/30 p-6 md:p-10 rounded-3xl border border-[#dee8ff]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#dee8ff] text-center space-y-1 hover:shadow-xs transition-shadow">
              <span className="font-headline text-3xl font-extrabold text-[#004597] block">98%</span>
              <span className="text-[10px] font-bold text-[#424753] uppercase tracking-wider">Patient Satisfaction</span>
            </div>
            <div className="bg-[#7af1fc]/30 p-5 rounded-2xl border border-[#5dd8e2]/40 text-center space-y-1 hover:shadow-xs transition-shadow">
              <span className="font-headline text-3xl font-extrabold text-[#006e75] block">15 min</span>
              <span className="text-[10px] font-bold text-[#006e75] uppercase tracking-wider">Avg Response Time</span>
            </div>
            <div className="bg-[#0d5cc1] p-5 rounded-2xl text-center space-y-1 shadow-sm">
              <span className="font-headline text-3xl font-extrabold text-white block">500+</span>
              <span className="text-[10px] font-bold text-[#ccdaff] uppercase tracking-wider">Specialist Doctors</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#dee8ff] text-center space-y-1 hover:shadow-xs transition-shadow">
              <span className="font-headline text-3xl font-extrabold text-[#004597] block">24/7</span>
              <span className="text-[10px] font-bold text-[#424753] uppercase tracking-wider">Availability Support</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#111c2c]">Why Dhaka Trusts Doctor BD 24</h2>
            <p className="text-sm md:text-base text-[#424753] leading-relaxed">
              In a city that never pauses, extreme clinical contingencies dont coordinate with standard working hours. We establish full continuous logs, modern diagnostic telemetry, BMDC registered specialists, and quick clinical assistance across Dhaka.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-2.5 bg-white text-[#004597] rounded-xl border border-[#dee8ff] h-fit shadow-xs">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111c2c]">Certified Professional Medical Staff</h4>
                  <p className="text-xs text-[#424753]">Every cardiologist, resident surgeon, and post-op nurse is fully registered, possessing years of clinical background.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2.5 bg-white text-[#004597] rounded-xl border border-[#dee8ff] h-fit shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111c2c]">Advanced Cardiac & Pathology Logistics</h4>
                  <p className="text-xs text-[#424753]">GPS-tracked cardiac support ambulances and rapid home diagnostic tests guarantee the fastest medical intervention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Recovery is Our Mission CTA */}
      <section className="text-center bg-white border border-[#dee8ff] p-8 rounded-3xl [box-shadow:0_4px_24px_rgba(0,0,0,0.015)] space-y-6">
        <h3 className="font-headline text-2xl font-bold text-[#004597]">Your Recovery is Our Absolute Mission</h3>
        <p className="text-xs md:text-sm text-[#424753] max-w-xl mx-auto leading-relaxed">
          Experience the state of the art treatment that restored hundreds of families. Reach clinical success with us today or coordinate emergency assistance instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            onClick={openEmergency}
            className="bg-[#ba1a1a] text-white hover:bg-[#93000a] h-12 px-8 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 duration-100"
          >
            <ShieldAlert className="w-5 h-5" /> Call Emergency: 01712599003
          </button>
          <button
            onClick={openBooking}
            className="border border-[#004597] text-[#004597] hover:bg-[#f0f3ff] bg-white h-12 px-8 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 duration-100"
          >
            <Quote className="w-4 h-4" /> Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
