export default function CategoryStrip() {
  const categories = [
    { name: "SPORTS 4K", color: "bg-blue-500" },
    { name: "CINEMA & VOD", color: "bg-purple-500" },
    { name: "NEWS LIVE", color: "bg-cyan-500" },
    { name: "DOCUMENTARIES", color: "bg-blue-400" },
    { name: "KIDS & FAMILY", color: "bg-purple-400" },
    { name: "MUSIC CHANNELS", color: "bg-cyan-400" },
    { name: "INTERNATIONAL TV", color: "bg-blue-600" },
    { name: "LIFESTYLE", color: "bg-purple-600" },
    { name: "PPV EVENTS", color: "bg-red-500" },
  ];

  return (
    <section className="w-full py-8 border-y border-white/[0.06] bg-[#080B14]/60">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-[#8E99AA] hover:text-white transition-all cursor-pointer whitespace-nowrap shrink-0 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.025)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <span className={`w-2 h-2 rounded-full ${cat.color}`} />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
