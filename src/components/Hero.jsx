import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Code2, Terminal } from 'lucide-react';

const iconMap = {
  Github:   <Github   className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Mail:     <Mail     className="w-5 h-5" />,
};

export default function Hero() {
  const { personal, socialLinks, education, skills, projects, experiences, certifications } = portfolioData;
  const currentEducation = education.find((item) => item.period) || education[0];
  const skillPreview = skills.list.slice(0, 5).map((skill) => skill.name);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-violet-500/8 rounded-full blur-[100px]" />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-7">

            {/* Status Badge */}
            {personal.availableForHire && (
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                {personal.statusText}
              </div>
            )}

            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white mb-3">
                {personal.name.split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {personal.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <div className="flex items-center gap-2 text-slate-400 text-base font-mono mt-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Role Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 max-w-[2rem] bg-gradient-to-r from-transparent to-cyan-500/50" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  About me
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-200 leading-snug">
                {personal.role}
              </p>
              <p className="text-sm font-mono text-cyan-400/90">{personal.headline}</p>
              <p className="text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
                {personal.shortBio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all"
              >
                <span>Get In Touch</span>
              </a>

              {personal.resumeAvailable && personal.resumeUrl ? (
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-slate-900/80 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all"
                >
                  Download Resume
                </a>
              ) : (
                <span
                  title="A resume PDF has not been provided yet"
                  aria-disabled="true"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-500 font-semibold text-sm cursor-not-allowed select-none"
                >
                  Resume available on request
                </span>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect</span>
              <div className="h-px flex-1 max-w-[1.5rem] bg-slate-800" />
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  title={link.name}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 hover:border-cyan-500/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
                >
                  {iconMap[link.icon] || <Code2 className="w-5 h-5" />}
                </a>
              ))}
            </div>

          </div>

          {/* Right: Code Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">

              {/* Terminal-style profile card */}
              <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">

                {/* Window chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <div className="flex items-center gap-1.5 ml-auto">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[11px] font-mono text-slate-500">profile.json</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-xs space-y-1 leading-relaxed">
                  <span className="text-slate-500">{'{'}</span><br />
                  <span className="text-slate-500 ml-4">"name"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-cyan-300">"{personal.name}"</span>,<br />

                  <span className="text-slate-500 ml-4">"role"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-300">"{personal.role}"</span>,<br />

                  <span className="text-slate-500 ml-4">"university"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-violet-300">"{currentEducation.institution}"</span>,<br />

                  <span className="text-slate-500 ml-4">"location"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">"{personal.location}"</span>,<br />

                  <span className="text-slate-500 ml-4">"skills"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-slate-300">{JSON.stringify(skillPreview)},</span><br />

                  <span className="text-slate-500 ml-4">"open_to"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-300">"{personal.statusText}"</span>,<br />

                  <span className="text-slate-500 ml-4">"status"</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-400">"{personal.availableForHire ? 'available' : 'not listed'}"</span><br />

                  <span className="text-slate-500">{'}'}</span>
                </div>

                {/* Bottom status bar */}
                <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{currentEducation.degree} · {currentEducation.period}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{currentEducation.institution}</span>
                </div>

              </div>

              {/* Below card: quick stat chips */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Projects', value: projects.length },
                  { label: 'Internships', value: experiences.length },
                  { label: 'Certs', value: certifications.length },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-3 border border-slate-800/80 text-center"
                  >
                    <div className="text-2xl font-extrabold text-white leading-none">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
