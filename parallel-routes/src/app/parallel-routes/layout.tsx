interface LayoutProps {
  children: React.ReactNode;
  comments: React.ReactNode;
  members: React.ReactNode;
}

export default function layout({ children, comments, members }: LayoutProps) {
  return (
    <div>
      <h1>{children}</h1>

      <div className="flex">
        {comments}
        {members}
      </div>
    </div>
  );
}
