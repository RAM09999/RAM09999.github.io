import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Zap, CheckCircle, MapPin, Briefcase, Sparkles, Code2, Coffee } from 'lucide-react';

export default function About() {
  const { personal, about, education } = portfolioData;
  const currentEducation = education.find((item) => item.period) || education[0];

  const iconMap = {
    Layers:      <Layers      className="w-5 h-5 text-cyan-400"    />,
    Zap:         <Zap         className="w-5 h-5 text-emerald-400" />,
    Code2:       <Code2       className="w-5 h-5 text-violet-400"  />,
    Briefcase:   <Briefcase   className="w-5 h-5 text-indigo-400" />,
  };

  const dotColors = {
    cyan:    'bg-cyan-400',
    emerald: 'bg-emerald-400',
    violet:  'bg-violet-400',
    indigo:  'bg-indigo-400',
    amber:   'bg-amber-400',
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven by Curiosity & Craftsmanship
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            A closer look at who I am, what I build, and where I'm headed.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Main Narrative Card */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>My Journey & Goals</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mb-5 text-sm sm:text-base">
              {about.intro}
            </p>

            {about.philosophy && (
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base border-l-2 border-cyan-500/60 pl-4 py-1 italic bg-cyan-950/10 rounded-r-lg">
                "{about.philosophy}"
              </p>
            )}

            <div className="mt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Career Goals
              </div>
              <ul className="space-y-2">
                {about.careerGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800/60 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Based in</div>
                  <div className="text-xs font-semibold text-white">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800/60 text-emerald-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Availability</div>
                  <div className="text-xs font-semibold text-white">{personal.statusText}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800/60 text-violet-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Focus</div>
                  <div className="text-xs font-semibold text-white">{personal.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800/60 text-amber-400">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Education</div>
                  <div className="text-xs font-semibold text-white">{currentEducation.degree}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Strengths + CTA */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none" />
              <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                Core Strengths
              </div>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {about.coreStrengths.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColors[s.color] || 'bg-slate-400'} shrink-0`} />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
              <h4 className="text-sm font-semibold text-white mb-2">Looking to collaborate?</h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Whether you have a project idea, an internship opening, or want to discuss software development — I'd love to connect!
              </p>
              <a
                href="#contact"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
              >
                <span>Drop a message</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-slate-700/50">
                  {iconMap[item.icon] || <Zap className="w-5 h-5 text-cyan-400" />}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
