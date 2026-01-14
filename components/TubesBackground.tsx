import React, { useEffect, useRef, useState } from 'react';

// Helper function para combinar classes
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Helper para cores do projeto (apenas verdes)
const getProjectColors = () => {
  return ["#5AB473", "#58B573", "#4a9b5f"]; // Apenas tons de verde
};

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Carregar a biblioteca threejs-components do CDN
        // @ts-ignore
        const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
        const TubesCursor = module.default;

        if (!mounted) return;

        // Inicializar com cores do projeto
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: getProjectColors(),
            lights: {
              intensity: 80, // Reduzido drasticamente de 150 para 80
              colors: ["#5AB473", "#58B573", "#4a9b5f", "#3d8650"] // Apenas tons de verde
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        // Handle resize
        const handleResize = () => {
          if (tubesRef.current && tubesRef.current.resize) {
            tubesRef.current.resize();
          }
        };

        window.addEventListener('resize', handleResize);
        
        cleanup = () => {
          window.removeEventListener('resize', handleResize);
          if (tubesRef.current && tubesRef.current.dispose) {
            tubesRef.current.dispose();
          }
          tubesRef.current = null;
        };

      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
        // Fallback: criar efeito simples se a biblioteca não carregar
        initFallbackEffect();
      }
    };

    // Efeito fallback caso a biblioteca não carregue
    const initFallbackEffect = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      let particles: any[] = [];
      const colors = getProjectColors();

      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;
        life: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.vx = (Math.random() - 0.5) * 2;
          this.vy = (Math.random() - 0.5) * 2;
          this.size = Math.random() * 3 + 1;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.life = 1;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.life -= 0.01;
          this.vx *= 0.98;
          this.vy *= 0.98;
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.save();
          ctx.globalAlpha = this.life * 0.3; // Reduzido de 0.6 para 0.3
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 10; // Reduzido de 20 para 10
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2); // Reduzido tamanho
          ctx.fill();
          ctx.restore();
        }
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(x, y));
        }

        if (particles.length > 100) {
          particles = particles.slice(-100);
        }
      };

      canvas.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles = particles.filter(particle => {
          particle.update();
          if (particle.life > 0) {
            particle.draw(ctx);
            return true;
          }
          return false;
        });

        requestAnimationFrame(animate);
      };

      animate();

      cleanup = () => {
        window.removeEventListener('resize', resizeCanvas);
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    
    // Mudar para cores do projeto (apenas verdes)
    const colors = getProjectColors();
    const lightsColors = ["#5AB473", "#58B573", "#4a9b5f", "#3d8650"]; // Apenas tons de verde
    
    if (tubesRef.current.tubes) {
      tubesRef.current.tubes.setColors(colors);
      tubesRef.current.tubes.setLightsColors(lightsColors);
    }
  };

  return (
    <div 
      className={cn("relative w-full h-full min-h-[400px] overflow-hidden bg-background", className)}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
          <div className="w-8 h-8 border-2 border-[#5AB473] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

// Default export
export default TubesBackground;
