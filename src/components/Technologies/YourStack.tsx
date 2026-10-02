import React from "react";
import type { ITechnologyTypes } from "../types/technologiesTypes";

interface YourStackProps {
    selectedStack: ITechnologyTypes[];
    onRemoveFromStack: (id: string | number) => void;
    onRemoveAll: () => void;
}

const YourStack: React.FC<YourStackProps> = ({
    selectedStack,
    onRemoveFromStack,
    onRemoveAll,
}) => {
    return (
        <div className="col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow sticky top-24">
            <div className="flex flex-col items-start gap-1 mb-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Your Stack</h3>
                <span className="text-xs text-slate-400">
                    {selectedStack.length === 0
                        ? "No technology selected yet"
                        : `${selectedStack.length} Technology Selected`}
                </span>
            </div>
            {selectedStack.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm border-2 border-dashed border-slate-100 rounded-2xl">
                    Your stack is empty.
                </div>
            ) : (
                <div>
                    <div className="space-y-3 mb-4">
                        {selectedStack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-8 h-8 object-contain" />
                                    <div>
                                        <p className="font-semibold text-sm text-slate-800">
                                            {item.name}
                                        </p>
                                        <span className="text-xs text-slate-400">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemoveFromStack(item.id)}
                                    className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 w-7 h-7 rounded-full flex items-center justify-center transition-colors text-2xl">
                                    &times;
                                </button>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={onRemoveAll}
                        className="w-full py-3 hover:bg-red-50 text-red-600 hover:text-red-600 text-xs font-semibold rounded-xl transition-all border border-red-200">
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default YourStack;