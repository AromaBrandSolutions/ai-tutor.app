import { useState } from "react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {/* Settings Title */}
        <h2 className="text-2xl font-bold text-gray-700">Settings</h2>

        {/* Tabs (Dummy - Just UI) */}
        <div className="flex space-x-6 mt-4 border-b pb-2 text-gray-600">
          <span className="font-semibold border-b-2 border-black pb-1">Personal Details</span>
          <span className="cursor-pointer hover:text-gray-900">Notifications</span>
          <span className="cursor-pointer hover:text-gray-900">Privacy & Terms</span>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mt-6">
          <img
            src="/src/assets/Amol.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Form */}
        <form className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700">State/Province</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-gray-700">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter zip code"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Save profile
            </button>
            <button
              type="reset"
              className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-200"
              onClick={() =>
                setFormData({
                  fullName: "",
                  email: "",
                  address: "",
                  city: "",
                  state: "",
                  zipCode: "",
                  country: "",
                })
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
