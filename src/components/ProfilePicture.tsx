
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ProfilePictureProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
  xl: 'h-32 w-32'
};

const ProfilePicture = ({ 
  src, 
  alt = "Pushkar R Adiga", 
  size = 'xl', 
  className 
}: ProfilePictureProps) => {
  return (
    <div className={cn(
      "relative group",
      className
    )}>
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse-glow"></div>
      
      {/* Main avatar container with depth */}
      <Avatar className={cn(
        "relative ring-2 ring-border/50 ring-offset-2 ring-offset-background",
        "shadow-[0_8px_32px_hsl(var(--primary)/0.15),0_4px_16px_hsl(var(--foreground)/0.1)]",
        "transition-all duration-300 group-hover:shadow-[0_12px_40px_hsl(var(--primary)/0.25),0_6px_20px_hsl(var(--foreground)/0.15)]",
        "group-hover:ring-primary/30 group-hover:scale-105",
        sizeClasses[size]
      )}>
        <AvatarImage 
          src={src} 
          alt={alt}
          className="object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-space-grotesk font-bold text-lg">
          PR
        </AvatarFallback>
      </Avatar>
      
      {/* Inner highlight */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-60"></div>
    </div>
  );
};

export default ProfilePicture;
