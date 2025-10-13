import { motion, useReducedMotion } from "framer-motion";

interface DiagramProps {
  type: "ai-human" | "data-filter" | "tone-model" | "pipeline" | "intake" | "trusted-sending" | "lead-locator" | "launch-learn";
  className?: string;
}

export const Diagram = ({ type, className = "" }: DiagramProps) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = "w-full rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]";
  
  const containerVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  switch (type) {
    case "ai-human":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 800 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-ai-human" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <rect width="800" height="200" fill="url(#grad-ai-human)" rx="16"/>
            
            {/* AI Lane */}
            <text x="40" y="50" className="text-sm font-semibold fill-[hsl(var(--graphite))]">AI</text>
            <rect x="100" y="35" width="120" height="30" rx="8" fill="white" stroke="#f9904a" strokeWidth="2"/>
            <text x="160" y="55" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Draft</text>
            
            {/* Human Lane */}
            <text x="40" y="150" className="text-sm font-semibold fill-[hsl(var(--graphite))]">Human</text>
            <rect x="100" y="135" width="120" height="30" rx="8" fill="white" stroke="#5B9BF3" strokeWidth="2"/>
            <text x="160" y="155" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Review</text>
            
            {/* Curved arrows between lanes */}
            <path d="M 220 50 Q 280 90, 340 50" stroke="#f9904a" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
            <path d="M 340 150 Q 400 110, 460 150" stroke="#5B9BF3" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)"/>
            
            {/* Middle boxes */}
            <rect x="300" y="35" width="120" height="30" rx="8" fill="white" stroke="#f9904a" strokeWidth="2"/>
            <text x="360" y="55" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Personalize</text>
            
            <rect x="300" y="135" width="120" height="30" rx="8" fill="white" stroke="#5B9BF3" strokeWidth="2"/>
            <text x="360" y="155" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Refine</text>
            
            {/* End node */}
            <circle cx="580" cy="100" r="50" fill="white" stroke="#f9904a" strokeWidth="3"/>
            <text x="580" y="95" textAnchor="middle" className="text-xs font-semibold fill-[hsl(var(--graphite))]">Real</text>
            <text x="580" y="110" textAnchor="middle" className="text-xs font-semibold fill-[hsl(var(--graphite))]">Conversation</text>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#f9904a" />
              </marker>
              <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#5B9BF3" />
              </marker>
            </defs>
          </svg>
        </motion.div>
      );

    case "data-filter":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 800 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-filter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <rect width="800" height="240" fill="url(#grad-filter)" rx="16"/>
            
            {/* Funnel shape with layers */}
            <path d="M 150 40 L 650 40 L 550 120 L 250 120 Z" fill="#f9904a" opacity="0.2"/>
            <path d="M 250 120 L 550 120 L 480 180 L 320 180 Z" fill="#f9904a" opacity="0.35"/>
            <path d="M 320 180 L 480 180 L 450 220 L 350 220 Z" fill="#5B9BF3" opacity="0.5"/>
            
            {/* Text labels */}
            <text x="400" y="30" textAnchor="middle" className="text-xs font-semibold fill-[hsl(var(--graphite))]">Millions of Records</text>
            <text x="400" y="110" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Verified Data</text>
            <text x="400" y="165" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Intent Signals</text>
            <text x="400" y="235" textAnchor="middle" className="text-xs font-semibold fill-[hsl(var(--graphite))]">Motivated Prospects</text>
          </svg>
        </motion.div>
      );

    case "tone-model":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 800 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-tone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.4 }} />
              </linearGradient>
              <radialGradient id="glow-tone" cx="50%" cy="50%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#f9904a", stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            <rect width="800" height="200" fill="url(#grad-tone)" rx="16"/>
            
            {/* Center glow */}
            <circle cx="250" cy="100" r="60" fill="url(#glow-tone)"/>
            
            {/* Waveform rings */}
            <circle cx="250" cy="100" r="30" fill="none" stroke="#f9904a" strokeWidth="3"/>
            <circle cx="250" cy="100" r="45" fill="none" stroke="#f9904a" strokeWidth="2" opacity="0.6"/>
            <circle cx="250" cy="100" r="60" fill="none" stroke="#10172A" strokeWidth="1.5" opacity="0.3"/>
            
            {/* Morphing arrow */}
            <path d="M 320 100 L 400 100" stroke="#f9904a" strokeWidth="2" markerEnd="url(#arrow-tone)"/>
            
            {/* Text bubbles */}
            <rect x="420" y="50" width="320" height="35" rx="18" fill="white" stroke="#5B9BF3" strokeWidth="2"/>
            <text x="580" y="72" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Your voice, modeled with AI warmth</text>
            
            <rect x="450" y="115" width="280" height="35" rx="18" fill="white" stroke="#5B9BF3" strokeWidth="2"/>
            <text x="590" y="137" textAnchor="middle" className="text-xs fill-[hsl(var(--graphite))]">Every message feels like you</text>
            
            <defs>
              <marker id="arrow-tone" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#f9904a" />
              </marker>
            </defs>
          </svg>
        </motion.div>
      );

    case "pipeline":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 800 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-pipeline" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.4 }} />
              </linearGradient>
              <linearGradient id="progress-bar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: "#5B9BF3", stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <rect width="800" height="200" fill="url(#grad-pipeline)" rx="16"/>
            
            {/* Progress bar */}
            <rect x="80" y="140" width="640" height="8" rx="4" fill="#E9F0FF" opacity="0.3"/>
            <rect x="80" y="140" width="480" height="8" rx="4" fill="url(#progress-bar)"/>
            
            {/* Pipeline stages */}
            {[
              { x: 120, label: "Lead", active: true },
              { x: 280, label: "Message", active: true },
              { x: 440, label: "Reply", active: true },
              { x: 600, label: "Meeting", active: false }
            ].map((stage, i) => (
              <g key={i}>
                <circle 
                  cx={stage.x} 
                  cy={100} 
                  r="35" 
                  fill={stage.active ? "white" : "#f5f5f5"} 
                  stroke={stage.active ? "#f9904a" : "#ccc"} 
                  strokeWidth="3"
                />
                <text 
                  x={stage.x} 
                  y="105" 
                  textAnchor="middle" 
                  className="text-sm font-semibold fill-[hsl(var(--graphite))]"
                >
                  {stage.label}
                </text>
                {i < 3 && (
                  <path 
                    d={`M ${stage.x + 40} 100 L ${stage.x + 100} 100`} 
                    stroke={stage.active ? "#f9904a" : "#ccc"} 
                    strokeWidth="2" 
                    markerEnd={`url(#arrow-pipe-${i})`}
                  />
                )}
              </g>
            ))}
            
            <defs>
              {[0, 1, 2].map(i => (
                <marker key={i} id={`arrow-pipe-${i}`} markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill={i < 2 ? "#f9904a" : "#ccc"} />
                </marker>
              ))}
            </defs>
          </svg>
        </motion.div>
      );

    case "intake":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow-intake" cx="50%" cy="50%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: "#f9904a", stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            <rect width="400" height="180" fill="url(#glow-intake)" rx="16"/>
            
            {/* Laptop silhouette */}
            <rect x="80" y="50" width="160" height="90" rx="4" fill="white" stroke="#f9904a" strokeWidth="2"/>
            <rect x="60" y="140" width="200" height="8" rx="2" fill="#f9904a"/>
            
            {/* Text wave entering mic */}
            <path d="M 250 80 Q 280 80, 290 90" stroke="#5B9BF3" strokeWidth="2" fill="none" opacity="0.7"/>
            <path d="M 250 95 Q 280 95, 290 90" stroke="#5B9BF3" strokeWidth="2" fill="none" opacity="0.7"/>
            
            {/* Mic symbol */}
            <circle cx="310" cy="90" r="15" fill="white" stroke="#f9904a" strokeWidth="2"/>
            <rect x="305" y="105" width="10" height="12" rx="2" fill="#f9904a"/>
            
            <text x="200" y="165" textAnchor="middle" className="text-xs font-medium fill-[hsl(var(--graphite))]">
              We learn your messaging style
            </text>
          </svg>
        </motion.div>
      );

    case "trusted-sending":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-sending" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <rect width="400" height="180" fill="url(#grad-sending)" rx="16"/>
            
            {/* Shield */}
            <path d="M 200 40 L 160 60 L 160 100 Q 160 130, 200 140 Q 240 130, 240 100 L 240 60 Z" 
                  fill="white" stroke="#5B9BF3" strokeWidth="3"/>
            
            {/* Envelope cluster inside shield */}
            <rect x="180" y="75" width="20" height="15" rx="2" fill="#f9904a" opacity="0.7"/>
            <rect x="185" y="80" width="20" height="15" rx="2" fill="#f9904a" opacity="0.8"/>
            <rect x="190" y="85" width="20" height="15" rx="2" fill="#f9904a"/>
            
            {/* Rotating arrows */}
            <circle cx="200" cy="90" r="50" fill="none" stroke="#f9904a" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
            
            <text x="200" y="165" textAnchor="middle" className="text-xs font-medium fill-[hsl(var(--graphite))]">
              Domains + inboxes protected
            </text>
          </svg>
        </motion.div>
      );

    case "lead-locator":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-locator" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.3 }} />
              </linearGradient>
              <radialGradient id="center-glow" cx="50%" cy="50%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "#f9904a", stopOpacity: 0.2 }} />
              </radialGradient>
            </defs>
            <rect width="400" height="180" fill="url(#grad-locator)" rx="16"/>
            
            {/* Central amber node */}
            <circle cx="200" cy="90" r="20" fill="url(#center-glow)"/>
            <circle cx="200" cy="90" r="12" fill="#f9904a"/>
            
            {/* Network dots connecting to center */}
            {[
              { x: 120, y: 50 }, { x: 160, y: 40 }, { x: 240, y: 40 }, { x: 280, y: 50 },
              { x: 100, y: 90 }, { x: 300, y: 90 },
              { x: 120, y: 130 }, { x: 160, y: 140 }, { x: 240, y: 140 }, { x: 280, y: 130 }
            ].map((dot, i) => (
              <g key={i}>
                <line x1={dot.x} y1={dot.y} x2="200" y2="90" stroke="#5B9BF3" strokeWidth="1" opacity="0.3"/>
                <circle cx={dot.x} cy={dot.y} r="5" fill="white" stroke="#5B9BF3" strokeWidth="2"/>
              </g>
            ))}
            
            <text x="200" y="165" textAnchor="middle" className="text-xs font-medium fill-[hsl(var(--graphite))]">
              Precision targeting with verified data
            </text>
          </svg>
        </motion.div>
      );

    case "launch-learn":
      return (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className={`${baseClasses} ${className}`}
        >
          <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-launch" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f9904a", stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: "#E9F0FF", stopOpacity: 0.3 }} />
              </linearGradient>
              <linearGradient id="trail-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#5B9BF3", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "#f9904a", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <rect width="400" height="180" fill="url(#grad-launch)" rx="16"/>
            
            {/* Graph lines */}
            <path d="M 60 120 L 100 110 L 140 105 L 180 95 L 220 85 L 260 75 L 300 60 L 340 50" 
                  stroke="#5B9BF3" strokeWidth="2" fill="none" opacity="0.5"/>
            
            {/* Trailing gradient bar */}
            <rect x="200" y="65" width="140" height="40" fill="url(#trail-grad)" opacity="0.3" rx="4"/>
            
            {/* Rocket outline */}
            <path d="M 300 70 L 320 50 L 340 70 L 330 70 L 330 90 L 310 90 L 310 70 Z" 
                  fill="white" stroke="#f9904a" strokeWidth="2"/>
            <circle cx="320" cy="65" r="4" fill="#f9904a"/>
            
            {/* Flame */}
            <path d="M 315 90 L 320 100 L 325 90" fill="#f9904a" opacity="0.6"/>
            
            <text x="200" y="165" textAnchor="middle" className="text-xs font-medium fill-[hsl(var(--graphite))]">
              Continuous optimization
            </text>
          </svg>
        </motion.div>
      );

    default:
      return null;
  }
};
