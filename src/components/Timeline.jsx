import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const { experiences, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-24 relative bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              My internship experience, academic background and professional development journey.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-16">
            <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Work Experience ({experiences.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">

            {activeTab === 'experience' ? (
              experiences.map((exp, idx) => (
                <div key={idx} className="relative group">

                  {/* Node */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0B0F19] border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-emerald-400 transition-colors" />
                  </div>

                  {/* Card */}
                  <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800/90">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                        {exp.period && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {exp.period}
                          </span>
                        )}
                        {exp.status && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {exp.status}
                          </span>
                        )}
                        {exp.location && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 text-[11px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {exp.certificateNote && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-amber-400 font-mono bg-amber-500/5 border border-amber-500/20 px-3 py-2 rounded-lg">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {exp.certificateNote}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              education.map((edu, idx) => (
                <div key={idx} className="relative group">

                  {/* Node */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0B0F19] border-2 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Card */}
                  <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800/90">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>

                      {edu.period && (
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                            {edu.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {edu.description && (
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}

          </div>
        </div>
      </section>

      {/* Invisible anchor for Education tab from navbar */}
      <div id="education" className="-mt-24 pt-24 pointer-events-none" aria-hidden="true" />
    </>
  );
}
