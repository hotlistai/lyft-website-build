import { Search, Star, Archive, Trash2, MoreVertical, Reply, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const emails = [
  {
    id: 1,
    sender: "Sarah Mitchell",
    subject: "Re: Roof inspection - Yes, interested!",
    preview: "Hi John, thanks for reaching out. We've been looking for someone local to inspect our roof before winter. Would next Tuesday work?",
    time: "2m ago",
    unread: true,
    starred: false,
  },
  {
    id: 2,
    sender: "Mike Rodriguez",
    subject: "Re: HVAC replacement quote",
    preview: "Perfect timing! Our current unit is 15 years old and struggling. Can you come by this week to take a look?",
    time: "8m ago",
    unread: true,
    starred: true,
  },
  {
    id: 3,
    sender: "Jennifer Lee",
    subject: "Re: Solar panel consultation",
    preview: "Appreciate the detailed info. We're definitely interested in getting estimates. How soon can you schedule a visit?",
    time: "15m ago",
    unread: true,
    starred: false,
  },
  {
    id: 4,
    sender: "David Thompson",
    subject: "Re: Kitchen remodel ideas",
    preview: "Love the portfolio you sent over! The craftsmanship looks excellent. Can you swing by next week to discuss our project?",
    time: "22m ago",
    unread: false,
    starred: false,
  },
  {
    id: 5,
    sender: "Amanda Chen",
    subject: "Re: Expansion project timeline",
    preview: "This is exactly what we need. Let's talk specifics about the timeline and get this moving forward.",
    time: "35m ago",
    unread: false,
    starred: true,
  },
];

export const InteractiveEmailClient = () => {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [hoveredEmail, setHoveredEmail] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [isClicking, setIsClicking] = useState(false);
  const [readEmails, setReadEmails] = useState<Set<number>>(new Set());

  useEffect(() => {
    let emailIndex = 0;
    let actionStep = 0;

    const animationSequence = setInterval(() => {
      // Sequence: hover -> click -> read -> next email
      if (actionStep === 0) {
        // Hover over email
        const targetEmail = emails[emailIndex];
        const emailPosition = 20 + emailIndex * 16;
        setCursorPosition({ x: 50, y: emailPosition });
        setHoveredEmail(targetEmail.id);
        actionStep = 1;
      } else if (actionStep === 1) {
        // Click email
        setIsClicking(true);
        setTimeout(() => setIsClicking(false), 200);
        const targetEmail = emails[emailIndex];
        setSelectedEmail(targetEmail.id);
        setReadEmails(prev => new Set([...prev, targetEmail.id]));
        actionStep = 2;
      } else if (actionStep === 2) {
        // Read email (pause)
        actionStep = 3;
      } else {
        // Move to next email
        setHoveredEmail(null);
        emailIndex = (emailIndex + 1) % emails.length;
        actionStep = 0;
      }
    }, 1800);

    return () => clearInterval(animationSequence);
  }, []);

  return (
    <div className="relative w-full">
      {/* Email Client Window */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl shadow-primary/10 border border-gray-200 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-primary/95 to-primary border-b border-primary-hover px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-white font-semibold text-sm ml-4">Inbox</span>
            <span className="text-white/70 text-xs">— 5 conversations</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-white/80" />
            <MoreVertical className="w-4 h-4 text-white/80" />
          </div>
        </div>

        {/* Email List */}
        <div className="grid grid-cols-5 h-[400px]">
          {/* Sidebar */}
          <div className="col-span-2 border-r border-gray-200 bg-white overflow-y-auto">
            <div className="p-3">
              {emails.map((email, index) => (
                <div
                  key={email.id}
                  className={`p-3 rounded-lg mb-2 transition-all duration-300 cursor-pointer ${
                    selectedEmail === email.id
                      ? "bg-primary/10 border-l-4 border-primary"
                      : hoveredEmail === email.id
                      ? "bg-gray-100 scale-[1.02]"
                      : readEmails.has(email.id)
                      ? "bg-white hover:bg-gray-50"
                      : "bg-blue-50 hover:bg-blue-100"
                  }`}
                  style={{
                    transform: hoveredEmail === email.id ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className={`text-sm font-semibold ${readEmails.has(email.id) ? "text-gray-700" : "text-gray-900"}`}>
                      {email.sender}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">{email.time}</span>
                      {email.starred && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                    </div>
                  </div>
                  <p className={`text-xs mb-1 ${readEmails.has(email.id) ? "text-gray-600" : "text-gray-900 font-medium"}`}>
                    {email.subject}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{email.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Content */}
          <div className="col-span-3 bg-white overflow-y-auto">
            {selectedEmail ? (
              <div className="p-6 animate-fade-in">
                {(() => {
                  const email = emails.find(e => e.id === selectedEmail);
                  return email ? (
                    <>
                      <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-200">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{email.subject}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">{email.sender}</span>
                            <span>•</span>
                            <span>{email.time}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Archive className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 leading-relaxed mb-6">
                        <p className="mb-4">{email.preview}</p>
                        <p className="mb-4">
                          I've been researching local contractors and your work really stands out. The timing couldn't be better for us.
                        </p>
                        <p>Looking forward to hearing from you soon!</p>
                        <p className="mt-4 text-gray-600">Best regards,<br />{email.sender.split(" ")[0]}</p>
                      </div>
                      <div className="flex gap-3 pt-4 border-t border-gray-200">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-200 font-medium text-sm">
                          <Reply className="w-4 h-4" />
                          Reply
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium text-sm">
                          <Clock className="w-4 h-4" />
                          Schedule
                        </button>
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <p className="text-sm font-medium">Select an email to read</p>
                  <p className="text-xs mt-1">5 new conversations waiting</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Activity Indicator */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-green-700">Live Activity</span>
              </div>
              <span className="text-xs text-green-600">Real conversations happening now</span>
            </div>
            <span className="text-xs font-semibold text-green-700">13 this week</span>
          </div>
        </div>
      </div>

      {/* Animated Cursor */}
      <div
        className="absolute w-6 h-6 pointer-events-none transition-all duration-700 ease-out z-50"
        style={{
          left: `${cursorPosition.x}%`,
          top: `${cursorPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-200 ${isClicking ? "scale-90" : "scale-100"}`}
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isClicking && (
          <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
        )}
      </div>
    </div>
  );
};
