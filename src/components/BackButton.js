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
        className="flex gap-2 bg-white dark:bg-darkblueelements shadow-xl px-5 py-1 my-5 sm:my-16 dark:text-white rounded"
      >
        <div className="w-6 sm:w-10 dark:text-white">
          <ArrowBackIcon />
        </div>
        Back
      </button>
    </div>
  );
}
