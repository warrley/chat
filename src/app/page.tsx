import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="dark:bg-[url(/images/dark.jpg)] bg-[url(/images/light.jpg)] bg-cover bg-bottom container mx-auto border border-gray-300 rounded-xl p-5 flex flex-col items-center gap-10 relative">
        <p className="text-4xl rounded-lg text-center backdrop-blur-sm py-2 px-3 text-white">Chat</p>
        <ThemeToggle/>
        <Hero/>
      </div>
    </div>
  )
}

export default Page;