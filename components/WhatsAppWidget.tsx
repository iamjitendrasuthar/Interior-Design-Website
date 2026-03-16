"use client";
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919521985145"; // Use your actual number with country code

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div
      className=" font-sans flex flex-col items-end z-[999]"
      style={{ position: "fixed", right: "20px", bottom: "20px" }}
    >
      {" "}
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#132A13] p-4 text-white">
            <h3 className="font-bold text-lg">Js Interiors</h3>
            <p className="text-xs opacity-80">
              Typically replies within an hour
            </p>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-gray-700 mb-4">
              Hi there! 👋 <br /> How can we help you with your interior design
              today?
            </div>

            <form onSubmit={handleSendMessage}>
              <textarea
                className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-[#132A13] resize-none"
                placeholder="Type your message..."
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="w-full mt-2 bg-[#000] text-black py-2 rounded-md text-sm font-semibold hover:bg-[#128C7E] transition-colors"
              >
                Start Chat
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto block bg-white text-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-200"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
