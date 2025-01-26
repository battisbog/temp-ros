import { FC } from "react";
import { cn } from "../../../lib/utils";
import PageTransition from "../../effects/PageTransition";
interface IPageWrapperProps {
  children: any;
  className?: string;
}
const PageWrapper: FC<IPageWrapperProps> = ({ children, className }) => {
  return (
    <section className={cn(className, "w-full")}>
      <PageTransition variant="fade">{children}</PageTransition>
    </section>
  );
};

export default PageWrapper;
