import React, { useState } from "react";
import { Input } from "../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [form, setForm] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
    },
    summary: "",
    education: [
      {
        degree: "",
        institude: "",
        years: "",
        grade: "",
      },
    ],
    experience: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        responsibility: [""],
      },
    ],
    skills: [""],
    certifications: [
      {
        name: "",
        issue: "",
        year: "",
      },
    ],
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      personalInfo: {
        ...form.personalInfo,
        [name]: value,
      },
    });
  };

  const handleSummaryChange = (e) => {
    setForm({ ...form, summary: e.target.value });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...form.education];
    updatedEducation[index][field] = value;
    setForm({ ...form, education: updatedEducation });
  };

  const addEducation = () => {
    setForm({
      ...form,
      education: [
        ...form.education,
        { degree: "", institude: "", years: "", grade: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = form.education.filter((_, i) => i !== index);
    setForm({ ...form, education: updatedEducation });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...form.experience];
    updatedExperience[index][field] = value;
    setForm({ ...form, experience: updatedExperience });
  };

  const addExperience = () => {
    setForm({
      ...form,
      experience: [
        ...form.experience,
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          responsibility: [""],
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = form.experience.filter((_, i) => i !== index);
    setForm({ ...form, experience: updatedExperience });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...form.skills];
    updatedSkills[index] = value;
    setForm({ ...form, skills: updatedSkills });
  };

  const addSkill = () => {
    setForm({ ...form, skills: [...form.skills, ""] });
  };

  const removeSkill = (index) => {
    const updatedSkills = form.skills.filter((_, i) => i !== index);
    setForm({ ...form, skills: updatedSkills });
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...form.certifications];
    updatedCertifications[index][field] = value;
    setForm({ ...form, certifications: updatedCertifications });
  };

  const addCertification = () => {
    setForm({
      ...form,
      certifications: [
        ...form.certifications,
        { name: "", issue: "", year: "" },
      ],
    });
  };

  const removeCertification = (index) => {
    const updatedCertifications = form.certifications.filter(
      (_, i) => i !== index
    );
    setForm({ ...form, certifications: updatedCertifications });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Resume Management</h1>
        <p className="text-slate-600 mt-1">
          Manage your professional information
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-900">
              📋 Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={form.personalInfo.name}
                  placeholder="John Doe"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={form.personalInfo.email}
                  placeholder="john@example.com"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={form.personalInfo.phone}
                  placeholder="+1 234 567 8900"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Address
                </label>
                <Input
                  type="text"
                  name="address"
                  value={form.personalInfo.address}
                  placeholder="City, Country"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  LinkedIn Profile
                </label>
                <Input
                  type="url"
                  name="linkedin"
                  value={form.personalInfo.linkedin}
                  placeholder="https://linkedin.com/in/username"
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  GitHub Profile
                </label>
                <Input
                  type="url"
                  name="github"
                  value={form.personalInfo.github}
                  placeholder="https://github.com/username"
                  onChange={handlePersonalInfoChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-900">
              ✍️ Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              name="summary"
              value={form.summary}
              placeholder="Write a brief summary about your professional background, skills, and career objectives..."
              onChange={handleSummaryChange}
              className="min-h-30"
            />
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                🎓 Education
              </CardTitle>
              <Button
                type="button"
                onClick={addEducation}
                className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
              >
                + Add Education
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {form.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium text-slate-700">
                      Education #{index + 1}
                    </h4>
                    {form.education.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeEducation(index)}
                        variant="destructive"
                        size="sm"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Degree
                      </label>
                      <Input
                        type="text"
                        value={edu.degree}
                        placeholder="Bachelor of Science"
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Institution
                      </label>
                      <Input
                        type="text"
                        value={edu.institude}
                        placeholder="University Name"
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institude",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Years
                      </label>
                      <Input
                        type="text"
                        value={edu.years}
                        placeholder="2018-2022"
                        onChange={(e) =>
                          handleEducationChange(index, "years", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Grade/GPA
                      </label>
                      <Input
                        type="text"
                        value={edu.grade}
                        placeholder="3.8/4.0"
                        onChange={(e) =>
                          handleEducationChange(index, "grade", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                💼 Work Experience
              </CardTitle>
              <Button
                type="button"
                onClick={addExperience}
                className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
              >
                + Add Experience
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {form.experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium text-slate-700">
                      Experience #{index + 1}
                    </h4>
                    {form.experience.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeExperience(index)}
                        variant="destructive"
                        size="sm"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Job Title
                      </label>
                      <Input
                        type="text"
                        value={exp.title}
                        placeholder="Software Engineer"
                        onChange={(e) =>
                          handleExperienceChange(index, "title", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={exp.company}
                        placeholder="Tech Company Inc."
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "company",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Start Date
                      </label>
                      <Input
                        type="text"
                        value={exp.startDate}
                        placeholder="Jan 2020"
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        End Date
                      </label>
                      <Input
                        type="text"
                        value={exp.endDate}
                        placeholder="Present"
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "endDate",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Responsibilities (comma-separated)
                      </label>
                      <Textarea
                        value={exp.responsibility.join(", ")}
                        placeholder="Led team of 5 developers, Built REST APIs, Improved performance by 40%"
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "responsibility",
                            e.target.value.split(", ")
                          )
                        }
                        className="min-h-20"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                🛠️ Skills
              </CardTitle>
              <Button
                type="button"
                onClick={addSkill}
                className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
              >
                + Add Skill
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {form.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={skill}
                    placeholder="e.g., JavaScript, React"
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                  {form.skills.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeSkill(index)}
                      variant="destructive"
                      size="sm"
                    >
                      ✕
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <CardTitle className="text-lg font-semibold text-slate-900">
                🏆 Certifications
              </CardTitle>
              <Button
                type="button"
                onClick={addCertification}
                className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
              >
                + Add Certification
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {form.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-medium text-slate-700">
                      Certification #{index + 1}
                    </h4>
                    {form.certifications.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeCertification(index)}
                        variant="destructive"
                        size="sm"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Certification Name
                      </label>
                      <Input
                        type="text"
                        value={cert.name}
                        placeholder="AWS Certified Developer"
                        onChange={(e) =>
                          handleCertificationChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Issuing Organization
                      </label>
                      <Input
                        type="text"
                        value={cert.issue}
                        placeholder="Amazon Web Services"
                        onChange={(e) =>
                          handleCertificationChange(
                            index,
                            "issue",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Year Obtained
                      </label>
                      <Input
                        type="text"
                        value={cert.year}
                        placeholder="2023"
                        onChange={(e) =>
                          handleCertificationChange(
                            index,
                            "year",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => console.log("Draft saved")}
            className="w-full sm:w-auto"
          >
            Save as Draft
          </Button>
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto sm:px-8"
          >
            Save Resume
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Resume;
