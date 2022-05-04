import React from "react";
import { CloseButton } from "./CloseButton";

import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

const feedbackButton = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImageUrl,
      alt: "Bug image",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Lamp image",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "Cloud image",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackButton).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="text-xs">{value.title}</span>
          </button>
        ))}
      </div>

      <footer>
        <span className="text-xs leading-6 text-neutral-400">
          {`Feito com ♥︎ por `}
          <a
            className="underline underline-offset-2"
            href="https://github.com/brunozampirom"
          >
            brunozampirom
          </a>
        </span>
      </footer>
    </div>
  );
}
