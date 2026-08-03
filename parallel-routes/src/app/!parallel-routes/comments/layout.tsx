export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Comments</h1>
      {children}
    </div>
  );
}
