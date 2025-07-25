import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  GitBranch, 
  FileText, 
  Zap,
  BarChart3,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const techIcons = [
  { icon: Code, label: "Python" },
  { icon: Database, label: "Pandas" },
  { icon: Brain, label: "ML" },
  { icon: GitBranch, label: "Git" },
  { icon: FileText, label: "Jupyter" },
  { icon: Zap, label: "AI" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Cpu, label: "Computing" }
];

const codeSnippets = [
  "df.predict()",
  "model.fit()",
  "import pandas",
  "X_train, y_test",
  "np.array(data)"
];

const InteractiveCircle = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Rotate through tech icons
  useEffect(() => {
    if (!isHovered) {
      const iconInterval = setInterval(() => {
        setCurrentIconIndex((prev) => (prev + 1) % techIcons.length);
      }, 2000);
      return () => clearInterval(iconInterval);
    }
  }, [isHovered]);

  // Rotate through code snippets when hovered
  useEffect(() => {
    if (isHovered) {
      const snippetInterval = setInterval(() => {
        setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
      }, 1500);
      return () => clearInterval(snippetInterval);
    }
  }, [isHovered]);

  const CurrentIcon = techIcons[currentIconIndex].icon;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={isHovered ? "Code snippet preview" : `Tech stack: ${techIcons[currentIconIndex].label}`}
    >
      {/* Tech Icons Display */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-500",
        isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
      )}>
        <CurrentIcon 
          size={32} 
          className="text-primary-foreground animate-fade-in" 
        />
      </div>

      {/* Code Snippet Display */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-500",
        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
      )}>
        <code className="font-mono text-xs text-primary-foreground leading-tight text-center px-1">
          {codeSnippets[currentSnippetIndex]}
        </code>
      </div>
    </div>
  );
};

export default InteractiveCircle;