import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export default function Player() {
  return (
    <div className="fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between text-white">
      <div className="w-16 h-16 bg-gray-700 rounded-md">
        <img
          src="https://images.unsplash.com/photo-1782178394534-63204f8b83a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt="imag"
          height={4}
          width={4}
          className="h-15 w-15 bg-gray-700 rounded-md"
        />
      </div>
      <div className="flex items-center gap-6">
        <SkipBack
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />
        <Play
          size={24}
          className="cursor-pointer text-white transition-colors hover:text-gray-300"
        />

        <SkipForward
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />
      </div>
      <div className="flex items-center gap-4 text-gray-400">
        <span>2:21</span>
        <div className="relative w-64 bg-gray-700 rounded-md">
          <div
            className="absolute top-0 left-0 h-1 bg-white rounded-md"
            style={{ width: "50%" }}
          >
            <input
              type="range"
              min="0"
              max="100"
              className="absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer"
            />
          </div>
        </div>
        <span>3:11</span>
      </div>
    </div>
  );
}
