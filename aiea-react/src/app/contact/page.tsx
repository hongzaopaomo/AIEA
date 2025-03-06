'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="pt-24">
      {/* 页面标题 */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with the AIEA Art Foundation. We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* 联系表单和信息 */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          {/* 联系表单 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
                <p className="mb-4">We&apos;ve received your inquiry and will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-3 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-3 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-3 border"
                  >
                    <option value="">Please select</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Artist Submission">Artist Submission</option>
                    <option value="Funding Request">Funding Request</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black px-4 py-3 border"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-black text-white py-3 px-6 rounded-md font-medium transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* 联系信息 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Main Office</h3>
                <p className="text-gray-600 mb-1">123 Art Plaza, Lagos</p>
                <p className="text-gray-600 mb-1">Nigeria</p>
                <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM (WAT)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Phone & Email</h3>
                <p className="text-gray-600 mb-1">+234 123 456 7890</p>
                <p className="text-gray-600">info@aieaartfoundation.org</p>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest exhibitions, programs, and artist&apos;s features
                  through our social media channels.
                </p>
                {/* 社交媒体图标 */}
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <Image src="/images/twitter-icon.svg" alt="Twitter" width={24} height={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <Image src="/images/youtube-icon.svg" alt="YouTube" width={24} height={24} />
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Visit Us</h3>
                {/* 这里可以嵌入地图，但简单起见，使用占位符 */}
                <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-gray-600">Map Placeholder</p>
                </div>
                <p className="text-gray-600">
                  We welcome visitors to our gallery and office space. Please contact us in advance to schedule a visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 