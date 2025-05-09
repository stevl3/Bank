// app/Header.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Only render SIDEBAR on the homepage
  if (pathname !== '/') return null;

  return (
    <header className="bg-gray-100 p-4 text-lg font-semibold">
      SIDEBAR
    </header>
  );
}
