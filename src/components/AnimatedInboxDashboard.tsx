import { Users } from "lucide-react";
import { useEffect, useState } from "react";

const emailMessages = [
  {
    subject: "Re: Roof inspection this week?",
    time: "2m ago",
    preview: '"Hey John, yeah, we\'re looking for estimates. Thanks for reaching out."',
  },
  {
    subject: "Re: Your solar question",
    time: "8m ago",
    preview: '"Appreciate the info. Can we schedule a quick call?"',
  },
  {
    subject: "Re: Expansion project",
    time: "15m ago",
    preview: '"This is exactly what we need. Let\'s talk specifics..."',
  },
  {
    subject: "Re: HVAC replacement quote",
    time: "22m ago",
    preview: '"Perfect timing! Our current unit is struggling..."',
  },
  {
    subject: "Re: Kitchen remodel ideas",
    time: "35m ago",
    preview: '"Love the portfolio you sent. Can you swing by next week?"',
  },
];

export const AnimatedInboxDashboard = () => {
  const [visibleEmails, setVisibleEmails] = useState([emailMessages[0], emailMessages[1], emailMessages[2]]);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate scrolling effect
      setScrollPosition((prev) => {
        const newPos = prev + 1;
        if (newPos > 100) {
          // Add new email at the top
          setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex % emailMessages.length;
            setVisibleEmails((prevEmails) => {
              const newEmails = [emailMessages[nextIndex], ...prevEmails.slice(0, 2)];
              return newEmails;
            });
            return nextIndex + 1;
          });
          return 0;
        }
        return newPos;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-border-light">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-dark">Live Conversations</p>
            <p className="text-xs text-text-muted">Campaign Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-green-600">Live</span>
        </div>
      </div>

      {/* Scrollable Email Container */}
      <div className="space-y-3 mb-6 overflow-hidden" style={{ height: '280px' }}>
        <div
          className="space-y-3 transition-transform duration-300 ease-linear"
          style={{ transform: `translateY(-${scrollPosition}px)` }}
        >
          {visibleEmails.map((email, index) => (
            <div
              key={`${email.subject}-${index}`}
              className="bg-white rounded-xl p-4 border border-border-light hover:shadow-md transition-all animate-fade-in"
              style={{
                opacity: index === 0 ? 1 : index === 1 ? 0.9 : 0.8,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm font-semibold text-text-dark">{email.subject}</p>
                <span className="text-xs text-text-muted whitespace-nowrap ml-2">{email.time}</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">{email.preview}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-bg-alt rounded-2xl p-4 border border-border-light">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-text-dark">13</p>
            <p className="text-sm text-text-muted">real conversations this week</p>
          </div>
        </div>
      </div>
    </div>
  );
};
