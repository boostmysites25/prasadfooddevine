import React, { useState } from "react";

const Contact = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
  });

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };
  const handleGuestChange = (increment) => {
    setReservationData({
      ...reservationData,
      guests: increment
        ? Math.min(reservationData.guests + 1, 20)
        : Math.max(reservationData.guests - 1, 1),
    });
  };
  return (
    <div className="pb-16 pt-32 bg-[#FFFDD0] min-h-[calc(100vh-64px)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#800000] mb-4">
            Reserve Your Table
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the divine culinary journey at Prasad Food Divine. Book
            your table now for an unforgettable dining experience.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservationData.name}
                    onChange={handleReservationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={reservationData.phone}
                    onChange={handleReservationChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={reservationData.date}
                      onChange={handleReservationChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={reservationData.time}
                      onChange={handleReservationChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF9933] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Guests
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() => handleGuestChange(false)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
                      disabled={reservationData.guests <= 1}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="flex-1 text-center py-2">
                      {reservationData.guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleGuestChange(true)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
                      disabled={reservationData.guests >= 20}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-3 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2 bg-gray-200 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-map-marker-alt text-4xl text-[#800000] mb-4"></i>
                <h3 className="text-xl font-medium mb-2">Our Location</h3>
                <p className="text-gray-600 mb-4">
                  123 Divine Street, Culinary District
                  <br />
                  New Delhi, India 110001
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-phone-alt mr-2"></i> +91 98765 43210
                  <br />
                  <i className="fas fa-envelope mr-2"></i>{" "}
                  reservations@prasadfooddivine.com
                </p>
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536900776364!2d77.20651841508096!3d28.56270198244407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzQ1LjciTiA3N8KwMTInMjkuNSJF!5e0!3m2!1sen!2sin!4v1624532516001!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Restaurant Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-serif text-[#800000] mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for choosing Prasad Food Divine. We look forward to
                serving you.
              </p>
              <div className="bg-gray-50 rounded-md p-4 text-left mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-500">Name:</div>
                  <div>{reservationData.name || "Not provided"}</div>
                  <div className="text-gray-500">Date:</div>
                  <div>{reservationData.date || "Not provided"}</div>
                  <div className="text-gray-500">Time:</div>
                  <div>{reservationData.time || "Not provided"}</div>
                  <div className="text-gray-500">Guests:</div>
                  <div>{reservationData.guests}</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-[#FF9933] hover:bg-[#e88a2a] text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={() => {
                    setShowConfirmation(false);
                  }}
                >
                  Return to Home
                </button>
                <button
                  className="bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 px-6 py-2 rounded-md font-medium transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                  onClick={() => setShowConfirmation(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
