import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rakshya
            </span>
            <span className="text-gradient  ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Bhuju
            </span>
          </h1>

          <p className="text-lg md:xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Like shooting stars across the sky, I’m on a journey to chase big
            dreams in tech. I create stellar web experiences with mordern
            technologies specializing in Django and React.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button ">
              View My Work
            </a>
          </div>
          <div className="pt-8 flex space-x-6 justify-center">
            <a
              href="http://www.linkedin.com/in/rakshya-bhuju13"
              target="_blank"
              className="p-3 rounded-full transition transform hover:scale-125 hover:shadow-[0_0_15px_rgba(147,197,253,0.8)] hover:text-pink-400 opacity-0 animate-fade-in-delay-1"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/rakxya111"
              target="_blank"
              className="p-3 rounded-full transition transform hover:scale-125 hover:shadow-[0_0_15px_rgba(147,197,253,0.8)] hover:text-blue-400 opacity-0 animate-fade-in-delay-2"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.instagram.com/rakxya_roxks/"
              target="_blank"
              className="p-3 rounded-full transition transform hover:scale-125 hover:shadow-[0_0_15px_rgba(251,146,60,0.8)] hover:text-orange-400 opacity-0 animate-fade-in-delay-3"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://x.com/Rakxya_Roxks"
              target="_blank"
              className="p-3 rounded-full transition transform hover:scale-125 hover:shadow-[0_0_15px_rgba(96,165,250,0.8)] hover:text-sky-400 opacity-0 animate-fade-in-delay-4"
            >
              <Twitter size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
