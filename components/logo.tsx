import type { FC } from "react"

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto mr-2">
        <path
          d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 42c-10.5 0-19-8.5-19-19S14.5 6 25 6s19 8.5 19 19-8.5 19-19 19z"
          fill="#9ACA3C"
        />
        <path
          d="M35 20c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zM25 15c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V17c0-1.1-.9-2-2-2zM15 25c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2z"
          fill="#9ACA3C"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-white font-playfair font-bold text-lg leading-tight">FERIAS DEL CENTRO</span>
        <span className="text-customAccent text-xs">• DESDE 1983 •</span>
      </div>
    </div>
  )
}
