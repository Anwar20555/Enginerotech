export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#gradient1)" />
          <path d="M12 24h8m4 0h12M24 12v8m0 4v12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="24" r="4" fill="#ffffff" />
          <circle cx="12" cy="24" r="2" fill="#ffffff" />
          <circle cx="36" cy="24" r="2" fill="#ffffff" />
          <circle cx="24" cy="12" r="2" fill="#ffffff" />
          <circle cx="24" cy="36" r="2" fill="#ffffff" />
          <circle cx="12" cy="12" r="2" fill="#0d9488" />
          <circle cx="36" cy="12" r="2" fill="#0d9488" />
          <circle cx="12" cy="36" r="2" fill="#0d9488" />
          <circle cx="36" cy="36" r="2" fill="#0d9488" />
          <defs>
            <linearGradient id="gradient1" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#0d9488" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-bold gradient-text">انجنيروتيك</span>
        <span className="text-[10px] md:text-xs text-muted-foreground tracking-wider">ENGINEEROTECH</span>
      </div>
    </div>
  )
}
