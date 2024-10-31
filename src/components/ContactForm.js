import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Send, AlertCircle } from 'lucide-react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactReason: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsValid(isValidEmail && areFieldsFilled);
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      if (response.status === 200) {
        setAlert({
          show: true,
          message: 'Your message has been sent successfully!',
          type: 'success'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactReason: ''
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        message: 'Failed to send message. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-fixed relative pt-20 md:pt-24">
      {/* Main content container with top margin for navbar */}
      <div className="relative w-full max-w-xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
              Let's Connect
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-lg text-gray-800 font-medium">
              <Mail className="w-5 h-5" />
              <span>Reach out at</span>
              <a 
                href="mailto:andrewseanego14@gmail.com" 
                className="font-bold text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 decoration-blue-200 hover:decoration-blue-300"
              >
                andrewseanego14@gmail.com
              </a>
            </div>
          </div>

          {alert.show && (
            <div className={`mb-6 p-4 rounded-xl backdrop-blur-sm flex items-center space-x-3
              ${alert.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
              {alert.type === 'success' ? <Send className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              <p className="font-medium">{alert.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/80 text-gray-900 border border-gray-200 rounded-lg 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                    placeholder-gray-400 transition-all duration-200 font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/80 text-gray-900 border border-gray-200 rounded-lg 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                    placeholder-gray-400 transition-all duration-200 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/80 text-gray-900 border border-gray-200 rounded-lg 
                  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                  placeholder-gray-400 transition-all duration-200 font-medium"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contactReason" className="block text-sm font-bold text-gray-900">
                Your Message
              </label>
              <textarea
                id="contactReason"
                name="contactReason"
                value={formData.contactReason}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 bg-white/80 text-gray-900 border border-gray-200 rounded-lg 
                  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                  placeholder-gray-400 transition-all duration-200 resize-none font-medium"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center space-x-2
                transition-all duration-200 ${
                isValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;