import ClientTodoComponent from "./client-data-fetching/page";
import ServerComponentPage from "./server-data-fetching/page";

export default function Home() {
  return (
    <div>
      <ClientTodoComponent />
      <ServerComponentPage />
    </div>
  );
}
