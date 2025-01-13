'use client'

import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // Index signature to allow any additional keys with string values
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_1t0viza';
    const templateID = 'template_g0m21ul';
    const userID = 'NGYHX7OALCIG4c2cH';

    emailjs.send(serviceID, templateID, formData, userID)  // No need for casting now
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        setStatus('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>sdunsmore244@gmail.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>+1 (302) 602-9060</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-green-600 mr-2" />
                <span>Delaware, New Castle, 19720</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
