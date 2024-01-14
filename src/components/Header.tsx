import Link from 'next/link';

export function Header() {
  return (
    <header className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-4 items-center py-4 border-b border-b-zinc-800">
      <Link href='/'>
        <h1 className="text-3xl font-bold">Logo</h1>
      </Link>
    </header>
  );
}
