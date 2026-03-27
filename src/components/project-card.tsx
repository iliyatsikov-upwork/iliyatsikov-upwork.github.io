"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/data/portfolio";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  disableEntranceAnimation?: boolean;
};

export function ProjectCard({
  project,
  index,
  disableEntranceAnimation = false,
}: ProjectCardProps) {
  const imageSet = project.images?.length ? project.images : [project.image ?? ""];
  const [activeImage, setActiveImage] = useState(0);

  const canSlideImages = imageSet.length > 1;
  const selectedImage = imageSet[activeImage] || "/images/projects/project-konsui.svg";

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur"
      initial={disableEntranceAnimation ? false : { opacity: 0, y: 20 }}
      animate={disableEntranceAnimation ? { opacity: 1, y: 0 } : undefined}
      whileInView={disableEntranceAnimation ? undefined : { opacity: 1, y: 0 }}
      viewport={disableEntranceAnimation ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={selectedImage}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {canSlideImages && (
          <div className="absolute inset-x-0 bottom-2 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={() =>
                setActiveImage((prev) => (prev - 1 + imageSet.length) % imageSet.length)
              }
              className="rounded-full bg-zinc-950/75 px-3 py-1 text-xs text-zinc-200 transition hover:bg-zinc-900"
            >
              Prev
            </button>
            <span className="rounded-full bg-zinc-950/75 px-2 py-1 text-[11px] text-zinc-300">
              {activeImage + 1}/{imageSet.length}
            </span>
            <button
              type="button"
              onClick={() => setActiveImage((prev) => (prev + 1) % imageSet.length)}
              className="rounded-full bg-zinc-950/75 px-3 py-1 text-xs text-zinc-200 transition hover:bg-zinc-900"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        <p className="text-sm text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-cyan-400/50 px-3 py-1 text-xs text-cyan-300"
            >
              {platform}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-cyan-400"
        >
          View Project
        </a>
      </div>
    </motion.article>
  );
}
