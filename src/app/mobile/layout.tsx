import MobileNavbar from "./components/MobileNavbar";
import MobileFooter from "./components/MobileFooter";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="pt-16 pb-20">{children}</main> {/* Adds bottom padding so footer doesn’t overlap */}
      <MobileFooter />
    </div>
  );
}

