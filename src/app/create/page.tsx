import WishForm from "@/components/create/WishForm";
import Navbar from "@/components/layout/Navbar";
import BottomTab from "@/components/layout/BottomTab";

export default function CreatePage() {
  return (
    <div className="pb-24 min-h-screen bg-[#FAFAFB]">
      <Navbar />
      <WishForm />
      <BottomTab />
    </div>
  );
}
