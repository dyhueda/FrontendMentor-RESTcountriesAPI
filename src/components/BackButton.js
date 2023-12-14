"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "../../public/icons/ArrowBackIcon";

export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={(e) => {
          router.push("/");
        }}
        className="flex gap-2 bg-white dark:bg-darkblueelements shadow-xl px-5 py-1 my-5 dark:text-white"
      >
        <div className="w-6 dark:text-white">
          <ArrowBackIcon />
        </div>
        Back
      </button>
    </div>
  );
}
