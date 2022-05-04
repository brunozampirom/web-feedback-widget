import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Close button"
    >
      <X className="w-4 h-4 font-bold" />
    </Popover.Button>
  );
}
