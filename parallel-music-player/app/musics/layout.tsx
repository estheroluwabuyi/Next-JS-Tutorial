interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  songs: React.ReactNode;
  player: React.ReactNode;
}

export default function MusicLayout({
  children,
  sidebar,
  songs,
  player,
}: LayoutProps) {
  return (
    <div className="flex">
      {sidebar}

      <div className="h-screen overflow-y-auto flex-1 p-6 bg-[#2A2929]/95">
        {songs}
        {player}
      </div>
      {children}
    </div>
  );
}
