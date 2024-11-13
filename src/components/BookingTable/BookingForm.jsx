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

  const [submitted, setSubmitted] = useState(false);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Booking Details:
    - Number of Guests: ${formData.guests}
    - Date: ${formData.date}
    - Time: ${formData.time} ${new Date(
      `1970-01-01T${formData.time}`
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    - Name: ${formData.name}
    - Email: ${formData.email}
    - Phone: ${formData.phone}
    - Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "9516997144"; // Enter your WhatsApp number here
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setFormData({
        guests: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-xl"
        aria-label="Table Booking Form"
      >
        <div className="text-center lg:mx-52 py-10">
          <h2 className="text-4xl font-bold text-brown bg-red-700 rounded-lg text-center text-white mb-8 py-2">
            Book a Table
          </h2>
        </div>

        {/* Row 1: Number of Guests, Date, Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-800 mb-2" htmlFor="guests">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Guests"
              aria-label="Number of Guests"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={getTodayDate()}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Select Date"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2" htmlFor="time">
              Select Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Select Time"
              required
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="1:00">1:00 PM</option>
              <option value="2:00">2:00 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="4:00">4:00 PM</option>
              <option value="5:00">5:00 PM</option>
              <option value="6:00">6:00 PM</option>
              <option value="6:30">6:30 PM</option>
              <option value="7:00">7:00 PM</option>
              <option value="7:30">7:30 PM</option>
              <option value="8:00">8:00 PM</option>
              <option value="8:30">8:30 PM</option>
              <option value="9:00">9:00 PM</option>
              <option value="9:30">9:30 PM</option>
              <option value="10:00">10:00 PM</option>
              <option value="11:00">11:00 PM</option>
            </select>
          </div>
        </div>

        {/* Row 2: Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-800 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your name"
              aria-label="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2" htmlFor="email">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
              aria-label="Email Address"
            />
          </div>

          <div>
            <label className="block text-gray-800 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Phone"
              aria-label="Phone Number"
              required
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="mb-6">
          <label className="block text-gray-800 mb-2" htmlFor="message">
            Message for Us
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your message"
            aria-label="Message for Us"
            rows="4"
          ></textarea>
        </div>

        {submitted && (
          <p className="text-green-600 font-bold text-center mb-4">
            Your booking is being processed. Redirecting to WhatsApp...
          </p>
        )}

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
