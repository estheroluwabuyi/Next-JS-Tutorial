import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white p-4 h-screen w-full flex flex-col items-center justify-center gap-4 bg-white/50">
      Hello World
      <Link
        href="/parallel-routes"
        className="text-gray-300 hover:underline border p-2 rounded-md"
      >
        Parallel Routes
      </Link>
    </div>
  );
}
