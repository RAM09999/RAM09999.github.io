import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Globe, Atom, ShieldCheck, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  const iconMap = {
    Atom:     <Atom     className="w-5 h-5 text-cyan-400"    />,
    Globe:    <Globe    className="w-5 h-5 text-emerald-400" />,
    Award:    <Award    className="w-5 h-5 text-amber-400"   />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-violet-400" />,
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials & Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Programs
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Workshops, training programs and certifications I have completed to continuously grow my knowledge and skills.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                {/* Icon + Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {iconMap[cert.badgeIcon] || <Award className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-400 border border-slate-700/60">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-medium text-emerald-400 mb-4">
                  {cert.issuer}
                </div>

                {/* Extra details */}
                <div className="space-y-1.5">
                  {cert.duration && (
                    <div className="text-[11px] text-slate-400">
                      Duration: <span className="text-slate-300">{cert.duration}</span>
                    </div>
                  )}
                  {cert.academicCredit && (
                    <div className="text-[11px] text-slate-400">
                      Academic Credit: <span className="text-slate-300">{cert.academicCredit}</span>
                    </div>
                  )}
                  {cert.certificateNumber && (
                    <div className="text-[11px] text-slate-400 font-mono">
                      Cert ID: <span className="text-slate-300">{cert.certificateNumber}</span>
                    </div>
                  )}
                  {cert.programName && (
                    <div className="text-[11px] text-slate-400 italic">
                      {cert.programName}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Completed
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">cert on file</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900 to-emerald-950/20 border border-slate-800 text-center max-w-2xl mx-auto">
          <Sparkles className="w-5 h-5 text-cyan-400 mx-auto mb-3" />
          <h4 className="text-sm font-semibold text-white mb-1">Committed to Continuous Learning</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            I actively seek out workshops, programs and certifications to broaden my technical knowledge and stay current with industry developments.
          </p>
        </div>

      </div>
    </section>
  );
}
