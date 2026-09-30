import { use } from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";
import TechnologyCard from "./TechnologiesCard";


interface ITechnologiesTypesProps {
    technologiesPromise: Promise<ITechnologyTypes[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesTypesProps) => {
    const allTechnologies = use(technologiesPromise);

    return (
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="mt-12"> <div className="w-12 h-1 rounded-full mb-6"></div>

                <h2 className="font-extrabold text-4xl text-[#0F172A]">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="text-[#64748B] pt-3 pb-6 text-base border-b border-slate-100 mb-8">
                    Pick one technology per category to build your ideal stack.
                </p>

                <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {allTechnologies?.map((tech, index) => (
                            <TechnologyCard key={tech.id || index} tech={tech} />
                        ))}
                    </div>

                    <div className="col-span-4 bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sticky top-6 min-h-[260px]">
                        <h3 className="text-xl font-bold text-[#0F172A]">Your Stack</h3>
                        <p className="text-xs text-[#94A3B8] mt-1 mb-8">No technologies selected yet.</p>

                        <div className="border border-dashed border-slate-200 rounded-2xl py-12 flex items-center justify-center">
                            <span className="text-[#94A3B8] text-sm font-medium">
                                Your stack is empty.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;