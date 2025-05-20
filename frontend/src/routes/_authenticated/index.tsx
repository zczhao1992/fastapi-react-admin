import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/views/dashboard";
import { RootLayout } from "@/components/layout/index"

export const Route = createFileRoute("/_authenticated/")({
  component: () => {
    return (
      <>
        <RootLayout />

        <Dashboard />
      </>
    )
  },
});
