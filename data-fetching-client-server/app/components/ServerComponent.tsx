interface User {
  id: number;
  name: string;
  email: string;
}

export default async function ServerComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();

  return (
    <div className="p-4">
      <h1 className="text-[3rem] font-bold mb-4">User List</h1>
      {data.map((user) => (
        <div key={user.id} className="mb-4">
          <h2 className="font-semibold">User: {user.name}</h2>
          <p className="text-sm text-gray-400">Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
