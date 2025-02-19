import { Send, SendHorizonal } from "lucide-react";
import { useMsgStore } from "./store/store-message";
import { useUserStore } from "./store/store-name";
import { Button } from "./ui/button";

export const ChatStruct = () => {
    const { name } = useUserStore();
    const { msg, setMsg, messages, setMessages, msgBot, setMsgBot } = useMsgStore();

    const handleNewMsg = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (msg.trim().length > 0) {
                setMessages("user", msg);
                setMsg('');
            }
            
        }
    }
    
    const handleNewMsgBot = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setMessages("bot", msgBot);
            setMsgBot('');
        }
    }

    const handleNewMsgClick = () => {
        if (msg.trim().length > 0) {
            setMessages("user", msg);
            setMsg('');
        }
    } 

    const handleNewMsgBotClick = () => {
        if (msgBot.trim().length > 0) {
            setMessages("bot", msgBot);
            setMsgBot('');
        }
    } 

    return (
        <div className="border border-gray-300 rounded-lg">
            <div className="backdrop-blur-md rounded-lg">
                <div className="border-b border-gray-300 flex">
                    <input className="bg-transparent text-md  w-full h-12 outline-none p-3 text-white placeholder-[white]" autoFocus onKeyDown={(e) => handleNewMsg(e)} value={msg} onChange={(e) => setMsg(e.target.value)} type="text" placeholder={`${name}, type a message`} />
                    <Button onClick={handleNewMsgClick} className="h-12 w-16 bg-sky-200/20"><Send/></Button>
                </div>
                <div className="flex">
                    <input className="bg-transparent w-full text-md h-12 outline-none p-3 text-white placeholder-[white]"  onKeyDown={(e) => handleNewMsgBot(e)} value={msgBot} onChange={(e) => setMsgBot(e.target.value)} type="text" placeholder={`m, type a message`} />
                    <Button onClick={handleNewMsgBotClick} className="h-12 w-16 bg-sky-200/20"><Send/></Button>
                </div>
            </div>
        </div>
    )
}