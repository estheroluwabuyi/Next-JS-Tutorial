interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  songs: React.ReactNode;
}

export default function MusicLayout({ children, sidebar, songs }: LayoutProps) {
  return (
    <div className="flex">
      {sidebar}

      <div className="flex-1 p-6">{songs}</div>
      {children}
    </div>
  );
}
