import { log } from "console";

export default async function Project({
  params,
}: {
  params: { all: string[] };
}) {
  const { all } = await params;
  log(all);

  return (
    <div className="p-5">
      <h1> Project: {all}</h1>
      <br />
      <br />
      All Routes
      {all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
}
