/* eslint-disable react/prop-types */
import PageTransition from "@/components/effects/PageTransition";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { GridWrapper } from "../wrapper/GridWrapper";
import SectionWrapper from "../wrapper/SectionWrapper";

const DetailsSkeleton = ({ columns = 3, items = 6, className }) => {
  return (
    <PageTransition>
      <SectionWrapper className="w-full my-2">
        <div className="flex flex-col justify-start w-full items-start my-4">
          <Skeleton
            variant="primary"
            shape="rounded"
            typography="h4"
            className="w-4/12"
          />
          <Skeleton
            className="mt-4 w-8/12"
            variant="primary"
            shape="rounded"
            typography="paragraph_sm"
          />
        </div>

        <GridWrapper
          columns={columns}
          className={cn("grid gap-x-4 gap-y-8 w-full my-4", className)}
        >
          {Array(items)
            .fill("")
            .map((_, index) => (
              <div className="w-full flex-col space-y-1.5" key={index}>
                <Skeleton
                  className="w-3/12"
                  variant="primary"
                  shape="rounded"
                  button="sm"
                />
                <Skeleton
                  className="w-full"
                  variant="primary"
                  shape="rounded"
                  typography="paragraph_sm"
                />
              </div>
            ))}
        </GridWrapper>
      </SectionWrapper>
    </PageTransition>
  );
};

export default DetailsSkeleton;
