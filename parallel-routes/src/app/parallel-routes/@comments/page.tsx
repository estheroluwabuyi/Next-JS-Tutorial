export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div className="border p-35 w-100">Comments </div>;
}
