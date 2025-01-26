import Footer from "@/components/shared/Footer";
import Navigationbar from "@/components/shared/Navigationbar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <main className={cn("bg-background text-foreground ")}>
      <Navigationbar />

      <section className="">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default PublicLayout;
