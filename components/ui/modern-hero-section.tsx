import React from 'react';
import { cn } from '@/lib/utils';

// Define the props for the component
interface HeroCollageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  images: string[];
}

// Keyframes for the floating animation
const animationStyle = `
  @keyframes float-up {
    0% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    50% { transform: translateY(-15px); box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    100% { transform: translateY(0px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  }
  .animate-float-up {
    animation: float-up 6s ease-in-out infinite;
  }
`;

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  ({ className, title, subtitle, images, ...props }, ref) => {
    // We need exactly 7 images for this layout
    const displayImages = images.slice(0, 7);

    return (
      <>
        <style>{animationStyle}</style>
        <section
          ref={ref}
          className={cn(
            'relative w-full bg-transparent font-sans pt-12 sm:pt-16 sm:pb-0 overflow-hidden',
            className
          )}
          {...props}
        >
          {/* Main Content */}
          <div className="relative z-10 w-full px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-carena font-normal tracking-tighter text-foreground leading-tight mb-6 w-full">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Image Collage - Exact Layout from Screenshot */}
          <div className="relative z-0 mt-4 h-[600px] flex items-center justify-center">
            <div className="relative h-full w-full max-w-6xl">
              {/* Central Image */}
              {displayImages[0] && (
                <img
                  src={displayImages[0]}
                  alt="Main feature"
                  className="absolute left-1/2 top-1/2 h-auto w-[250px] md:w-[350px] aspect-[4/5] object-cover -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl z-20 animate-float-up"
                  style={{ animationDelay: '0s' }}
                />
              )}
              {/* Top-Left */}
              {displayImages[1] && (
                <img
                  src={displayImages[1]}
                  alt="Feature 2"
                  className="absolute left-[20%] md:left-[22%] top-[10%] md:top-[15%] h-auto w-40 md:w-52 aspect-[4/3] object-cover rounded-2xl shadow-lg z-10 animate-float-up"
                  style={{ animationDelay: '-1.2s' }}
                />
              )}
              {/* Top-Right */}
              {displayImages[2] && (
                <img
                  src={displayImages[2]}
                  alt="Feature 3"
                  className="absolute right-[22%] md:right-[24%] top-[8%] md:top-[10%] h-auto w-36 md:w-48 aspect-square object-cover rounded-2xl shadow-lg z-10 animate-float-up"
                  style={{ animationDelay: '-2.5s' }}
                />
              )}
              {/* Bottom-Right */}
              {displayImages[3] && (
                <img
                  src={displayImages[3]}
                  alt="Feature 4"
                  className="absolute right-[18%] md:right-[20%] bottom-[10%] md:bottom-[12%] h-auto w-48 md:w-60 aspect-[400/257] object-cover rounded-2xl shadow-lg z-30 animate-float-up"
                  style={{ animationDelay: '-3.5s' }}
                />
              )}
               {/* Far-Right */}
              {displayImages[4] && (
                <img
                  src={displayImages[4]}
                  alt="Feature 5"
                  className="absolute right-[2%] md:right-[5%] top-1/2 -translate-y-[60%] h-auto w-40 md:w-52 aspect-[5/7] object-cover rounded-2xl shadow-lg z-10 animate-float-up"
                   style={{ animationDelay: '-4.8s' }}
                />
              )}
              {/* Bottom-Left */}
              {displayImages[5] && (
                <img
                  src={displayImages[5]}
                  alt="Feature 6"
                  className="absolute left-[15%] md:left-[18%] bottom-[5%] md:bottom-[8%] h-auto w-44 md:w-56 aspect-[2/3] object-cover rounded-2xl shadow-lg z-30 animate-float-up"
                   style={{ animationDelay: '-5.2s' }}
                />
              )}
              {/* Far-Left */}
              {displayImages[6] && (
                <img
                  src={displayImages[6]}
                  alt="Feature 7"
                  className="absolute left-[2%] md:left-[5%] top-[20%] md:top-[25%] h-auto w-36 md:w-48 aspect-[2/3] object-cover rounded-2xl shadow-lg z-10 animate-float-up"
                   style={{ animationDelay: '-6s' }}
                />
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
);

HeroCollage.displayName = 'HeroCollage';

export { HeroCollage };
