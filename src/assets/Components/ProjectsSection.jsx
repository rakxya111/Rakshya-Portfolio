import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nerb Beauty E-Commerce",
    description:
      "A cosmetics e-commerce website built with Django, HTML, CSS, and JavaScript, featuring product listings, a shopping cart, and smooth online transactions.",
    image: "/projects/NERB.png",
    tags: ["Html", "Css","Javascript","Python & Django"],
    demoUrl: "#",
    githubUrl: "https://github.com/rakxya111/NERB-Beauty-Ecommerce",
  },
  {
    id: 2,
    title: "Marg Career Recommendation System",
    description:
      "career recommendation app , offering quiz-based career suggestions, blogs, a chatbot, and an interactive UI powered by Django and Scikit-learn.",
    image: "/projects/MARG.png",
    tags: ["Python", "Scikit Learn", "Django", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/rakxya111/marg-career-recommender-ai-v1",
  },
  {
    id: 3,
    title: "Mitram social media platform",
    description:
      "A social media app with user profiles, posts, likes, and comments, featuring a clean UI and interactive experience built with React and Django.",
    image: "/projects/MITRAM.png",
    tags: ["Django Rest Framework", "React", "TypeScript", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/rakxya111/mitram-social-media-platform-V1",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                    <div className="h-40 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}

           

                        <h3 className="text-xl font-semibol mb-1">{project.title}</h3>
                        <p className="text-muted foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a>
                                <a href={project.githubUrl}  target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
             </div>
                    </div>
                </div>
            ))}

        </div>

        <div className="text-center mt-12">
            <a href="https://github.com/rakxya111" 
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16} /> </a>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
