"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "@/components/container";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 lg:py-32 flex items-center">
      <Container className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Let&apos;s <span className="text-blue-600">talk</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-md font-medium">
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                <a href="mailto:hello@example.com" className="text-lg font-bold hover:text-blue-600 transition-colors">
                  gabrieledimezza05@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-lg font-bold">
                  Delft, Netherlands
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-black hover:text-blue-600 transition-colors">
              <FaGithub className="w-7 h-7" />
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition-colors">
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a href="#" className="text-black hover:text-blue-600 transition-colors">
              <FaTwitter className="w-7 h-7" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100"
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            
            <input type="hidden" name="access_key" value="a24fbc48-8411-4140-831d-b286c86a2f2f" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/20"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

      </Container>
    </div>
  );
}