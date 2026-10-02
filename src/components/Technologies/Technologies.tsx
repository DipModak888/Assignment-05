import { use, useState } from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";
import TechnologyCard from "./TechnologiesCard";
import YourStack from "./YourStack";

interface ITechnologiesTypesProps {
    technologiesPromise: Promise<ITechnologyTypes[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesTypesProps) => {
    const allTechnologies = use(technologiesPromise);
    const [selectedStack, setSelectedStack] = useState<ITechnologyTypes[]>([]);

    const handleAddToStack = (tech: ITechnologyTypes) => {
        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
        }
    };

    const handleRemoveFromStack = (id: string | number) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
    };

    const handleRemoveAll = () => {
        setSelectedStack([]);
    };

    return (
        <div className="container mx-auto px-4 max-w-7xl">
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