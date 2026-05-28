import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919429744220', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center select-none"
    >
      {/* Absolute Decorative 3D Images */}
      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Abstract Object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
          loading="lazy"
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Block"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Lego Shapes"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
          loading="lazy"
        />
      </FadeIn>

      {/* Content wrapper - z-10 for interactivity */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character animated paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4 w-full flex justify-center">
          <AnimatedText
            text="I focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as any}
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={handleWhatsAppRedirect} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
