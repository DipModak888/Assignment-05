import React from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";

interface TechnologyCardProps {
    tech: ITechnologyTypes;
    isAdded: boolean;
    onAddToStack: (tech: ITechnologyTypes) => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, isAdded, onAddToStack }) => {
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
        <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                        {tech.icon ? (
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                        ) : (
                            <div className="w-10 h-10 bg-slate-100 rounded-full" />
                        )}
                    </div>
                    {tech.badge && (
                        <span
                            className={`text-xs px-3.5 py-[6px] rounded-full font-medium ${getBadgeStyle(tech.badge)}`}
                            style={
                                tech.badgeBgColor && tech.badgeTextColor
                                    ? { backgroundColor: tech.badgeBgColor, color: tech.badgeTextColor }
                                    : {}
                            }>
                            {tech.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-[20px] font-bold text-slate-950 mb-2">{tech.name}</h3>

                <p className="text-[#64748B] text-[11px] leading-relaxed mb-4">
                    {tech.description}
                </p>
                <hr className="text-slate-200 mb-2" />
            </div>

            <div>
                <div className="flex items-center gap-3 text-xs mb-5">
                    {tech.category && (
                        <span className="bg-[#F1F5F9] text-[#475569] font-medium px-2 py-0.5 text-[10px] rounded-md whitespace-nowrap">
                            {tech.category}
                        </span>
                    )}

                    {tech.difficulty && (
                        <span className="whitespace-nowrap taxt-xs text-[11px] text-slate-600 px-2 py-0.5 rounded-md ">
                            {tech.difficulty}
                        </span>
                    )}

                    {tech.rating && (
                        <div className="flex items-center gap-1 ml-auto font-semibold text-[#0F172A] whitespace-nowrap">
                            <span className="text-amber-400 text-sm">★</span>
                            <span>{tech.rating}</span>
                        </div>
                    )}
                </div>

                <button
                    disabled={isAdded}
                    onClick={() => onAddToStack(tech)}
                    className={`w-full bg-[#0F172A] font-medium py-2 px-3 rounded-xl transition-colors text-sm ${isAdded
                        ? "bg-slate-50 text-slate-400 text-[12px] cursor-not-allowed border  border-slate-200"
                        : "bg-[#0F172A] text-white  hover:bg-black"
                        }`}>
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;