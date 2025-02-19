"use client";

import { ChatArea } from "./ChatArea";
import { FormInputs } from "./FormInputs";
import { useUserStore } from "./store/store-name";

export const Hero = () => {
  const { name } = useUserStore();

  return (
    <div className="flex flex-col gap-2 w-3/5">
      {name.trim() ? (
        <ChatArea/> ) : (
        <div className="backdrop-blur-lg rounded-lg">
            <p className="text-lg text-center mb-3">What's your name?</p>
            <FormInputs />
        </div> 
      )}
    </div>
  );
};
