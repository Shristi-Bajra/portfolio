import { createHero, getHero, updateHero } from "@/api";
import React, { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { toast } from "sonner";

const HeroSection = () => {
  const [heroId, setHeroId] = useState(null);
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    loadHero();
  }, []);

  const loadHero = async () => {
    try {
      console.log('Loading hero data...');
      const data = await getHero();
      console.log('Hero data received:', data);

      if (data) {
        setGreeting(data.greeting || "");
        setName(data.name || "");
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImageUrl(data.image_url || "");
        setHeroId(data.id);
        toast.success('Hero data loaded successfully');
      } else {
        console.log('No hero data found - starting fresh');
        toast.info('No existing data - you can create a new hero section');
      }
    } catch (error) {
      console.error('Error loading hero:', error);
      console.error('Error details:', error.message, error.stack);
      toast.error('Failed to load hero data: ' + error.message);
    }
  };

  const uploadImage = async (file) => {
    try {
      const filePath = `profile_${Date.now()}_${file.name}`;
      console.log('=== IMAGE UPLOAD START ===');
      console.log('File:', file);
      console.log('File path:', filePath);
      console.log('File size:', file.size);
      console.log('File type:', file.type);

      const { data, error } = await supabase.storage
        .from("portfolio")
        .upload(filePath, file);

      console.log('Upload response data:', data);
      console.log('Upload response error:', error);

      if (error) {
        console.error('Upload error:', error);
        toast.error('Failed to upload image: ' + error.message);
        return null;
      }

      const { data: publicUrl } = supabase.storage
        .from("portfolio")
        .getPublicUrl(filePath);

      console.log('Public URL response:', publicUrl);
      console.log('Image uploaded successfully:', publicUrl.publicUrl);
      console.log('=== IMAGE UPLOAD END ===');
      return publicUrl.publicUrl;
    } catch (error) {
      console.error('Upload exception:', error);
      toast.error('Failed to upload image');
      return null;
    }
  };

  const saveHero = async () => {
    try {
      console.log('Starting save process...');
      let finalImageUrl = imageUrl;

      if (image instanceof File) {
        console.log('Uploading new image...');
        const uploadedUrl = await uploadImage(image);
        if (uploadedUrl) {
          finalImageUrl = uploadedUrl;
        } else {
          toast.error('Image upload failed, saving without new image');
        }
      }

      const payload = {
        greeting,
        name,
        title,
        description,
        image_url: finalImageUrl,
      };

      console.log('Payload:', payload);
      console.log('Hero ID:', heroId);

      if (heroId) {
        console.log('Updating existing hero...');
        const result = await updateHero(heroId, payload);
        console.log('Update result:', result);
        toast.success('Hero section updated successfully!');
      } else {
        console.log('Creating new hero...');
        const result = await createHero(payload);
        console.log('Create result:', result);
        setHeroId(result.id);
        toast.success('Hero section created successfully!');
      }
      
      // Reload data to ensure UI is in sync
      await loadHero();
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to save: ' + (error.message || 'Unknown error'));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    toast.loading('Saving...');
    await saveHero();
    toast.dismiss();
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Hero Section
        </h1>
        <p className="text-slate-600 mt-2">
          Manage your landing page hero content
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 sm:p-8 rounded-lg border border-slate-200"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Greeting
          </label>
          <input
            type="text"
            value={greeting}
            onChange={(e) => setGreeting(e.target.value)}
            placeholder="e.g., Hello, I'm"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Full Stack Developer"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description about yourself..."
            rows="4"
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Profile Picture
          </label>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded mb-3"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImage(file);
                setImageUrl(URL.createObjectURL(file));
              }
            }}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
