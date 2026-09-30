import React from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";

interface TechnologyCardProps {
    tech: ITechnologyTypes;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
    const getBadgeStyle = (badge?: string) => {
        switch (badge?.toLowerCase()) {
            case "popular":
                return "bg-[#E0F2FE] text-[#0284C7]";
            case "versatile":
                return "bg-[#DCFCE7] text-[#16A34A]";
            case "fast":
                return "bg-[#FFEDD5] text-[#EA580C]";
            case "standard":
                return "bg-[#DCFCE7] text-[#16A34A]";
            case "top sql":
                return "bg-[#E0F2FE] text-[#0284C7]";
            default:
                return "bg-slate-100 text-slate-600";
        }
    };

    return (
        <div className="bg-white rounded-3xl p-7 border border-slate-200 flex flex-col justify-between min-h-[300px] width-[250px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] ">
            <div>
                <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 flex items-center justify-center">
                        {tech.icon ? (
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                        ) : (
                            <div className="w-10 h-10 bg-slate-100 rounded-full" />
                        )}
                    </div>
                    {tech.badge && (
                        <span
                            className={`text-xs px-3.5 py-1.5 rounded-full font-medium ${getBadgeStyle(tech.badge)}`}
                            style={
                                tech.badgeBgColor && tech.badgeTextColor
                                    ? { backgroundColor: tech.badgeBgColor, color: tech.badgeTextColor }
                                    : {}
                            }
                        >
                            {tech.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{tech.name}</h3>

                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                    {tech.description}
                </p>
            </div>

            <div>
                <div className="flex items-center gap-3 text-xs mb-5">
                    {tech.category && (
                        <span className="bg-[#F1F5F9] text-[#475569] font-medium px-3 py-1.5 rounded-md">
                            {tech.category}
                        </span>
                    )}

                    {tech.difficulty && (
                        <span className="text-[#64748B] font-medium px-1">
                            {tech.difficulty}
                        </span>
                    )}

                    {tech.rating && (
                        <div className="flex items-center gap-1.5 ml-auto font-semibold text-[#0F172A]">
                            <span className="text-amber-400 text-sm">★</span>
                            <span>{tech.rating}</span>
                        </div>
                    )}
                </div>

                <button className="w-full bg-[#0F172A] hover:bg-black text-white font-medium py-2 px-3 rounded-xl transition-colors text-sm">
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;