export default async function User({ params }: { params: { user: string } }) {
  const { user } = await params;

  return (
    <div className="text-5xl">
      <h1>Info About {user}</h1>
    </div>
  );
}
