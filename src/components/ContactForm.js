import React, { useState } from 'react';
import { Mail } from 'lucide-react';
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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const areFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    setIsValid(isValidEmail && areFieldsFilled);
    return isValidEmail && areFieldsFilled;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Replace this URL with your actual backend API endpoint
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/mnt/data/back5.jpeg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-12 text-gray-900 font-sans">
          Contact Me
        </h1>
        <p className="text-center mb-8 text-gray-700">
          Please contact me directly at{' '}
          <em>
            <a href="mailto:andrewseanego14@gmail.com" className="text-blue-600 hover:text-blue-800">
              andrewseanego14@gmail.com
            </a>
          </em>{' '}
          or through this form.
        </p>

        {alert.show && (
          <div
            className={`mb-6 p-4 rounded-md ${
              alert.type === 'success' ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'
            }`}
          >
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <p>{alert.message}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-800">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-800">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contactReason" className="block text-sm font-medium text-gray-800">
              Reason for Contact
            </label>
            <textarea
              id="contactReason"
              name="contactReason"
              value={formData.contactReason}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full py-3 px-4 rounded-md text-white font-semibold ${
              isValid && !isSubmitting
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
