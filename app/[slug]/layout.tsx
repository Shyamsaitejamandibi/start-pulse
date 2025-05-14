import { StatusProvider } from "@/context/StatusContext";

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <StatusProvider>{children}</StatusProvider>
    </div>
  );
}
