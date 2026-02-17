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

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "",
      description: "",
      shortDescription: "",
      technologies: [""],
      liveUrl: "",
      githubUrl: "",
      imageUrl: "",
      startDate: "",
      endDate: "",
      status: "in-progress",
      category: "",
      features: [""],
    },
  ]);

  const [currentProject, setCurrentProject] = useState(0);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleTechChange = (projectIndex, techIndex, value) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies[techIndex] = value;
    setProjects(updatedProjects);
  };

  const addTechnology = (projectIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies.push("");
    setProjects(updatedProjects);
  };

  const removeTechnology = (projectIndex, techIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies = updatedProjects[
      projectIndex
    ].technologies.filter((_, i) => i !== techIndex);
    setProjects(updatedProjects);
  };

  const handleFeatureChange = (projectIndex, featureIndex, value) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].features[featureIndex] = value;
    setProjects(updatedProjects);
  };

  const addFeature = (projectIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].features.push("");
    setProjects(updatedProjects);
  };

  const removeFeature = (projectIndex, featureIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].features = updatedProjects[
      projectIndex
    ].features.filter((_, i) => i !== featureIndex);
    setProjects(updatedProjects);
  };

  const addNewProject = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: "",
        description: "",
        shortDescription: "",
        technologies: [""],
        liveUrl: "",
        githubUrl: "",
        imageUrl: "",
        startDate: "",
        endDate: "",
        status: "in-progress",
        category: "",
        features: [""],
      },
    ]);
    setCurrentProject(projects.length);
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    if (currentProject >= updatedProjects.length) {
      setCurrentProject(Math.max(0, updatedProjects.length - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Projects submitted:", projects);
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Project Management
          </h1>
          <p className="text-slate-600 mt-1">
            Showcase your work and achievements
          </p>
        </div>
        <Button
          onClick={addNewProject}
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
        >
          + New Project
        </Button>
      </div>

      {/* Project Selector */}
      {projects.length > 1 && (
        <Card className="bg-white border-slate-200">
          <CardContent className="pt-6">
            <div className="flex gap-2 flex-wrap">
              {projects.map((project, index) => (
                <Button
                  key={project.id}
                  type="button"
                  onClick={() => setCurrentProject(index)}
                  variant={currentProject === index ? "default" : "outline"}
                  size="sm"
                  className={currentProject === index ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                >
                  {project.name || `Project ${index + 1}`}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {projects[currentProject] && (
          <>
            {/* Basic Information */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  📁 Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Project Name *
                    </label>
                    <Input
                      type="text"
                      value={projects[currentProject].name}
                      placeholder="E-commerce Platform"
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "name",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Short Description
                    </label>
                    <Input
                      type="text"
                      value={projects[currentProject].shortDescription}
                      placeholder="A brief one-liner about your project"
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "shortDescription",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Detailed Description
                    </label>
                    <Textarea
                      value={projects[currentProject].description}
                      placeholder="Describe your project in detail, including the problem it solves and your approach..."
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "description",
                          e.target.value
                        )
                      }
                      className="min-h-30"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Category
                      </label>
                      <Input
                        type="text"
                        value={projects[currentProject].category}
                        placeholder="Web App, Mobile App, API, etc."
                        onChange={(e) =>
                          handleProjectChange(
                            currentProject,
                            "category",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Status
                      </label>
                      <select
                        value={projects[currentProject].status}
                        onChange={(e) =>
                          handleProjectChange(
                            currentProject,
                            "status",
                            e.target.value
                          )
                        }
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="planning">Planning</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="on-hold">On Hold</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    💻 Technologies Used
                  </CardTitle>
                  <Button
                    type="button"
                    onClick={() => addTechnology(currentProject)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
                    size="sm"
                  >
                    + Add Technology
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {projects[currentProject].technologies.map(
                    (tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <Input
                          type="text"
                          value={tech}
                          placeholder="React, Node.js, MongoDB"
                          onChange={(e) =>
                            handleTechChange(
                              currentProject,
                              techIndex,
                              e.target.value
                            )
                          }
                        />
                        {projects[currentProject].technologies.length > 1 && (
                          <Button
                            type="button"
                            onClick={() =>
                              removeTechnology(currentProject, techIndex)
                            }
                            variant="destructive"
                            size="sm"
                          >
                            ✕
                          </Button>
                        )}
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    ⭐ Key Features
                  </CardTitle>
                  <Button
                    type="button"
                    onClick={() => addFeature(currentProject)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
                    size="sm"
                  >
                    + Add Feature
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {projects[currentProject].features.map(
                    (feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Input
                          type="text"
                          value={feature}
                          placeholder="User authentication, Real-time updates, etc."
                          onChange={(e) =>
                            handleFeatureChange(
                              currentProject,
                              featureIndex,
                              e.target.value
                            )
                          }
                        />
                        {projects[currentProject].features.length > 1 && (
                          <Button
                            type="button"
                            onClick={() =>
                              removeFeature(currentProject, featureIndex)
                            }
                            variant="destructive"
                            size="sm"
                          >
                            ✕
                          </Button>
                        )}
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Links & Media */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  🔗 Links & Media
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Project Image/Screenshot URL
                    </label>
                    <Input
                      type="url"
                      value={projects[currentProject].imageUrl}
                      placeholder="https://example.com/project-screenshot.jpg"
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "imageUrl",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Live Demo URL
                    </label>
                    <Input
                      type="url"
                      value={projects[currentProject].liveUrl}
                      placeholder="https://project-demo.com"
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "liveUrl",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      GitHub Repository URL
                    </label>
                    <Input
                      type="url"
                      value={projects[currentProject].githubUrl}
                      placeholder="https://github.com/username/repo"
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "githubUrl",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  📅 Project Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      value={projects[currentProject].startDate}
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
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
                      type="date"
                      value={projects[currentProject].endDate}
                      onChange={(e) =>
                        handleProjectChange(
                          currentProject,
                          "endDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-4">
              <div className="order-2 sm:order-1">
                {projects.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => deleteProject(currentProject)}
                    className="w-full sm:w-auto"
                  >
                    Delete Project
                  </Button>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 order-1 sm:order-2">
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
                  Save Project
                </Button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Project;