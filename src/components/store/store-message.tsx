import { create } from "zustand";

type Message = {
  sender: "user" | "bot";
  text: string;
};

type MsgState = {
  msg: string;
  msgBot: string;
  messages: Message[];
  setMsg: (msg: string) => void;
  setMsgBot: (msg: string) => void;
  setMessages: (sender: "user" | "bot", text: string) => void;
};

export const useMsgStore = create<MsgState>((set) => ({
  msg: "",
  msgBot: "",
  messages: [],
  setMsg: (msg) => set({ msg }),
  setMsgBot: (msgBot) => set({ msgBot }),
  setMessages: (sender, text) =>
    set((state) => ({
      messages: [...state.messages, { sender, text }],
    })),
}));
