"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Footer from '../components/global/footer/footer';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5085/v1/auth/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        // Ensure the data structure matches what your API expects
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Registration Successful!");

    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Could not connect to the server. Please check if the backend is running and CORS is enabled.");
    }
  };
  return (
    <>
    <TopMenuBar/>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="John Doe"
              className={`w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
              type="email"
              placeholder="example@mail.com"
              className={`w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              placeholder="Enter phone number"
              className={`w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" }
              })}
              type="password"
              placeholder="Create password"
              className={`w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 ${errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-400'
                } text-white py-3 rounded-xl text-lg font-medium transition shadow-md shadow-orange-100`}
            >
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>
          </div>
        </form>
        </div>
      </div>
    <Footer/>
    </>
  );
}