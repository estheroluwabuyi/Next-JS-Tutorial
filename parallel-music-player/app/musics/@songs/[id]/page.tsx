export default async function SongPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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

  const song = songs.find((song) => song.id === Number(id));

  return (
    <div className="text-white text-3xl">
      Song ID: {id} {song?.title}
    </div>
  );
}
