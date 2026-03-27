"use client";

import { motion } from "framer-motion";
import type { ExperienceItem as Experience } from "@/data/portfolio";

type ExperienceItemProps = {
  item: Experience;
  index: number;
};

export function ExperienceItem({ item, index }: ExperienceItemProps) {
  return (
    <motion.li
      className="relative pl-10 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      <span className="absolute left-[5px] top-6 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
      <p className="text-sm text-zinc-400">{item.dates}</p>
      <h3 className="mt-1 text-lg font-semibold text-zinc-100">{item.role}</h3>
      <p className="text-zinc-300">{item.company}</p>
      <ul className="mt-3 space-y-1 text-sm text-zinc-400">
        {item.achievements.map((achievement) => (
          <li key={achievement}>- {achievement}</li>
        ))}
      </ul>
    </motion.li>
  );
}
