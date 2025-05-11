import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavigationProgress } from "@/components/navigation-progress";
import { Toaster } from "@/components/ui/sonner";

console.log(import.meta.env.MODE);
export const Route = createRootRoute({
  component: () => (
    <>
      <NavigationProgress />
      <Outlet />
      <Toaster duration={50000} />
      {import.meta.env.MODE === "development" && (
        <>
          <TanStackRouterDevtools position="bottom-right" />
        </>
      )}
    </>
  ),
});
