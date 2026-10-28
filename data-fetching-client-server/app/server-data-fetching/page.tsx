import { Suspense } from "react";
import ServerComponent from "../components/ServerComponent";

export default function page() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <ServerComponent />
    </Suspense>
  );
}
