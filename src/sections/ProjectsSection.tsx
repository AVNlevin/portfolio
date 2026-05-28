import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

interface Project {
  num: string;
  category: string;
  name: string;
  col1_img1: string;
  col1_img2: string;
  col2_img: string;
}

const PROJECTS_DATA: Project[] = [
  {
    num: '01',
    category: 'SaaS App / Next.js',
    name: 'Nextlevel SaaS Platform',
    col1_img1: '/project_template.png',
    col1_img2: '/project_template.png',
    col2_img: '/project_template.png'
  }
];

interface ProjectCardProps extends Project {
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  num,
  category,
  name,
  col1_img1,
  col1_img2,
  col2_img,
  total
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to card container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Scale calculations: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[80vh] sm:h-[85vh] relative w-full flex justify-center items-start mb-[4vh] sm:mb-[8vh]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 24}px + 6rem)`, // 6rem corresponds to sticky offset (top-24 md:top-32)
          willChange: 'transform'
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Top summary row */}
        <div className="flex flex-row justify-between items-center w-full gap-4 mb-6 md:mb-8 border-b border-[#D7E2EA]/15 pb-5">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none text-[#D7E2EA] select-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 100px)' }}
            >
              {num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                {category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold uppercase text-[#D7E2EA] tracking-tight">
                {name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom double column grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full flex-1 items-stretch overflow-hidden">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
              <img
                src={col1_img1}
                alt={`${name} detail top`}
                className="w-full object-cover shadow-md hover:scale-105 transition-transform duration-500"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
                loading="lazy"
              />
            </div>
            <div className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
              <img
                src={col1_img2}
                alt={`${name} detail bottom`}
                className="w-full object-cover shadow-md hover:scale-105 transition-transform duration-500"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="md:col-span-6 flex overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px]">
            <img
              src={col2_img}
              alt={`${name} main feature`}
              className="w-full h-full object-cover shadow-md hover:scale-105 transition-transform duration-500 min-h-[220px] md:min-h-full"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 pb-20 relative z-30 w-full px-5 sm:px-8 md:px-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Title */}
        <FadeIn delay={0} y={40} className="mb-14 sm:mb-20 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Project Cards Stacking Container */}
        <div className="flex flex-col w-full relative">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.num}
              index={idx}
              total={PROJECTS_DATA.length}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
