"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"; // ✅ fixed import
import { cn } from "@/lib/utils";

// Variants for the sidebar container
const sidebarVariants = cva(
  "flex flex-col bg-background text-foreground transition-all duration-300 ease-in-out border-r border-border",
  {
    variants: {
      variant: {
        default: "w-64",
        collapsed: "w-16",
      },
      position: {
        left: "left-0",
        right: "right-0",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "left",
    },
  }
);

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  /** Optional header content (e.g., logo, title) */
  header?: React.ReactNode;
  /** Optional footer content (e.g., version, settings) */
  footer?: React.ReactNode;
}

/**
 * Sidebar component with collapsible variants and slots for header/content/footer
 */
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    { className, variant, position, header, footer, children, ...props },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        data-slot="sidebar"
        className={cn(sidebarVariants({ variant, position }), className)}
        {...props}
      >
        {header && (
          <div className="border-b border-border p-4 font-semibold">
            {header}
          </div>
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
        {footer && (
          <div className="border-t border-border p-4 text-xs text-muted-foreground">
            {footer}
          </div>
        )}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";
