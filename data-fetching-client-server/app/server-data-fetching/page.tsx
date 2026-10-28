import { Suspense } from "react";
import ServerComponent from "../components/ServerComponent";

export default function ServerComponentPage() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ServerComponent />
    </Suspense>
  );
}
