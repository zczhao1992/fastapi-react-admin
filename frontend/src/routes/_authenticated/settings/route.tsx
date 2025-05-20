import { createFileRoute } from '@tanstack/react-router'
import Settings from '@/views/settings'
import { RootLayout } from "@/components/layout/index"

export const Route = createFileRoute('/_authenticated/settings')({
    component: () => {
        return (
            <>
                <RootLayout />

                <Settings />
            </>
        )
    },
})