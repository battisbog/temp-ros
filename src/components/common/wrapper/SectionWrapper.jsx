import { cn } from "../../../lib/utils";

function SectionWrapper({ children, className }) {
  return (
    <section className={cn("max-w-[1400px] mx-auto px-1", className)}>
      {children}
    </section>
  );
}

export default SectionWrapper;
