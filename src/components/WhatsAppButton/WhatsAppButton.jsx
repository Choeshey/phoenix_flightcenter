import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '7602014442'; // Replace with your WhatsApp number in international format (e.g., 1234567890)
  const message = 'Hello! I have a question about your flight training programs.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
