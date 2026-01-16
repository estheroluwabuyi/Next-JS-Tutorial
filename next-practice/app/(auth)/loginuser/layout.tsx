import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-yellow-700 h-8 w-[80%] fixed top-0">{children}</div>
  );
}
