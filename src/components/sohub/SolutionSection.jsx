import { Globe, Cloud, Wifi } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: Globe,
      title: "Borderless",
      description:
        "One system. One identity. Across cities, countries, continents.",
    },
    {
      icon: Cloud,
      title: "Cloud-native",
      description:
        "No buildings. No physical limits. Your PBX lives where your customers are.",
    },
    {
      icon: Wifi,
      title: "Internet-first",
      description:
        "Built for the modern web. No PSTN. No telecom operator dependency.",
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-white dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-[#DCFCE7] dark:bg-[#22C55E]/20 border border-[#22C55E] rounded-full px-4 py-2">
            <Globe size={14} className="text-[#16A34A] dark:text-[#22C55E]" />
            <span className="font-inter font-semibold text-xs text-[#16A34A] dark:text-[#22C55E]">
              Our Breakthrough
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-plus-jakarta-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#111111] dark:text-white leading-tight text-center mb-6">
          What If PBX Was <span className="text-[#22C55E]">Global?</span>
        </h2>

        {/* Sub-copy */}
        <p className="font-inter text-lg text-[#525252] dark:text-white dark:text-opacity-70 leading-relaxed text-center max-w-3xl mx-auto mb-16">
          Not inside a building. Not tied to a location. But available anywhere
          on the globe.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F0FDF4] to-white dark:from-[#1E1E1E] dark:to-[#1A1A1A] rounded-2xl p-8 border border-[#22C55E]/20 dark:border-[#22C55E]/30 hover:border-[#22C55E] dark:hover:border-[#22C55E] transition-all duration-300 hover:shadow-xl hover:shadow-[#22C55E]/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#22C55E] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="font-inter font-bold text-2xl text-[#111111] dark:text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-base text-[#525252] dark:text-white dark:text-opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="font-inter text-2xl text-[#111111] dark:text-white font-semibold">
            A PBX that lives where your customers already are.
          </p>
        </div>
      </div>
    </section>
  );
}
