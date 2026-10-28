import ClientTodoComponent from "./client-data-fetching/page";
import ServerUserComponent from "./server-data-fetching/page";

export default function Home() {
  return (
    <div>
      <ClientTodoComponent />

      <ServerUserComponent />
    </div>
  );
}
