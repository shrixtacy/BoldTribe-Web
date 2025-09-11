import { useState, memo, useCallback } from 'react';
import { Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import OptimizedImage from './OptimizedImage';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  role: string;
  essence: string;
  image: string;
  quote: string;
  social: {
    github?: string;
    linkedin?: string;
  };
}

const Team = memo(() => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [leadershipRef, visibleLeadership] = useStaggeredAnimation(2, 150);
  const [teamRef, visibleTeam] = useStaggeredAnimation(6, 100);

  const handleMouseEnter = useCallback((memberIndex: number) => {
    setHoveredMember(memberIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMember(null);
  }, []);

  const leadership: TeamMember[] = [
    {
      name: 'Abhinab Tripathy',
      role: 'Creative Director',
      essence: 'Visionary',
      image: '/team/Abhinab.jpg',
      quote: 'Transforming ideas into impactful digital experiences.',
      social: { linkedin: 'https://www.linkedin.com/in/abhinab-tripathy-b0936b268/' },
    },
    {
      name: 'Sivasish Bebartta',
      role: 'Mentor',
      essence: 'Guide',
      image: '/team/Sivashis.jpg',
      quote: 'Empowering teams to achieve their full potential.',
      social: { linkedin: 'https://www.linkedin.com/in/sivasish/' },
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Rajesh Kumar Pattnaik',
      role: 'Application Developer',
      essence: 'Developer',
      image: '/team/Rajesh .jpg',
      quote: 'Building robust and scalable applications.',
      social: { 
        linkedin: 'https://www.linkedin.com/in/rajesh-kumar-pattanaik-032b64243/',
        github: 'https://github.com/rajeshboldtribe'
      },
    },
    {
      name: 'Suvendu Kumar Rath',
      role: 'Technical Project Coordinator',
      essence: 'Organizer',
      image: '/team/Suvendu.jpg',
      quote: 'Bridging the gap between ideas and execution.',
      social: {},
    },
    {
      name: 'Manoranjan Basantia',
      role: 'Backend Developer',
      essence: 'Architect',
      image: '/team/Manoranjan.jpg',
      quote: 'Crafting powerful server-side solutions.',
      social: { linkedin: 'https://www.linkedin.com/in/manoranjanbasantia/' },
    },
    {
      name: 'Arpita Singh',
      role: 'Web Developer',
      essence: 'Creator',
      image: '/team/Arpita.jpg',
      quote: 'Building beautiful and functional web experiences.',
      social: {},
    },
    {
      name: 'Shriyansh Dash',
      role: 'Creative Associate',
      essence: 'Designer',
      image: '/team/Shriyansh.jpg',
      quote: 'Blending creativity with functionality.',
      social: {
        linkedin: 'https://www.linkedin.com/in/shriyanshdash/',
        github: 'https://github.com/shrixtacy',
      },
    },
    {
      name: 'Jayshree Padhi',
      role: 'Content Creator Intern',
      essence: 'Storyteller',
      image: '/team/Jayshree.jpg',
      quote: 'Crafting compelling narratives for digital spaces.',
      social: { linkedin: 'https://www.linkedin.com/in/jayshree-padhi-7b05b5280/' },
    },
  ];

  const renderTeamMember = (member: TeamMember, index: number, isLeadership: boolean) => {
    const memberIndex = isLeadership ? index : index + leadership.length;
    const isHovered = hoveredMember === memberIndex;

    return (
      <div
        key={`team-${index}`}
        className="group relative transition-all duration-700 ease-out w-full"
        onMouseEnter={() => handleMouseEnter(memberIndex)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`bg-white dark:bg-[#2a2a2a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-500 cursor-pointer border-2 h-full ${
            isHovered
              ? 'border-red-500/50 shadow-2xl shadow-red-500/20 scale-105 -rotate-1 sm:-rotate-2'
              : 'border-transparent dark:shadow-black/50'
          }`}>
          <div className="text-center">
            <div className="relative mb-4 sm:mb-6">
              <OptimizedImage 
                src={member.image} 
                alt={member.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                width={96}
                height={96}
              />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              {member.role}
            </p>

            <div
              className={`inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-300 ${
                isHovered
                  ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                  : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              }`}>
              {member.essence}
            </div>

            <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic mb-3 sm:mb-4">
                "{member.quote}"
              </p>
            </div>

            <div className={`flex justify-center space-x-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 h-0'}`}>
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="relative bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-300 waves-pattern">
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gray-50 dark:bg-[#1a1a1a] rounded-b-[50px] sm:rounded-b-[100px] transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-48 sm:h-64 lg:h-96 bg-white dark:bg-[#1e1e1e] rounded-tl-[100px] sm:rounded-tl-[200px] transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-20 sm:pb-32 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Meet The Tribe
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            The passionate individuals behind BoldTribe's success
          </p>
        </AnimatedSection>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            Leadership
          </h3>
          <div ref={leadershipRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <div
                key={`leadership-${index}`}
                className={`transition-all duration-500 ease-out ${
                  visibleLeadership.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {renderTeamMember(member, index, true)}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
            Our Team
          </h3>
          <div 
            ref={teamRef as React.RefObject<HTMLDivElement>} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <div
                key={`team-member-${index}`}
                className={`transition-all duration-500 ease-out ${
                  visibleTeam.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {renderTeamMember(member, index, false)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Team.displayName = 'Team';

export default Team;