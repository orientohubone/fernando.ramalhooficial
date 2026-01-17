import AutoScroll from "embla-carousel-auto-scroll";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "./ui/carousel";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "SISTEMAS E FERRAMENTAS",
    logos = [
        {
            id: "lovable",
            description: "Lovable",
            image: "https://lovable.dev/favicon.ico",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "claude",
            description: "Claude AI",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Claude_AI_logo.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "replit",
            description: "Replit",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Replit_logo.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "google-ai",
            description: "Google AI Studio",
            image: "https://www.gstatic.com/lamda/images/favicon_v2_16x16.png",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "apis",
            description: "APIs",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "21st-dev",
            description: "21st.dev",
            image: "https://21st.dev/favicon.ico",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "antigravity",
            description: "Antigravity",
            image: "https://raw.githubusercontent.com/lucide-react/lucide/main/icons/rocket.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "windsurf",
            description: "Windsurf",
            image: "https://windsurf.ai/favicon.ico",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "vscode",
            description: "VS Code",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "supabase",
            description: "Supabase",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Supabase_logo.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "neon",
            description: "Neon",
            image: "https://neon.tech/favicon.ico",
            className: "h-8 w-auto grayscale brightness-200",
        },
        {
            id: "netlify",
            description: "Netlify",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Netlify_logo.svg",
            className: "h-8 w-auto grayscale brightness-200",
        },
    ],
}: Logos3Props) => {
    return (
        <section className="py-24 bg-black/20 border-y border-white/5">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-8 bg-[#00D9FF]"></div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00D9FF]">
                        {heading}
                    </h2>
                </div>
            </div>
            <div className="pt-10">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                                >
                                    <div className="mx-8 flex shrink-0 items-center justify-center group">
                                        <div className="relative">
                                            <img
                                                src={logo.image}
                                                alt={logo.description}
                                                className={`${logo.className} transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110`}
                                            />
                                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {logo.description}
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
