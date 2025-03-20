
import { Users, Calendar, Award, Sparkles, MapPin, Heart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

interface Activity {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  icon: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Head of Hospitality",
    organization: "National Service Scheme (NSS)",
    period: "Sep 2024 - Present",
    description: "Leading hospitality and logistics for NSS events, ensuring smooth execution of community service initiatives, volunteer management, and stakeholder coordination.",
    tags: ["Leadership", "Event Planning", "Volunteer Management"],
    icon: <Users className="h-5 w-5 text-blue-500" />,
  },
  {
    id: 2,
    title: "Winter Camp Organizer & Volunteer",
    organization: "NSS",
    period: "Dec 2023, Dec 2024",
    description: "Organized and participated in 7-day NSS winter camps, conducting community outreach programs, rural development activities, and awareness campaigns. Developed skills in event planning, leadership, and problem-solving.",
    tags: ["Community Service", "Rural Development", "Leadership"],
    icon: <MapPin className="h-5 w-5 text-red-500" />,
  },
  {
    id: 3,
    title: "Event Coordinator",
    organization: "NSS & College Initiatives",
    period: "2023 - Present",
    description: "Successfully planned and executed multiple large-scale events, including PurgeVeda, Aatika, and Blood Donation Camps, improving team management & communication.",
    tags: ["Event Management", "Team Leadership", "Communication"],
    icon: <Calendar className="h-5 w-5 text-green-500" />,
  },
  {
    id: 4,
    title: "National Cadet Corps (NCC) Cadet",
    organization: "NCC",
    period: "May 2019",
    description: "Completed 10-day NCC training, enhancing discipline, teamwork, and leadership through rigorous drills, survival training, and collaborative exercises.",
    tags: ["Discipline", "Teamwork", "Physical Training"],
    icon: <Award className="h-5 w-5 text-purple-500" />,
  },
];

const Activities = () => {
  return (
    <section id="activities" className="section-padding bg-white dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-heading">Extracurricular Activities</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="section-subheading">
            Beyond academics, I actively participate in various activities that help me develop leadership and interpersonal skills.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {activities.map((activity, index) => (
            <AnimatedSection 
              key={activity.id} 
              animation={index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 
              delay={100 * index}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-slate-700">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mr-3">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground">{activity.organization}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-secondary dark:bg-slate-700/50 rounded-full flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {activity.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{activity.description}</p>
                  
                  {activity.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {activity.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={400} className="mt-16">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 text-center">
            <Heart className="text-red-500 h-8 w-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Community Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through my involvement in NSS and other activities, I've developed strong leadership abilities, 
              enhanced my communication skills, and learned the value of giving back to the community. 
              These experiences complement my technical expertise and make me a well-rounded professional.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Activities;
