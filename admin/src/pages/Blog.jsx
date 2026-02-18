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
import { Select } from "@/components/ui/select";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      tags: [""],
      featuredImage: "",
      publishedDate: "",
      status: "draft",
    },
  ]);

  const [currentBlog, setCurrentBlog] = useState(0);

  const handleBlogChange = (index, field, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index][field] = value;
    setBlogs(updatedBlogs);
  };

  const handleTagChange = (blogIndex, tagIndex, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogIndex].tags[tagIndex] = value;
    setBlogs(updatedBlogs);
  };

  const addTag = (blogIndex) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogIndex].tags.push("");
    setBlogs(updatedBlogs);
  };

  const removeTag = (blogIndex, tagIndex) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogIndex].tags = updatedBlogs[blogIndex].tags.filter(
      (_, i) => i !== tagIndex,
    );
    setBlogs(updatedBlogs);
  };

  const addNewBlog = () => {
    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1,
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        author: "",
        category: "",
        tags: [""],
        featuredImage: "",
        publishedDate: "",
        status: "draft",
      },
    ]);
    setCurrentBlog(blogs.length);
  };

  const deleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    if (currentBlog >= updatedBlogs.length) {
      setCurrentBlog(Math.max(0, updatedBlogs.length - 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blogs submitted:", blogs);
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Blog Management</h1>
          <p className="text-slate-600 mt-1">
            Create and manage your blog posts
          </p>
        </div>
        <Button
          onClick={addNewBlog}
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
        >
          + New Blog Post
        </Button>
      </div>

      {/* Blog Selector */}
      {blogs.length > 1 && (
        <Card className="bg-white border-slate-200">
          <CardContent className="pt-6">
            <div className="flex gap-2 flex-wrap">
              {blogs.map((blog, index) => (
                <Button
                  key={blog.id}
                  type="button"
                  onClick={() => setCurrentBlog(index)}
                  variant={currentBlog === index ? "default" : "outline"}
                  size="sm"
                  className={currentBlog === index ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                >
                  {blog.title || `Blog ${index + 1}`}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {blogs[currentBlog] && (
          <>
            {/* Basic Information */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  📝 Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Blog Title *
                    </label>
                    <Input
                      type="text"
                      value={blogs[currentBlog].title}
                      placeholder="Enter an engaging blog title"
                      onChange={(e) =>
                        handleBlogChange(currentBlog, "title", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Slug (URL)
                    </label>
                    <Input
                      type="text"
                      value={blogs[currentBlog].slug}
                      placeholder="blog-post-url-slug"
                      onChange={(e) =>
                        handleBlogChange(currentBlog, "slug", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Author
                      </label>
                      <Input
                        type="text"
                        value={blogs[currentBlog].author}
                        placeholder="Author name"
                        onChange={(e) =>
                          handleBlogChange(
                            currentBlog,
                            "author",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        Category
                      </label>
                      <Input
                        type="text"
                        value={blogs[currentBlog].category}
                        placeholder="e.g., Technology, Lifestyle"
                        onChange={(e) =>
                          handleBlogChange(
                            currentBlog,
                            "category",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Excerpt
                    </label>
                    <Textarea
                      value={blogs[currentBlog].excerpt}
                      placeholder="Write a short summary of your blog post..."
                      onChange={(e) =>
                        handleBlogChange(currentBlog, "excerpt", e.target.value)
                      }
                      className="min-h-20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    🏷️ Tags
                  </CardTitle>
                  <Button
                    type="button"
                    onClick={() => addTag(currentBlog)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
                    size="sm"
                  >
                    + Add Tag
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {blogs[currentBlog].tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center gap-2">
                      <Input
                        type="text"
                        value={tag}
                        placeholder="Tag name"
                        onChange={(e) =>
                          handleTagChange(currentBlog, tagIndex, e.target.value)
                        }
                      />
                      {blogs[currentBlog].tags.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeTag(currentBlog, tagIndex)}
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

            {/* Content */}
            <Card className="bg-white border-slate-200">
              <CardHeader className="border-b border-slate-100">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  ✍️ Content
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Textarea
                  value={blogs[currentBlog].content}
                  placeholder="Write your blog content here... (supports Markdown)"
                  onChange={(e) =>
                    handleBlogChange(currentBlog, "content", e.target.value)
                  }
                  className="min-h-75"
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-4">
              <div className="order-2 sm:order-1">
                {blogs.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => deleteBlog(currentBlog)}
                    className="w-full sm:w-auto"
                  >
                    Delete Blog
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
                  Publish Blog
                </Button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Blog;
