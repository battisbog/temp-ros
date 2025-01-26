/* eslint-disable react/prop-types */
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";
import SectionWrapper from "./SectionWrapper";

import { cn } from "@/lib/utils";

const toolbarVariants = cva("flex w-full space-x-4 my-2", {
  variants: {
    alignment: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
  },
  defaultVariants: {
    alignment: "start",
  },
});

const TableToolbar = React.forwardRef(function TableToolbar(
  { className, alignment = "start", asChild = false, children, ...props },
  ref
) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(toolbarVariants({ alignment }), className)}
      ref={ref}
      {...props}
    >
      {children || null} {/* Avoids rendering empty elements */}
    </Comp>
  );
});

function TableWrapper({ children, heading, subHeading, className }) {
  return (
    <SectionWrapper className="w-full my-8">
      <h2 className="text-xl font-semibold text-start">{heading}</h2>
      {subHeading && <p className="text-sm text-gray-600">{subHeading}</p>}
      <TableToolbar alignment="start">
        {/* Add toolbar actions or leave empty */}
      </TableToolbar>
      <div className={cn("w-full", className)}>{children}</div>
    </SectionWrapper>
  );
}

export { TableToolbar, TableWrapper };
