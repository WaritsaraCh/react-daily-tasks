import { useEffect, useState } from "react";

function formatDateTime(date: Date) {
  return {
    date: date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
}

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const { date, time } = formatDateTime(now);

  return (
    <header className="w-full border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Daily Tasks</h1>
          <p className="text-sm text-gray-500">
            Organize your daily activities
          </p>
        </div>

        
        <div className="text-right">
          <p className="text-sm font-medium text-gray-700">{date}</p>
          <p className="text-lg font-mono text-gray-900">{time}</p>
        </div>
      </div>
    </header>
  );
}
