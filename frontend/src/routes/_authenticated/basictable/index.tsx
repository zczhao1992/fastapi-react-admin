import { createFileRoute } from "@tanstack/react-router";
import BasicTable from "@/views/basictable";

export const Route = createFileRoute("/_authenticated/basictable/")({
  component: BasicTable,
});
