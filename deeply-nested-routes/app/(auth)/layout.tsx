import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="bg-pink-700 h-8 w-full fixed top-0">{children}</div>;
}
