import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, Gift, Hash, Mic, Plus, Settings, Smile, Users } from "lucide-react"

export default function Component() {
  return (
    <div className="flex h-screen text-gray-100 bg-[#36393f]">
      {/* Server list */}
      <div className="w-[72px] bg-[#202225] p-3 flex flex-col items-center space-y-2">
        <Button className="rounded-full bg-[#5865F2] hover:bg-[#4752C4] h-12 w-12 transition-all duration-200 ease-in-out">
          <span className="sr-only">Home</span>
          <svg className="h-5 w-5 fill-current" height="24" width="24" viewBox="0 0 24 24">
            <path d="M3.58 21.196h14.259l-.681-2.205C18.101 18.44 20 16.518 20 14.248V5.744c0-1.217-.49-2.341-1.324-3.138-.834-.798-1.98-1.26-3.15-1.26H8.474c-1.17 0-2.316.462-3.15 1.26C4.49 3.403 4 4.527 4 5.744v8.504c0 2.27 1.899 4.192 2.842 4.743l-.681 2.205zM10.996 9.5l-1.143 1.31L13 14l4.286-4.29-1.143-1.31L13 11.357 10.996 9.5z" />
          </svg>
        </Button>
        <Separator className="h-0.5 w-8 bg-gray-700 rounded-full my-2" />
        <Button className="rounded-full bg-[#36393f] hover:bg-[#5865F2] h-12 w-12 transition-all duration-200 ease-in-out">
          <span className="sr-only">Server 1</span>
          <span className="text-xl font-bold">S1</span>
        </Button>
        <Button className="rounded-full bg-[#36393f] hover:bg-[#5865F2] h-12 w-12 transition-all duration-200 ease-in-out">
          <span className="sr-only">Server 2</span>
          <span className="text-xl font-bold">S2</span>
        </Button>
        <Button className="rounded-full bg-[#36393f] hover:bg-[#5865F2] h-12 w-12 transition-all duration-200 ease-in-out">
          <span className="sr-only">Server 3</span>
          <span className="text-xl font-bold">S3</span>
        </Button>
        <Button className="rounded-full bg-[#36393f] hover:bg-[#3ba55c] h-12 w-12 transition-all duration-200 ease-in-out mt-auto">
          <Plus className="h-6 w-6" />
          <span className="sr-only">Add Server</span>
        </Button>
      </div>

      {/* Channel list */}
      <div className="w-60 bg-[#2f3136] flex flex-col">
        <Button variant="ghost" className="p-4 font-semibold text-md h-12 justify-between hover:bg-[#34373C]">
          Discord Clone "Dreuiix"
          <ChevronDown className="h-5 w-5" />
        </Button>
        <ScrollArea className="flex-grow px-2">
          <div className="mt-4">
            <Button variant="ghost" className="w-full justify-between px-2 font-semibold text-xs text-gray-400 hover:text-gray-100">
              TEXT CHANNELS
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start px-2 py-1 text-gray-400 hover:text-gray-100 hover:bg-[#393C43]">
              <Hash className="mr-2 h-5 w-5" />
              general
            </Button>
            <Button variant="ghost" className="w-full justify-start px-2 py-1 text-gray-400 hover:text-gray-100 hover:bg-[#393C43]">
              <Hash className="mr-2 h-5 w-5" />
              random
            </Button>
          </div>
          <div className="mt-4">
            <Button variant="ghost" className="w-full justify-between px-2 font-semibold text-xs text-gray-400 hover:text-gray-100">
              VOICE CHANNELS
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start px-2 py-1 text-gray-400 hover:text-gray-100 hover:bg-[#393C43]">
              <Mic className="mr-2 h-5 w-5" />
              General
            </Button>
          </div>
        </ScrollArea>
        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="flex items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-[#5865F2] mr-2"></div>
            <div>
              <div className="font-semibold text-sm">Username</div>
              <div className="text-xs text-gray-400">#1234</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Mic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col bg-[#36393f]">
        <div className="px-4 h-12 flex items-center shadow-sm">
          <Hash className="mr-2 h-5 w-5 text-gray-400" />
          <h2 className="font-bold text-white">general</h2>
        </div>
        <ScrollArea className="flex-grow">
          <div className="p-4 space-y-6">
            {[
              { user: "User1", avatar: "bg-red-500", time: "Today at 11:30 AM", message: "Hey everyone! How's it going?" },
              { user: "User2", avatar: "bg-blue-500", time: "Today at 11:32 AM", message: "Hi User1! All good here, how about you?" },
              { user: "User3", avatar: "bg-green-500", time: "Today at 11:35 AM", message: "Hello folks! Just joined the server." },
              { user: "User1", avatar: "bg-red-500", time: "Today at 11:36 AM", message: "Welcome User3! Glad to have you here." },
              { user: "User2", avatar: "bg-blue-500", time: "Today at 11:38 AM", message: "Yeah, welcome! How did you find us?" },
              { user: "User3", avatar: "bg-green-500", time: "Today at 11:40 AM", message: "Thanks for the warm welcome! I heard about this community from a friend." },
            ].map((msg, index) => (
              <div key={index} className="flex items-start group">
                <div className={`w-10 h-10 rounded-full ${msg.avatar} mr-4 mt-0.5 flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="flex items-baseline">
                    <span className="font-semibold mr-2">{msg.user}</span>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <p className="text-gray-100">{msg.message}</p>
                </div>
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 bg-[#36393f]">
          <div className="relative">
            <Input placeholder="Message #general" className="bg-[#40444b] border-none pr-12" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Gift className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Member list */}
      <div className="w-60 bg-[#2f3136] p-3">
        <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase">Online — 3</h3>
        <div className="space-y-2">
          {["User1", "User2", "User3"].map((user, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full bg-${["red", "blue", "green"][index]}-500 mr-2`}></div>
              <span>{user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}