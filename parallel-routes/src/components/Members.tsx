export default async function Members() {
  await new Promise((resolve) =>
    setTimeout(() => resolve("Content is currently loading..."), 4000),
  );

  return <div className="border p-35 w-100">Members </div>;
}
