"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function KitchenSigupForm() {
  const router = useRouter();
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    kitchenName: "",
    ownerName: "",
    phone: "",
    email: "",
    password: "", // ✅ added
    socialMediaLinks: [{ platform: "facebook", url: "" }],
    cuisineType: "",
    location: "",
    imageFile: null,
    imagePreview: "",
    managerDetails: {
      name: "",
      phone: "",
      email: "",
      role: "Manager",
    },
  });

  const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const addSocial = () => {
    setForm((p) => ({
      ...p,
      socialMediaLinks: [...p.socialMediaLinks, { platform: "instagram", url: "" }],
    }));
  };

  const removeSocial = (idx) => {
    setForm((p) => ({
      ...p,
      socialMediaLinks: p.socialMediaLinks.filter((_, i) => i !== idx),
    }));
  };

  const updateSocial = (idx, key, value) => {
    setForm((p) => ({
      ...p,
      socialMediaLinks: p.socialMediaLinks.map((item, i) =>
        i === idx ? { ...item, [key]: value } : item
      ),
    }));
  };

  const setManager = (key, value) => {
    setForm((p) => ({
      ...p,
      managerDetails: { ...p.managerDetails, [key]: value },
    }));
  };

  const onPickImage = () => fileRef.current?.click();

  const onImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      e.target.value = "";
      return;
    }

    const maxMB = 3;
    if (file.size > maxMB * 1024 * 1024) {
      alert(`Image must be under ${maxMB}MB.`);
      e.target.value = "";
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setForm((p) => ({
      ...p,
      imageFile: file,
      imagePreview: previewUrl,
    }));
  };

  const removeImage = () => {
    if (form.imagePreview) URL.revokeObjectURL(form.imagePreview);
    setForm((p) => ({ ...p, imageFile: null, imagePreview: "" }));
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const fd = new FormData();
    fd.append("kitchen_name", form.kitchenName);
    fd.append("owner_name", form.ownerName);
    fd.append("phone", form.phone);
    fd.append("email", form.email);
    fd.append("password", form.password); // ✅ added
    fd.append("cuisine_type", form.cuisineType);
    fd.append("location", form.location);

    fd.append("social_media_links", JSON.stringify(form.socialMediaLinks));
    fd.append("manager_details", JSON.stringify(form.managerDetails));

    if (form.imageFile) fd.append("img", form.imageFile);

    console.log("FormData ready:", {
      kitchen_name: form.kitchenName,
      owner_name: form.ownerName,
      phone: form.phone,
      email: form.email,
      password: form.password,
      cuisine_type: form.cuisineType,
      location: form.location,
      social_media_links: form.socialMediaLinks,
      manager_details: form.managerDetails,
      img_file_name: form.imageFile?.name || null,
    });

    alert("Signup successful!");
    router.push("/Homebar"); // ✅ HomeBar -> Homebar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7ef] px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 md:p-10">
        <h1 className="text-3xl font-semibold text-center">Kitchen Sign UP</h1>
        <p className="text-center text-sm text-slate-600 mt-2">
          Add your kitchen information to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-7">
          {/* Kitchen Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Kitchen Name
            </label>
            <input
              type="text"
              required
              value={form.kitchenName}
              onChange={(e) => setField("kitchenName", e.target.value)}
              placeholder="e.g., AmarKitchen"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Owner Name
            </label>
            <input
              type="text"
              required
              value={form.ownerName}
              onChange={(e) => setField("ownerName", e.target.value)}
              placeholder="e.g., Rahim Ahmed"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Phone
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="e.g., 01XXXXXXXXX"
                className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="e.g., kitchen@email.com"
                className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* ✅ Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              placeholder="Enter password"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Social Media Links */}
          <div>
            <div className="flex items-center justify-between gap-3">
              <label className="block text-sm font-semibold text-slate-800">
                Social Media Links
              </label>
              <button
                type="button"
                onClick={addSocial}
                className="text-sm font-semibold text-orange-600 hover:text-orange-500"
              >
                + Add link
              </button>
            </div>

            <div className="mt-3 space-y-3">
              {form.socialMediaLinks.map((item, idx) => (
                <div key={idx} className="grid gap-3 md:grid-cols-12 items-center">
                  <div className="md:col-span-3">
                    <select
                      value={item.platform}
                      onChange={(e) => updateSocial(idx, "platform", e.target.value)}
                      className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <option value="facebook">facebook</option>
                      <option value="instagram">instagram</option>
                      <option value="tiktok">tiktok</option>
                      <option value="youtube">youtube</option>
                      <option value="website">website</option>
                    </select>
                  </div>

                  <div className="md:col-span-8">
                    <input
                      type="url"
                      value={item.url}
                      onChange={(e) => updateSocial(idx, "url", e.target.value)}
                      placeholder="https://..."
                      className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div className="md:col-span-1 flex md:justify-end">
                    <button
                      type="button"
                      onClick={() => removeSocial(idx)}
                      className="px-3 py-2 rounded-xl border text-sm hover:bg-slate-50"
                      aria-label="Remove social link"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Cuisine Type
            </label>
            <input
              type="text"
              required
              value={form.cuisineType}
              onChange={(e) => setField("cuisineType", e.target.value)}
              placeholder="e.g., Bangladeshi, Chinese, Fast Food"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Location
            </label>
            <input
              type="text"
              required
              value={form.location}
              onChange={(e) => setField("location", e.target.value)}
              placeholder="e.g., Dhanmondi, Dhaka"
              className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Kitchen Image (logo)
            </label>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onImageChange}
              className="hidden"
            />

            <div className="rounded-2xl border p-4 md:p-5 bg-white">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <button
                  type="button"
                  onClick={onPickImage}
                  className="w-full md:w-auto bg-orange-500 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-orange-400 transition"
                >
                  Upload Image
                </button>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {form.imageFile ? form.imageFile.name : "No file selected"}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    JPG/PNG/WebP • max 3MB
                  </p>
                </div>

                {form.imageFile ? (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="w-full md:w-auto border px-5 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition"
                  >
                    Remove
                  </button>
                ) : null}
              </div>

              {form.imagePreview ? (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-600 mb-2">Preview</p>
                  <div className="overflow-hidden rounded-2xl border bg-slate-50">
                    <img
                      src={form.imagePreview}
                      alt="Kitchen preview"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Manager Details */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Manager Details
            </label>

            <div className="rounded-2xl border p-4 md:p-5 bg-white space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Manager Name
                  </label>
                  <input
                    type="text"
                    value={form.managerDetails.name}
                    onChange={(e) => setManager("name", e.target.value)}
                    placeholder="e.g., Hasan Ali"
                    className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={form.managerDetails.role}
                    onChange={(e) => setManager("role", e.target.value)}
                    placeholder="e.g., Manager"
                    className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Manager Phone
                  </label>
                  <input
                    type="tel"
                    value={form.managerDetails.phone}
                    onChange={(e) => setManager("phone", e.target.value)}
                    placeholder="e.g., 01XXXXXXXXX"
                    className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Manager Email
                  </label>
                  <input
                    type="email"
                    value={form.managerDetails.email}
                    onChange={(e) => setManager("email", e.target.value)}
                    placeholder="e.g., manager@email.com"
                    className="w-full px-5 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Stored as JSON (example): {"{ name, phone, email, role }"}
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl text-lg font-medium hover:bg-orange-400 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
