import React, { useState } from "react";

const BookTableForm = () => {
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccessMessage("Your table has been successfully booked!");

    setFormData({
      guests: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-xl"
      >
        <div className="text-center lg:mx-52 py-10">
          <h2 className="text-4xl font-bold text-brown bg-red-700 rounded-lg text-center  text-white  mb-8 py-2">
            Book a Table
          </h2>
        </div>

        {/* Row 1: Number of Guests, Date, Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-800 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Guests"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2">Select Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
              required
            />
          </div>
        </div>

        {/* Row 2: Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-800 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Phone"
              required
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="mb-6">
          <label className="block text-gray-800 mb-2">Message for Us</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 text-center text-green-500 font-semibold">
            {successMessage}
          </div>
        )}

        {/* Book a Table Button */}
        <button
          type="submit"
          className="w-full py-3 bg-red-700 text-white rounded-lg font-bold text-lg hover:bg-red-800 transition duration-300 shadow-lg hover:shadow-orange-600/50"
        >
          Book a Table
        </button>
      </form>
    </div>
  );
};

export default BookTableForm;