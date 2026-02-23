"use client";
import { Spinner } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const ArchiveBook = dynamic(() => import("@/components/features/book/Book"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex overflow-hidden justify-center items-center min-h-screen p-4">
      <Spinner />
    </div>
  ),
});

export default function BookPage() {
  return <ArchiveBook />;
}
