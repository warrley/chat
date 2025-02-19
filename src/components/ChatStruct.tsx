import { useMsgStore } from "./store/store-message";
import { useUserStore } from "./store/store-name";

export const ChatStruct = () => {
    const { name } = useUserStore();
    const { msg, setMsg, messages, setMessages, msgBot, setMsgBot } = useMsgStore();

    const handleNewMsg = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setMessages("user", msg);
            setMsg('');
        }
    }
    
    const handleNewMsgBot = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setMessages("bot", msgBot);
            setMsgBot('');
        }
    }

    return (
        <div className="border border-gray-300 rounded-lg">
            <div className="">
                <div className="border-b border-gray-300 ">
                    <input className="bg-transparent w-full h-12 outline-none p-3" autoFocus onKeyDown={(e) => handleNewMsg(e)} value={msg} onChange={(e) => setMsg(e.target.value)} type="text" placeholder={`${name}, type a message (and press enter)`} />
                </div>
                <div>
                    <input className="bg-transparent w-full h-12 outline-none p-3"  onKeyDown={(e) => handleNewMsgBot(e)} value={msgBot} onChange={(e) => setMsgBot(e.target.value)} type="text" placeholder={`m, type a message (and press enter)`} />
                </div>
            </div>
        </div>
    )
}