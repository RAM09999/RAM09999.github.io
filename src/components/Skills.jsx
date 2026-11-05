import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2, FileCode, Globe, Palette, Server,
  Terminal, Database, HardDrive, GitBranch,
  Sparkles
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Code2:          <Code2          className="w-5 h-5 text-cyan-400"    />,
    FileCode:       <FileCode       className="w-5 h-5 text-blue-400"    />,
    Globe:          <Globe          className="w-5 h-5 text-emerald-400" />,
    Palette:        <Palette        className="w-5 h-5 text-teal-400"    />,
    Server:         <Server         className="w-5 h-5 text-emerald-400" />,
    Terminal:       <Terminal       className="w-5 h-5 text-amber-400"   />,
    Database:       <Database       className="w-5 h-5 text-blue-400"    />,
    HardDrive:      <HardDrive      className="w-5 h-5 text-emerald-500" />,
    GitBranch:      <GitBranch      className="w-5 h-5 text-orange-400"  />,
  };

  const categoryColors = {
    Programming: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    Frontend:    'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    Database:    'text-blue-400 bg-blue-500/10 border-blue-500/20',
    Tools:       'text-orange-400 bg-orange-500/10 border-orange-500/20',
  };

  const filteredSkills = activeCategory === 'All'
    ? skills.list
    : skills.list.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Technologies and tools I have learned and applied through academic study, projects and internship experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skills.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col gap-3 group"
            >
              {/* Icon + category badge */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60 transition-transform group-hover:scale-110">
                  {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                </div>
                <span
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                    categoryColors[skill.category] || 'text-slate-400 bg-slate-800/90 border-slate-700/50'
                  }`}
                >
                  {skill.category}
                </span>
              </div>

              {/* Name */}
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h4>
                <span className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-300">
                  {skill.proficiency}
                </span>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900 to-emerald-950/20 border border-slate-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white">Current Proficiency</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              My proficiency level across the technologies listed here is moderate.
            </p>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors whitespace-nowrap"
          >
            See in Action ↓
          </a>
        </div>

      </div>
    </section>
  );
}
