import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  // Mock data - replace with actual data from your API
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: "📁",
    },
    {
      title: "Blog Posts",
      value: "24",
      change: "+5 this month",
      icon: "📝",
    },
    {
      title: "Page Views",
      value: "1,234",
      change: "+12% this week",
      icon: "👁️",
    },
    {
      title: "Total Skills",
      value: "18",
      change: "+3 recently",
      icon: "🛠️",
    },
  ];

  const recentActivity = [
    {
      action: "Updated Resume",
      time: "2 hours ago",
      type: "update",
    },
    {
      action: "Published new blog post",
      time: "1 day ago",
      type: "create",
    },
    {
      action: "Added new project",
      time: "3 days ago",
      type: "create",
    },
    {
      action: "Updated About section",
      time: "5 days ago",
      type: "update",
    },
  ];

  const quickActions = [
    {
      title: "Add New Blog",
      description: "Create a new blog post",
      path: "/blog",
      icon: "📝",
    },
    {
      title: "Add Project",
      description: "Showcase your latest work",
      path: "/project",
      icon: "🚀",
    },
    {
      title: "Update Resume",
      description: "Keep your resume current",
      path: "/resume",
      icon: "📄",
    },
    {
      title: "Edit Hero Section",
      description: "Update your homepage",
      path: "/hero",
      icon: "🎯",
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      {/* Welcome Section */}
      <div className="pt-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Welcome back! 👋
        </h1>
        <p className="text-slate-600 mt-2">
          Here's what's happening with your portfolio today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white border-slate-200 hover:shadow-md transition-shadow"
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">{stat.change}</p>
                </div>
                <div className="text-3xl sm:text-4xl opacity-60">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-white border-slate-200">
        <CardHeader className="border-b border-slate-100">
          <CardTitle className="text-xl font-semibold text-slate-900">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-indigo-300 hover:shadow-sm transition-all text-left group"
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
                <h4 className="font-semibold text-slate-900">{action.title}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === "create"
                        ? "bg-emerald-500"
                        : "bg-indigo-500"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Status */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Portfolio Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    Profile Completion
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    85%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    Content Published
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    70%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    SEO Optimization
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    60%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-slate-400 h-2 rounded-full transition-all"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => navigate("/about")}
                >
                  Complete Your Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips & Suggestions */}
      <Card className="bg-white border-slate-200">
        <CardHeader className="border-b border-slate-100">
          <CardTitle className="text-lg font-semibold text-slate-900">
            Tips & Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 text-xl shrink-0">✓</span>
              <p className="text-sm text-slate-700">
                Your resume is up to date! Consider adding more certifications
                to stand out.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 text-xl shrink-0">→</span>
              <p className="text-sm text-slate-700">
                Add project screenshots and live demo links to showcase your
                work better.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-400 text-xl shrink-0">!</span>
              <p className="text-sm text-slate-700">
                You haven't published a blog post in the last 2 weeks. Keep
                your audience engaged!
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
