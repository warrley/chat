"use client";

import { ChatArea } from "./ChatArea";
import { FormInputs } from "./FormInputs";
import { useUserStore } from "./store/store-name";

export const Hero = () => {
  const { name } = useUserStore();

  return (
    <div className="flex flex-col gap-3 w-4/5">
      {name.trim() ? (
        <ChatArea/> ) : (
        <div className="backdrop-blur-lg rounded-lg py-4">
            <p className="text-xl md:text-2xl text-center mb-3">What's your name?</p>
            <FormInputs />
        </div> 
      )}
    </div>
  );
};
