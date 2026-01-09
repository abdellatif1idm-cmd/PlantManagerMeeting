import React from "react";

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`w-full flex flex-col ${className || ""}`}>
      {children}
    </main>
  );
}
