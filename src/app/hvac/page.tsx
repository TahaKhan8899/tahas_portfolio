import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const BOOK_CALL_URL = "#contact";
const PHONE = "905-749-0067";
const PHONE_HREF = "tel:9057490067";
const EMAIL = "taha@agentarc.dev";

export const metadata: Metadata = {
  title: "AI Phone & Lead Systems for HVAC Companies | AgentArc",
  description:
    "Stop losing HVAC jobs to voicemail. AgentArc builds AI receptionists, lead follow-up systems, and review engines for HVAC contractors in Canada and the US.",
  keywords: [
    "HVAC AI receptionist",
    "HVAC answering service",
    "HVAC lead automation",
    "AI for HVAC contractors",
    "HVAC missed calls",
    "HVAC CRM follow-up",
    "HVAC Google reviews",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://agentarc.dev/hvac",
    title: "AI Phone & Lead Systems for HVAC Companies | AgentArc",
    description:
      "Stop losing HVAC jobs to voicemail. AI receptionists, lead follow-up, and review engines built for HVAC contractors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Phone & Lead Systems for HVAC Companies | AgentArc",
    description:
      "Stop losing HVAC jobs to voicemail. AI built for HVAC contractors.",
  },
};

// ─── Shared ───────────────────────────────────────────────────────────────────

function Check({ color = "text-blue-700" }: { color?: string }) {
  return (
    <svg className={`w-5 h-5 shrink-0 ${color}`} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BookCallBtn({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={BOOK_CALL_URL}
      className={`inline-block font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg ${
        dark
          ? "bg-white hover:bg-slate-100 text-blue-900"
          : "bg-blue-700 hover:bg-blue-800 text-white"
      } ${className}`}
    >
      Book a Free 15-Min Call
    </a>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function HvacNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-blue-900">
            AgentArc
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-blue-700 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
            <a
              href={BOOK_CALL_URL}
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Book a Free 15-Min Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          Built specifically for HVAC contractors
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Stop Losing{" "}
          <span className="text-red-600">$20K+/Month</span>
          <br className="hidden md:block" /> to Missed Calls.
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          For residential HVAC companies doing $2M–$15M/yr. We answer every
          call 24/7, book jobs into your calendar, and mine your old leads for
          booked work — automatically.
        </p>

        <div className="mb-12">
          <BookCallBtn />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 mb-14">
          <span className="flex items-center gap-1.5">
            <Check color="text-green-600" />
            Built by an ex-Amazon engineer
          </span>
          <span className="flex items-center gap-1.5">
            <Check color="text-green-600" />
            100% Job Success on Upwork
          </span>
          <span className="flex items-center gap-1.5">
            <Check color="text-green-600" />
            Live in 7–14 days
          </span>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-5">
            Engineer previously at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {["Amazon", "SPS Commerce", "McMaster University"].map((co) => (
              <span key={co} className="text-slate-400 font-bold text-sm tracking-wide">
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pain Points ─────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "Your phone rings off the hook all summer and you're losing 30–40% of calls to voicemail.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Leads fill out your form at 9pm and by morning they've already booked your competitor.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    text: "Your CRM has hundreds of old customers and expired maintenance contracts with zero follow-up.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    text: "You know you need more Google reviews but nobody has time to ask after every job.",
  },
];

function PainPoints() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            These problems are costing you real money every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4 shadow-sm">
              <div className="text-red-500 shrink-0 mt-0.5">{point.icon}</div>
              <p className="text-slate-700 font-medium leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mini Math ────────────────────────────────────────────────────────────────

function MiniMath() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="border-l-4 border-blue-700 bg-blue-50 rounded-r-xl px-8 py-6">
          <p className="text-slate-800 text-lg leading-relaxed">
            <span className="font-bold text-slate-900">Quick math:</span> Miss
            10 calls/week &times; $400 average ticket ={" "}
            <span className="font-bold text-red-600">$16,000/month</span> out
            the door. Our clients typically recover 60–70% of those calls in
            the first 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: "1",
    title: "We answer every call, 24/7",
    description:
      "Our system picks up every missed call — nights, weekends, stat holidays. It qualifies the job (service call vs. install, urgency, system type) and books the appointment directly into your scheduler. Works with ServiceTitan, Housecall Pro, Jobber, and more.",
  },
  {
    number: "2",
    title: "We reactivate your dead leads",
    description:
      "We go through your old leads and lapsed maintenance customers and send personalised follow-ups. Warm responses get booked straight into your calendar. You just show up. Most clients book 50–200 jobs from leads they already paid to acquire.",
  },
  {
    number: "3",
    title: "We keep customers coming back",
    description:
      "Automated review requests go out 2 hours after every job. Happy customers get sent straight to Google. Unhappy ones get handled privately first. Maintenance plan renewals go out automatically so your recurring revenue compounds.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg">
            One system. Plugs into what you already use. No disruption.
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="bg-blue-700 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <BookCallBtn />
        </div>
      </div>
    </section>
  );
}

// ─── The System ───────────────────────────────────────────────────────────────

const systemTiers = [
  {
    label: "Core",
    labelColor: "bg-blue-100 text-blue-700",
    title: "AI Voice Receptionist",
    tagline: "Never miss another job.",
    features: [
      "Answers every call 24/7 — nights, weekends, stat holidays",
      "Qualifies the job: service call vs. install, urgency, system type",
      "Books appointments into your existing scheduler automatically",
      "Texts you immediately on emergencies and big install opportunities",
      "Weekly report showing recovered calls and estimated revenue",
    ],
  },
  {
    label: "Included in onboarding",
    labelColor: "bg-orange-100 text-orange-700",
    title: "Kickoff Cash Sprint",
    tagline: "Turn your cold CRM into booked jobs on day one.",
    features: [
      "We comb through your old leads and expired maintenance customers",
      "Personalised outreach sequences with seasonal offers",
      "Booked appointments land in your calendar — you just show up",
      "Typical result: 50–200 jobs from leads you already paid to acquire",
    ],
  },
  {
    label: "Bundled bonus",
    labelColor: "bg-green-100 text-green-700",
    title: "Google Review Engine",
    tagline: "More 5-stars, every week.",
    features: [
      "Auto-texts every customer 2 hours after job completion",
      "Happy customers go straight to Google — zero friction",
      "Catches unhappy customers privately before they post publicly",
      "Watch your review count and average rating climb steadily",
    ],
  },
];

function TheSystem() {
  return (
    <section id="what-you-get" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            The AgentArc 24/7 Revenue Recovery System
          </h2>
          <p className="text-slate-500 text-lg">
            One system. One decision. Everything included.
          </p>
        </div>

        {/* Single unified card */}
        <div className="bg-white border-2 border-blue-100 rounded-2xl shadow-md overflow-hidden">
          <div className="divide-y divide-slate-100">
            {systemTiers.map((tier) => (
              <div key={tier.title} className="p-8">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tier.labelColor}`}>
                  {tier.label}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">
                  {tier.title}
                </h3>
                <p className="text-slate-500 italic text-sm mb-4">{tier.tagline}</p>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="m-6 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0" aria-hidden>🛡️</span>
              <div>
                <p className="font-bold text-green-900 mb-1">Our Guarantee</p>
                <p className="text-green-800 leading-relaxed text-sm">
                  If we don&rsquo;t help you recover at least 3&times; your
                  monthly fee in booked jobs within 60 days, we keep working at
                  no charge until you do.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pb-8 text-center">
            <p className="text-slate-500 text-sm mb-5">
              Pricing is custom based on your call volume and market.
              Book a call — I&rsquo;ll give you an exact number in 15 minutes.
            </p>
            <BookCallBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ROI ─────────────────────────────────────────────────────────────────────

const comparison = [
  ["30–50% of calls go to voicemail", "Every call answered, 24/7"],
  ["Web leads called back hours later", "Contacted in under 60 seconds"],
  ["Old leads sit in your CRM forever", "Reactivated automatically"],
  ["Reviews trickle in randomly", "Steady stream after every job"],
  ["Office staff buried in scheduling", "Schedule fills itself"],
];

function ROISection() {
  return (
    <section className="bg-blue-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Here&rsquo;s the Math
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            If you miss 10 calls a week and your average ticket is $400,
            that&rsquo;s{" "}
            <strong className="text-white">$16,000/month</strong> walking out
            the door. Most clients recover 60–70% of those calls within the
            first 30 days.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-10">
          <div className="grid grid-cols-2">
            <div className="px-6 py-4 border-b border-white/10">
              <p className="text-red-400 font-bold uppercase tracking-wide text-sm">Without Us</p>
            </div>
            <div className="px-6 py-4 border-b border-white/10 bg-blue-700/20">
              <p className="text-green-400 font-bold uppercase tracking-wide text-sm">With AgentArc</p>
            </div>
          </div>
          {comparison.map(([before, after], i) => (
            <div key={i} className="grid grid-cols-2 border-t border-white/10">
              <div className="px-6 py-4 flex items-center gap-2.5 text-blue-100/70 text-sm">
                <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {before}
              </div>
              <div className="px-6 py-4 flex items-center gap-2.5 text-white text-sm bg-blue-700/10">
                <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {after}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <BookCallBtn dark />
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden mx-auto md:mx-0 border-4 border-slate-100 shadow-xl shrink-0">
            <Image
              src="/images/headshottt.jpg"
              alt="Taha Khan, founder of AgentArc"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why AgentArc
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              I&rsquo;m Taha. I built AI customer support systems at{" "}
              <strong>Amazon</strong> and <strong>SPS Commerce</strong> — the
              same tech Fortune 500 companies use. Now I help HVAC contractors
              use those same systems to stop losing jobs.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Ontario-based. I work directly with every client — no account
              managers, no offshore teams.
            </p>
            <a
              href={BOOK_CALL_URL}
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Talk to Taha Directly
            </a>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-slate-100 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
            Previously engineered at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {["Amazon", "SPS Commerce", "McMaster University"].map((co) => (
              <span key={co} className="text-slate-400 font-bold text-sm tracking-wide">
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────

const proofItems = [
  {
    quote:
      "Taha far exceeded my expectations. He was able to execute my vision, and then some. I look forward to working with him on our next project.",
    name: "Patty Green",
    company: "Explorer Software",
    context: "AI automation project",
    stars: 5,
  },
  {
    quote:
      "Taha is very professional and knows how to deal with his tools. Easy to work with and delivered exactly on time.",
    name: "Hany",
    company: "Asala Living",
    context: "AI workflow build",
    stars: 5,
  },
  {
    quote:
      "Led architecture for an AI agent handling thousands of inbound support interactions — reduced manual handling by over 60%.",
    name: "Internal Project",
    company: "SPS Commerce",
    context: "Enterprise AI system",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SocialProof() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-600">
            Verified reviews from{" "}
            <a
              href="https://www.upwork.com/freelancers/tahakhan91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Upwork
            </a>{" "}
            &mdash; 100% Job Success, Top Rated
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
              <Stars count={item.stars} />
              <blockquote className="mt-4 text-slate-700 leading-relaxed flex-1 text-sm">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                <p className="text-blue-700 text-xs mt-0.5">{item.company}</p>
                <p className="text-slate-400 text-xs mt-0.5 italic">{item.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Does this replace my CSR or office manager?",
    a: "No. It works alongside your team. It handles after-hours calls, peak overflow, and web leads so your office staff can focus on the jobs that actually need a human. Think of it as a night-shift receptionist who never calls in sick.",
  },
  {
    q: "What if it says something wrong to my customer?",
    a: "We train everything on your business: your services, your pricing, your service area, your tone. You review and approve every script before launch. Nothing goes live without your sign-off.",
  },
  {
    q: "How do you handle emergencies or angry customers?",
    a: "Emergency calls — gas leaks, no heat in winter — get flagged immediately and routed to you directly. Angry customers get escalated to a real person. The system is trained to de-escalate and know its limits.",
  },
  {
    q: "Is this compliant when messaging my existing customer list?",
    a: "Yes. We follow TCPA (US) and CASL (Canada) requirements when running outreach to your existing contacts. We only message people who have a prior business relationship with you and include opt-out language in every message.",
  },
  {
    q: "Will this work with ServiceTitan, Housecall Pro, or Jobber?",
    a: "Yes. We integrate with all major HVAC field service platforms. If you use something else, we'll connect to it. Setup doesn't require you to change how your team works.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 7–14 days. We handle the entire setup — you just review and approve before we go live.",
  },
  {
    q: "What's your guarantee?",
    a: "If we don't help you recover at least 3× your monthly fee in booked jobs within 60 days, we keep working at no charge until you do. We put it in writing.",
  },
  {
    q: "What's the contract length?",
    a: "Month-to-month after a 90-day initial term. We earn your business every month.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-semibold text-slate-900 text-base leading-snug">
                  {faq.q}
                </span>
                <span className="text-2xl font-light text-blue-700 shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="contact" className="bg-blue-950 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Stop Losing Jobs to Voicemail.
          </h2>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Pick a time below — 15 minutes, no pitch, just your numbers and a
            clear plan.
          </p>
        </div>

        {/* GHL inline booking calendar */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/OyWMD0u7mDySrQnKY0dU"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "680px" }}
            scrolling="no"
            id="OyWMD0u7mDySrQnKY0dU_1778332550251"
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-300 text-sm">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Prefer to call? {PHONE}
          </a>
          <span className="hidden sm:block text-white/20">·</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors underline">
            {EMAIL}
          </a>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-blue-900 hover:text-blue-700 transition-colors">
            AgentArc
          </Link>
          <span>&middot; AI Consultancy &middot; Milton, Ontario, Canada</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-slate-900 transition-colors">{EMAIL}</a>
        </div>
        <p>&copy; {new Date().getFullYear()} AgentArc. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HvacPage() {
  return (
    <div className="bg-white text-slate-900">
      <HvacNav />
      <main>
        <Hero />
        <PainPoints />
        <MiniMath />
        <HowItWorks />
        <TheSystem />
        <ROISection />
        <AboutSection />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69ff38b3ba1fce40f9037f30"
        strategy="afterInteractive"
      />
    </div>
  );
}
