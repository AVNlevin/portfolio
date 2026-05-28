import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 relative z-30 w-full select-none border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <FadeIn delay={0} y={40} className="mb-8">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Get In Touch
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.15} y={30} className="mb-12 max-w-lg">
          <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-sm sm:text-base md:text-lg">
            Have a project in mind or want to collaborate? Drop me a message and let&apos;s craft high-performance digital experiences together.
          </p>
        </FadeIn>

        {/* Social connections */}
        <FadeIn delay={0.45} y={20} className="flex gap-8 items-center flex-wrap justify-center">
          <a
            href="https://wa.me/919429744220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider font-light"
            title="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/alvin.biju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wider font-light"
            title="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
            <span>Instagram</span>
          </a>
        </FadeIn>

        {/* Copyright */}
        <FadeIn delay={0.6} y={10} className="mt-24 sm:mt-32 border-t border-[#D7E2EA]/10 pt-8 w-full">
          <p className="text-[#D7E2EA]/40 text-xs sm:text-sm uppercase tracking-widest font-light">
            &copy; {new Date().getFullYear()} Alvin. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
