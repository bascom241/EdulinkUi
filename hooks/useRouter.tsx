'use client' 
import { useRouter } from 'next/navigation'

export const usePageRouter = () => {
  const router = useRouter()

  const handlePageRouting = (page: string) => {
    router.push(page)
  }

  return { handlePageRouting }
}
