import { ChatStruct } from "./ChatStruct";
import { useMsgStore } from "./store/store-message";

export const ChatArea = () => {
    const { messages, } = useMsgStore();
    //  ${messages.sender ? "items-end" : "items-start"}
    return (
        <div>
            <div className={`min-h-96 border rounded-lg border-gray-300 p-3 flex flex-col`}>
                {messages.map((item, index) => (
                    item.sender == "user" ? 
                    
                    <div className="flex justify-end" key={index}>
                        <div className=" border border-gray-300 bg-zinc-800/50 rounded-sm p-2 max-w-36 overflow-hidden mb-1 items-end" >
                            {item.text}
                        </div> 
                    </div> :
                    <div className="flex justify-start" key={index}>
                        <div className=" border border-gray-300 bg-red-800/50 rounded-sm p-2 max-w-36 overflow-hidden mb-1 flex" >
                            {item.text}
                        </div>   
                    </div>
                ))}
                
            </div>
            <ChatStruct/>
        </div>
    )
}