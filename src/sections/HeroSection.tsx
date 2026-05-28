import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

export const HeroSection: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col justify-between relative overflow-hidden bg-[#0C0C0C] select-none"
    >
      {/* Navbar - z-20 for clickability */}
      <FadeIn delay={0} y={-20} className="relative z-20 w-full">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
          <button
            onClick={() => handleScroll('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScroll('services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Price
          </button>

          <button
            onClick={() => handleScroll('contact')} // scrolls to Contact section
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading Container - z-0 to sit behind navbar/portrait/footer if overlapping */}
      <div className="flex-1 flex items-start justify-center overflow-hidden w-full relative">
        <FadeIn delay={0.15} y={40} className="w-full text-center mt-6 sm:mt-4 md:-mt-5 px-4">
          <h1 className="hero-heading font-black tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            hi, i&apos;m alvin
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar - z-20 to sit above portrait */}
      <div className="relative z-20 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            A web developer who creates high-performance websites to grow your business and elevate your digital brand
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => handleScroll('about')} />
        </FadeIn>
      </div>

      {/* Hero Portrait - z-10 absolutely centered */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <img
              src="/avatar.png"
              alt="Custom Portrait Avatar"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              draggable="false"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
