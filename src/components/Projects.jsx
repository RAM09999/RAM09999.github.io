import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Check, Construction } from 'lucide-react';

export default function Projects() {
  const { projects, socialLinks } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const githubProfileUrl = socialLinks.find(l => l.name === 'GitHub')?.url || 'https://github.com/RAM09999';

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Work & Projects
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Web applications and development projects I have built through academic work, personal learning and internship experience.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Header Banner */}
                <div className="h-44 sm:h-52 bg-gradient-to-br from-slate-900 via-[#101827] to-[#0A1220] p-6 relative border-b border-slate-800/80 flex flex-col justify-between overflow-hidden">

                  {/* Grid accent */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

                  {/* Glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />

                  {/* Top bar */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono font-medium text-cyan-400">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                      {project.status === 'Ongoing' && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-semibold">
                          <Construction className="w-3 h-3" />
                          Ongoing
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mock terminal card inside banner */}
                  <div className="relative z-10 bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-1.5 text-[10px] font-mono text-slate-400">
                        {project.status === 'Ongoing' ? 'in progress...' : 'deployed · running'}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-cyan-300 truncate">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {project.context && (
                    <p className="text-xs font-mono text-emerald-400 mb-3">{project.context}</p>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Key Highlights:
                      </div>
                      {project.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  {project.tags.length > 0 && <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>}

                  {project.progressNote && (
                    <p className="text-xs text-amber-400 mt-2 font-mono">{project.progressNote}</p>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800/80 flex items-center justify-end gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                )}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="px-3.5 py-2 rounded-lg bg-slate-800/50 text-slate-500 border border-slate-800 text-xs font-semibold cursor-not-allowed">
                    {project.status === 'Ongoing' ? 'In Progress' : 'No Demo'}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* View more on GitHub */}
        <div className="mt-12 text-center">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
          >
            <Github className="w-4 h-4" />
            <span>Explore more repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
