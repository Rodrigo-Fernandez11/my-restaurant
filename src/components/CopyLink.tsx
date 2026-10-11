"use client";

import { toast } from "sonner";

export const CopyLink = () => {
  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then(
      (res) => res.blob()
    );
    await navigator.clipboard.write([
      new ClipboardItem({ [image.type]: image }),
    ]);
    toast.success("Copied to clipboard!");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white bg-charcoal-800 hover:bg-charcoal-700 focus:outline-none focus:ring-2 focus:ring-ember-500 font-medium rounded-full text-sm px-5 py-2.5 mt-4 transition-colors"
    >
      Share restaurant
    </button>
  );
};
