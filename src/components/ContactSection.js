import { Github, Linkedin, Mail, Phone, MapPin, Code2 } from 'lucide-react';
import React, { useState } from 'react';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Your email address
  const myEmail = 'nischaynis1@gmail.com';

  // Social media URLs - Replace with your actual profile URLs
  const socialLinks = {
    github: 'https://github.com/NischayVerma21',
    linkedin: 'https://www.linkedin.com/in/nischay-verma-a33926378',
    leetcode: 'https://leetcode.com/u/NischayVerma/'
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle direct email click
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Contact - Nischay Verma');
    const body = encodeURIComponent(`Hello Nischay,

I hope this email finds you well. I am reaching out regarding your portfolio and would like to discuss potential collaboration opportunities.

Looking forward to hearing from you.

Best regards,
[Your Name]`);
    
    const mailtoUrl = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    // Create email content
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form Submission');
    
    const emailBody = encodeURIComponent(`Dear Nischay,

I hope this message finds you well. I am reaching out to you through your portfolio contact form.

Message from ${formData.name}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for your time and consideration. I look forward to hearing from you soon.

Best regards,  
${formData.name},
mail:${formData.email}

---
This email was sent via your portfolio contact form.  
Portfolio: https://nischayverma.dev  
Date: ${new Date().toLocaleDateString()}
`);

    // Create mailto URL with all details
    const mailtoUrl = `mailto:${myEmail}?subject=${subject}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoUrl;

    // Optional: Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-4">
            Get In <span className="text-blue-700 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Let's discuss your project and bring your ideas to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email Card - Enhanced with direct mailto */}
              <div 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    nischaynis1@gmail.com
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    Click to send email with pre-filled subject
                  </p>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Phone</h3>
                  <a 
                    href="tel:+919599835318"
                    className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 9599835318
                  </a>
                </div>
              </div>
              
              {/* Location Card */}
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">India</p>
                </div>
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Follow Me</h3>
              <div className="space-y-4">
                
                {/* GitHub */}
                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">@nischayverma</span>
                  </div>
                  <button 
                    onClick={() => handleSocialClick('github')}
                    className="px-4 py-2 bg-blue-800 dark:bg-blue-200 text-white dark:text-blue-900 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-300 transition-colors font-semibold text-sm"
                  >
                    Follow
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">@nischayverma</span>
                  </div>
                  <button 
                    onClick={() => handleSocialClick('linkedin')}
                    className="px-4 py-2 bg-blue-800 dark:bg-blue-200 text-white dark:text-blue-900 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-300 transition-colors font-semibold text-sm"
                  >
                    Follow
                  </button>
                </div>

                {/* LeetCode */}
                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-100">@nischayverma</span>
                  </div>
                  <button 
                    onClick={() => handleSocialClick('leetcode')}
                    className="px-4 py-2 bg-blue-800 dark:bg-blue-200 text-white dark:text-blue-900 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-300 transition-colors font-semibold text-sm"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form with Fixed Text Colors */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-blue-200 dark:border-blue-800">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2">Send a Message</h3>
              <p className="text-slate-600 dark:text-slate-400">Fill out the form below and I'll get back to you soon!</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-blue-50 dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-blue-50 dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-blue-50 dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                  placeholder="Project Inquiry / Collaboration / General Question"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-blue-50 dark:bg-slate-900 border-2 border-blue-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none font-medium text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                ></textarea>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                  📧 <strong>How it works:</strong> When you click "Send Message", your default email client will open with a pre-formatted email containing all your form details, ready to send to me!
                </p>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-lg"
              >
                📧 Send Message via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
