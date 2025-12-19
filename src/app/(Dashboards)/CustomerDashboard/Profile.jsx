import React from "react";

const Profile = ({ customerInfo }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">Profile Information</h3>
      <p><strong>Name:</strong> {customerInfo.name}</p>
      <p><strong>Email:</strong> {customerInfo.email}</p>
      <p><strong>Phone:</strong> {customerInfo.phone}</p>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Edit Profile</button>
    </div>
  );
};

export default Profile;  // Correct default export
