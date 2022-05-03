import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-5">
      <Popover.Panel>Oiii</Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="h-6 w-6" />

        <span className="max-w-0 font-normal overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
