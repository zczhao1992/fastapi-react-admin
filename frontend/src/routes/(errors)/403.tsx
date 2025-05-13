import { createFileRoute } from '@tanstack/react-router'
import ForbiddenError from '@/views/errors/forbidden'

export const Route = createFileRoute('/(errors)/403')({
  component: ForbiddenError,
})