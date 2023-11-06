"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import AuthProvider from "./auth/provider";
import QueryClientProvider from "@/app/QueryClientProvider";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";

interface ChildrenProps {
  children: ReactNode;
}

const Provider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider>
        <AuthProvider>
          <Toaster />
          <Theme appearance="light" accentColor="violet">
            {children}
          </Theme>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Provider;
