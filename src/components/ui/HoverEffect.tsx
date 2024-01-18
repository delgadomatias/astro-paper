import Datetime from "@components/Datetime";
import { cn } from "@utils/cn";
import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface HoverProps {
  items: CollectionEntry<"blog">[];
  className?: string;
  isUnevenGrid?: boolean;
}

export const HoverEffect = ({
  items,
  className,
  isUnevenGrid = false,
}: HoverProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const classForLastItem = items.length % 2 === 1 ? "md:col-span-2" : "";

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2", className)}
      style={{
        gridAutoRows: "1fr",
      }}
    >
      {items.map(
        (
          { id, slug, data: { description, pubDatetime, modDatetime, title } },
          idx
        ) => (
          <a
            href={`/posts/${slug}`}
            key={id}
            className={`group relative block h-full  w-full py-2 md:p-2 ${idx === items.length - 1 ? classForLastItem : ""} ${isUnevenGrid && idx % 2 !== 0 ? "md:mt-12" : ""}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 hidden h-full w-full rounded-3xl bg-[#161A26]/[0.8] md:block"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <h2
                style={{
                  viewTransitionName: slugifyStr(title),
                }}
                className="mb-1 inline-block text-lg font-medium text-skin-accent"
              >
                {title}
              </h2>
              <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
              <p className="mt-3">{description}</p>
            </Card>
          </a>
        )
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-50 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-[#161A26] py-4 group-hover:border-[#2C3242] md:p-4",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
