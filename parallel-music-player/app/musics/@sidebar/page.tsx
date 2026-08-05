import { Clock, Home, TrendingUp } from "lucide-react";

export default async function Sidebar() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 500),
  );

  return (
    <aside className="w-64 bg-[#111111e5] text-white flx flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>

        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVOURITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <img
                src="https://images.unsplash.com/photo-1782178394534-63204f8b83a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                alt="imag"
                height={4}
                width={4}
                className="h-15 w-15 bg-gray-700 rounded-md"
              />

              <div>
                <p className="text-white">Random</p>
                <p className="text-sm text-gray-400">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
}
