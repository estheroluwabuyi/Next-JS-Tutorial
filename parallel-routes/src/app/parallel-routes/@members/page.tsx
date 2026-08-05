import Link from "next/link";

export default async function Members() {
  // if (2 < 5) {
  //   throw new Error("This is an error");
  // }

  return (
    <div className="border p-35 w-100">
      <h1>Members</h1>
      <Link href="/parallel-routes/salaries">Go to Salaries Page</Link>
    </div>
  );
}
