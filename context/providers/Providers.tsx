"use client";
import React from "react";
import AppThemeProvider from "./elements/AppThemeProvider";
import ReduxProvider from "./elements/ReduxProvider";

export default function Providers({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <ReduxProvider>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ReduxProvider>
    </>
  );
}
