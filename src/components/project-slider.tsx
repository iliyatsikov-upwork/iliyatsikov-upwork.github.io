"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectItem } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

type ProjectSliderProps = {
  items: ProjectItem[];
};

export function ProjectSlider({ items }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={goPrevious}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          Next
        </button>
      </div>

      <div className="mx-auto max-w-xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentItem.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.24 }}
          >
            <ProjectCard project={currentItem} index={0} disableEntranceAnimation />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to ${item.title}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-8 rounded-full transition ${
              currentIndex === index ? "bg-cyan-400" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
