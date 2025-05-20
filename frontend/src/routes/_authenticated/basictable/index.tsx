import { createFileRoute } from "@tanstack/react-router";
import BasicTable from "@/views/basictable";
import { RootLayout } from "@/components/layout/index"


export const Route = createFileRoute("/_authenticated/basictable/")({
  component: () => {
    return (
      <>
        <RootLayout />

        <BasicTable />
      </>
    )
  },
});
