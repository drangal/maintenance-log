'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function BackToPageButton({ url }: { url: string }) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(url)}
      className='mr-4 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-primary/90 hover:text-accent-foreground h-10 w-10 rounded-full border'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4'
      >
        <path d='m15 18-6-6 6-6'></path>
      </svg>
      <span className='sr-only'>Back</span>
    </button>
  )
}
