import Datetime from "@components/Datetime";
import type { CollectionEntry } from "astro:content";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: CollectionEntry<"blog">[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<CollectionEntry<"blog">[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: CollectionEntry<"blog">[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative h-72 w-full shadow-none md:h-44">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-72 w-full flex-col justify-between rounded-3xl border border-slate-400  bg-white p-8   !shadow-none shadow-black/[0.1] md:h-44  dark:bg-[#161A26] "
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              <h2 className="mb-1 inline-block text-lg font-medium text-skin-accent">
                {card.data.title}
              </h2>
            </div>
            <div>
              <Datetime
                pubDatetime={card.data.pubDatetime}
                modDatetime={card.data.modDatetime}
              />
              <p className="font-normal text-neutral-400 dark:text-neutral-200">
                {card.data.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
