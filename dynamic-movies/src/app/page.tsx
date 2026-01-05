"use client";

import Link from "next/link";
import { movies, Movie } from "./data/movies";
import Image from "next/image";
import { FaComment, FaStar } from "react-icons/fa";

export default function Home() {
  const totalMovies = movies.length;
  const avgRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Ratings</p>
            <p className="text-4xl font-bold">{avgRating}</p>
          </div>
        </div>
      </div>

      {/* Movie List */}
      <h2 className="text-3xl font-semibold text-white">Movies List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {movies.map((movie: Movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Image
              width={200}
              height={200}
              className="w-full h-[300px] lg:h-[250px] rounded-[10px] mb-3"
              src={movie.poster}
              alt={movie.title}
            />
            <Link
              href="/movies"
              className="text-xl font-bold text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
            <p className="text-gray-400 text-sm mt-2">{movie.description}</p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <p>
                  <FaComment className="mr-1 text-red-400" />
                  <span>{movie.comments}</span>
                </p>
              </div>

              <div className="flex items-center text-sm text-gray-300">
                <p>
                  <FaStar className="mr-1 text-yellow-400" />
                  <span>{movie.rating}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
