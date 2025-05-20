import { createFileRoute } from '@tanstack/react-router'
import Tasks from '@/views/tasks'
import { RootLayout } from "@/components/layout/index"

export const Route = createFileRoute('/_authenticated/tasks/')({
  component: () => {
    return (
      <>
        <RootLayout />

        <Tasks />
      </>
    )
  },
})