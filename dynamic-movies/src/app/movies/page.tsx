import { movies, Movie } from "@/app/data/movies";
import Image from "next/image";
import Link from "next/link";

export default function MoviePage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {movies.map((movie: Movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Image
              width={200}
              height={200}
              className="w-full h-75 lg:h-62.5 rounded-[10px] mb-3"
              src={movie.poster}
              alt={movie.title}
            />
            <Link
              href={`/movies/${movie.id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
