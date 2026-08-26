import { Clock, Heart } from "lucide-react";
import Link from "next/link";

const songs = [
  {
    id: 1,
    artist: "The Weeknd",
    title: "Blinding Lights",
    time: "3:20",
  },
  {
    id: 2,
    artist: "Billie Eilish",
    title: "Birds of a Feather",
    time: "3:31",
  },
  {
    id: 3,
    artist: "Ed Sheeran",
    title: "Perfect",
    time: "4:23",
  },
  {
    id: 4,
    artist: "Dua Lipa",
    title: "Levitating",
    time: "3:24",
  },
  {
    id: 5,
    artist: "Bruno Mars",
    title: "Locked Out of Heaven",
    time: "3:53",
  },
  {
    id: 6,
    artist: "Taylor Swift",
    title: "Cruel Summer",
    time: "2:58",
  },
  {
    id: 7,
    artist: "Ariana Grande",
    title: "we can't be friends (wait for your love)",
    time: "3:48",
  },
  {
    id: 8,
    artist: "Ariana Grande",
    title: "Into You",
    time: "4:04",
  },
  {
    id: 9,
    artist: "Olivia Rodrigo",
    title: "drivers license",
    time: "4:02",
  },
  {
    id: 10,
    artist: "Olivia Rodrigo",
    title: "vampire",
    time: "3:39",
  },
];

export default async function SongsList() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading.......");
    }, 700),
  );

  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text mt-8 font-bold mb-6 text-white">
        Songs Collection
      </h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
            <li className="flex items-center justify-between p-3 hover-bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
              <div className="flex items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1782178394534-63204f8b83a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                  alt="imag"
                  height={4}
                  width={4}
                  className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                />

                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
              </div>

              <div className="flex item-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>

                <Heart
                  size={16}
                  className="cursor-pointer hover:text-red-500"
                />
                <button className="text-lg font-bold cursor-pointer">I</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
