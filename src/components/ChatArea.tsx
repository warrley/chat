import { ChatStruct } from "./ChatStruct";
import { useMsgStore } from "./store/store-message";

export const ChatArea = () => {
    const { messages } = useMsgStore();
    return (
        <div className="flex flex-col gap-6">
            <div className={`max-h-96 min-h-60 border transition-all duration-100 rounded-lg border-gray-300 p-3 flex flex-col backdrop-blur-md overflow-y-scroll scrollbar-none`}>
                {messages.map((item, index) => (
                    item.sender == "user" ? 
                    <div className="flex justify-end" key={index}>
                        <div className="border border-gray-300 bg-white/50 rounded-sm p-2 max-w-36 md:max-w-80 overflow-hidden mb-1 items-end" >
                            {item.text}
                        </div> 
                    </div> :
                    <div className="flex justify-start" key={index}>
                        <div className=" border border-gray-300 bg-sky-800/50 rounded-sm p-2 max-w-52 overflow-hidden mb-1 flex" >
                            {item.text}
                        </div>   
                    </div>
                ))}
            </div>
            <ChatStruct/>
        </div>
    )
}