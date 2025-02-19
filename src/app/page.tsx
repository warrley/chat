import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="container mx-auto border border-gray-300 rounded-xl p-5 flex flex-col items-center gap-10 relative">
        <p className="text-3xl text-center">Simple Chat</p>
        <ThemeToggle/>
        <Hero/>
      </div>
    </div>
  )
}

export default Page;