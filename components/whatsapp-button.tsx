'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'green' | 'white'
  className?: string
}

const WHATSAPP_LINK = 'https://wa.me/244XXXXXXXXX?text=Quero%20o%20Pack%20Cat%C3%B3lico'

export default function WhatsAppButton({ 
  size = 'md', 
  variant = 'green',
  className 
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const variantClasses = {
    green: 'btn-whatsapp text-white',
    white: 'bg-white text-[#D4AF37] hover:bg-gray-50'
  }

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <MessageCircle className={cn(
        'flex-shrink-0',
        size === 'sm' && 'w-4 h-4',
        size === 'md' && 'w-5 h-5',
        size === 'lg' && 'w-6 h-6',
        size === 'xl' && 'w-7 h-7'
      )} />
      <span>Quero o Devocional</span>
    </button>
  )
}
