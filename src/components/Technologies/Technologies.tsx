import { use, useState } from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";
import TechnologyCard from "./TechnologiesCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface ITechnologiesTypesProps {
    technologiesPromise: Promise<ITechnologyTypes[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesTypesProps) => {
    const allTechnologies = use(technologiesPromise);
    const [selectedStack, setSelectedStack] = useState<ITechnologyTypes[]>([]);

    const handleAddToStack = (tech: ITechnologyTypes) => {
        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
            toast.success(`${tech.name} is added to your stack!`);
        } else {
            toast.warn(`${tech.name} is already added to your stack!`);
        }
    };

    const handleRemoveFromStack = (id: string | number) => {
        const removedItem = selectedStack.find((item) => item.id === id);
        setSelectedStack(selectedStack.filter((item) => item.id !== id));

        if (removedItem) {
            toast.info(`${removedItem.name} removed from your stack.`)
        }
    };

    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.error(`All technologies removed from your stack.`)
    };

    return (
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="mt-12">
                <div className="w-12 h-1 rounded-full mb-6"></div>

                <h2 className="font-extrabold text-4xl text-[#0F172A]">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>

                <p className="text-[#64748B] pt-3 pb-6 text-base border-b border-slate-100 mb-8">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {allTechnologies?.map((tech) => (
                        <TechnologyCard
                            key={tech.id}
                            tech={tech}
                            isAdded={selectedStack.some((item) => item.id === tech.id)}
                            onAddToStack={handleAddToStack}
                        />
                    ))}
                </div>

                <YourStack
                    selectedStack={selectedStack}
                    onRemoveFromStack={handleRemoveFromStack}
                    onRemoveAll={handleRemoveAll}
                />
            </div>
        </div>
    );
};

export default Technologies;