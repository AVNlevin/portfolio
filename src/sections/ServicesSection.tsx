import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  num: string;
  title: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Designing and coding clean, responsive, and pixel-perfect frontends using modern frameworks like React and Next.js, fully optimized for search engines and performance.',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'Creating modern, intuitive, and conversion-focused layouts with high-fidelity prototypes and seamless user journeys that make your brand stand out.',
  },
  {
    num: '03',
    title: 'Interactive Animations',
    description:
      'Building high-end web experiences with rich animations (e.g., GSAP, Framer Motion, 3D graphics) that engage users and make your products unforgettable.',
  },
  {
    num: '04',
    title: 'E-Commerce Solutions',
    description:
      'Setting up robust, secure online stores with custom payment integrations, inventory management, and fast checkout flows to turn visitors into buyers.',
  },
  {
    num: '05',
    title: 'Performance & SEO Optimization',
    description:
      'Auditing, refactoring, and optimizing websites to achieve maximum loading speeds, Google PageSpeed scores, and visibility on search engine results.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 w-full select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((item, idx) => (
            <FadeIn
              key={item.num}
              delay={idx * 0.1}
              y={30}
              className="flex items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]"
            >
              {/* Number Left */}
              <div
                className="font-black leading-none text-[#0C0C0C] select-none min-w-[70px] sm:min-w-[130px] md:min-w-[180px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.num}
              </div>

              {/* Title & Description Stack Right */}
              <div className="flex flex-col text-left justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
