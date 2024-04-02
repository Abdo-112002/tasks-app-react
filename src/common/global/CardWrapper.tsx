import React from "react";
import { ReactNode } from "react";

interface ComponentProps {
    headerLabel: string;
    children: ReactNode;
}

const CardWrapper: React.FC<ComponentProps> = ({ headerLabel, children }) => {
    return (
        <div className="flex w-full flex-col gap-y-5 rounded-lg bg-white px-8 py-10 shadow md:w-[450px]">
            <div className="border-secondary-200 flex flex-col gap-2 border-b pb-4 text-center">
                <h1 className="text-xl font-bold md:text-4xl">
                    {headerLabel}
                </h1>
                <p className="text-secondary-500">Hello Get Back</p>
            </div>
            {children}
        </div>
    );
};

export default CardWrapper;
