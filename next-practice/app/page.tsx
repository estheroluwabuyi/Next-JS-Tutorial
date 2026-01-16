import Image from "next/image";
import woman from "../public/woman.jpg";
import Projects from "./projects/page";

export default async function Home() {
  // if (2 < 5) {
  //   throw new Error("Error in Home Page");
  // }

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content Loading...");
    }, 2000),
  );

  return (
    <div className="bg-green-800 min-h-[1000px] text-[3rem]">
      <Projects />
      {/* optimized image loading..even reduces the size of the image */}
      {/* <Image src={woman} alt="Woman" /> */}
      <Image
        src="https://images.unsplash.com/vector-1745158852219-2c46b8db2358?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={400}
        height={400}
        alt="woman"
      />

      {/* Does not optimize image loading...sometimes, it even increases the size of the image */}
      {/* <img src="/woman.jpg" alt="Woman" />  */}
    </div>
  );
}
