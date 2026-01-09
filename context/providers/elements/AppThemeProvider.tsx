import React from "react";
import { Theme } from "@radix-ui/themes";

export default function AppThemeProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Theme appearance="dark" accentColor="blue" className="font-montserrat!">
      {children}
    </Theme>
  );
}
