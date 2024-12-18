import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types/Project';



const projects: Project[] = [
  {
    title: 'Dashboard and Geographical data visualization',
    route: 'tupaia',
    description:
      'A data platform that allows you to collect information about any entity, aggregate it with other data sources, build beautiful analytics and reports, then disseminate, map and visualize it – all in one place.',
    image: 'images/tupaia.png',
    technologies: ['React.js', 'Rechart.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Electronic medical record (EMR) System',
    route: 'tamanu',
    description: 'An electronic system collecting patients medical history.',
    image: 'images/tamanu.jpg',
    technologies: ['React.js', 'Rechart.js', 'Node.js', 'PostgreSQL'],
  },
];

const WorkExperience = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Work Experience</h3>
      <div className="space-y-8">
        <div>
          <div className="border-l-2 border-gray-200 pl-6 relative">
            <div className="absolute -left-[80px] top-1 ">
              <p className="text-xs text-gray-600 text-center">2020 - 2023 </p>
            </div>
            <div className="text-gray-600 space-y-1 text-start mb-6">
              <h4 className="mb-1">Beyond Essential Systems</h4>
              <p className="text-sm">Software Engineer </p>
              <ul className="ml-4 space-y-0 list-disc text-sm max-w-lg">
                <li>Implemented data visualization feature, enhanced website functionality</li>
                <li>Provided technical support across teams</li>
                <li>Participated in weekend on-call rotation</li>
                <li>Developed frontend based on Figma UX design</li>
              </ul>
            </div>
            {/* Key Projects Section */}
            <div className="space-y-6">
              <p className="text-sm text-gray-700 mb-4 text-start">Key Projects:</p>

              {projects.map((project) => (
                <ProjectCard key={project.route} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
