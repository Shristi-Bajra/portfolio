import React, { useState } from "react";

export default function About() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    technicalSkill: [{ title: "", percent: "" }],
    stats: [{ title: "", number: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...form.technicalSkill];
    updatedSkills[index][name] = value;
    setForm({ ...form, technicalSkill: updatedSkills });
  };

  const handleStatsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStats = [...form.stats];
    updatedStats[index][name] = value;
    setForm({ ...form, stats: updatedStats });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">About Section</h1>
        <p className="text-slate-600 mt-2">Share your story and showcase your skills</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., About Me"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Tell your story..."
              rows="4"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Technical Skills</h2>
          {form.technicalSkill.map((skill, index) => (
            <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
              <input
                type="text"
                name="title"
                value={skill.title}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Skill name (e.g., React, Node.js)"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 bg-white"
              />
              <input
                type="number"
                name="percent"
                value={skill.percent}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Proficiency % (0-100)"
                min="0"
                max="100"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 bg-white"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Stats</h2>
          {form.stats.map((stat, index) => (
            <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
              <input
                type="text"
                name="title"
                value={stat.title}
                onChange={(e) => handleStatsChange(index, e)}
                placeholder="Stat title (e.g., Projects Completed)"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 bg-white"
              />
              <input
                type="text"
                name="number"
                value={stat.number}
                onChange={(e) => handleStatsChange(index, e)}
                placeholder="Stat number (e.g., 50+)"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 bg-white"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
