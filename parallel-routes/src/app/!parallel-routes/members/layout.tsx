import Comments from "@/src/components/Comments";
import Members from "@/src/components/Members";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>{children}</h1>

      <div className="flex">
        <Members />
        <Comments />
      </div>
    </div>
  );
}
