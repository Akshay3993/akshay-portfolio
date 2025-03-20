
import { Database, Calendar, BarChart2, LineChart, BriefcaseBusiness, School, Award } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  category: 'education' | 'experience' | 'extracurricular';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Bachelor of Technology, Computer Engineering",
    organization: "Pimpri Chinchwad College of Engineering, Pune",
    period: "Nov. 2022 – Apr. 2026",
    description: ["Secured CGPA of 8.26"],
    icon: <School />,
    category: 'education',
  },
  {
    id: 2,
    title: "Higher Secondary Certificate Examination",
    organization: "HSC Boards",
    period: "Apr. 2022",
    description: ["88.00% in the HSC Boards", "Secured a percentile of 98.90 in the CET and percentile of 88 in the JEE"],
    icon: <Award />,
    category: 'education',
  },
  {
    id: 3,
    title: "Data Analytics & Visualization Virtual Experience",
    organization: "Accenture North America – Forage",
    period: "July 2024",
    description: [
      "Conducted data cleaning, modeling, and analysis on 7 datasets to identify content trends for a hypothetical social media client",
      "Applied SQL and Python (Pandas, NumPy) to uncover insights and drive data-driven recommendations",
      "Developed a PowerPoint presentation and video report to communicate findings to internal stakeholders and clients"
    ],
    icon: <BarChart2 />,
    category: 'experience',
  },
  {
    id: 4,
    title: "Head of Hospitality - National Service Scheme (NSS)",
    organization: "NSS",
    period: "Sep 2024 – Present",
    description: [
      "Leading hospitality and logistics for NSS events, ensuring smooth execution of community service initiatives, volunteer management, and stakeholder coordination"
    ],
    icon: <BriefcaseBusiness />,
    category: 'extracurricular',
  },
  {
    id: 5,
    title: "Winter Camp Organizer & Volunteer",
    organization: "NSS",
    period: "Dec 2023, Dec 2024",
    description: [
      "Organized and participated in 7-day NSS winter camps, conducting community outreach programs, rural development activities, and awareness campaigns",
      "Developed skills in event planning, leadership, and problem-solving"
    ],
    icon: <BriefcaseBusiness />,
    category: 'extracurricular',
  },
  {
    id: 6,
    title: "Event Coordinator",
    organization: "NSS & College Initiatives",
    period: "2023 – Present",
    description: [
      "Successfully planned and executed multiple large-scale events, including PurgeVeda, Aatika, and Blood Donation Camps, improving team management & communication"
    ],
    icon: <BriefcaseBusiness />,
    category: 'extracurricular',
  },
  {
    id: 7,
    title: "National Cadet Corps (NCC) Cadet",
    organization: "NCC",
    period: "May 2019",
    description: [
      "Completed 10-day NCC training, enhancing discipline, teamwork, and leadership through rigorous drills, survival training, and collaborative exercise"
    ],
    icon: <Award />,
    category: 'extracurricular',
  },
];

const ExperienceTimeline = () => {
  const education = timelineItems.filter(item => item.category === 'education');
  const experience = timelineItems.filter(item => item.category === 'experience');
  const extracurricular = timelineItems.filter(item => item.category === 'extracurricular');
  
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">Experience & Education</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            My academic journey, professional experience, and extracurricular activities.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Education Column */}
          <AnimatedSection animation="fade-in-right" delay={200} className="space-y-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
              <School className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-blue-200 pl-6 pb-6 space-y-8">
              {education.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[29px] p-1 bg-blue-100 rounded-full border-2 border-blue-400">
                    <div className="bg-blue-500 text-white p-1 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <span className="text-sm font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1">{item.organization}</p>
                    <ul className="mt-2 space-y-1">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-1">
                          <span className="inline-block h-1 w-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Experience Column */}
          <AnimatedSection animation="fade-in" delay={300} className="space-y-4">
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
              <BarChart2 className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Professional Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-6 pb-6 space-y-8">
              {experience.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[29px] p-1 bg-purple-100 rounded-full border-2 border-purple-400">
                    <div className="bg-purple-500 text-white p-1 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-purple-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <span className="text-sm font-medium px-2 py-1 bg-purple-50 text-purple-600 rounded-full flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1">{item.organization}</p>
                    <ul className="mt-2 space-y-1">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-1">
                          <span className="inline-block h-1 w-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Extracurricular Column */}
          <AnimatedSection animation="fade-in-left" delay={400} className="space-y-4">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
              <BriefcaseBusiness className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Extracurricular</h3>
            </div>
            
            <div className="relative border-l-2 border-green-200 pl-6 pb-6 space-y-8">
              {extracurricular.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[29px] p-1 bg-green-100 rounded-full border-2 border-green-400">
                    <div className="bg-green-500 text-white p-1 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-green-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <span className="text-sm font-medium px-2 py-1 bg-green-50 text-green-600 rounded-full flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1">{item.organization}</p>
                    <ul className="mt-2 space-y-1">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-1">
                          <span className="inline-block h-1 w-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
