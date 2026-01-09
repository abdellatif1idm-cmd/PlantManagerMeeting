"use client";
import { Spinner } from "@radix-ui/themes";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Redirection({ url }: { url: string }) {
  useEffect(() => {
    setTimeout(() => {
      redirect(url);
    }, 1500);
  }, []);
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center gap-y-2">
      <span className="text-(--accent-12) text-xl">Redirection</span>
      <Spinner size={"3"}/>
      
    </div>
  );
}
