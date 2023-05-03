import React, { useContext } from 'react';
import Link from 'next/link';
import { ProductCardContext } from '../provider';
import { useTheme } from 'next-themes';

const themes = [
  { name: 'Snow' },
  { name: 'Dark' },
  { name: 'Gruvbox' },
  { name: 'Aurora' },
];

export default function Controls() {
  const { productCard, setProductCard } = useContext(ProductCardContext);
  const { theme, setTheme } = useTheme();
  const handleScrollTypeChange = (value) => {
    setProductCard((card) => ({ ...card, scrollType: value }));
  };

  const handleCardTypeChange = (value) => {
    setProductCard((card) => ({ ...card, type: value }));
  };

  console.log({ theme });

  return (
    <div className={`flex h-full w-full flex-1 flex-col bg-inherit`}>
      <header className="h-14 bg-indigo-500 px-4 text-neutral-50">
        <nav className="container mx-auto flex h-full items-center justify-between">
          <Link
            href={'/products'}
            className="flex h-full items-center font-sans text-2xl font-medium"
          >
            Products
          </Link>
          <div className="flex items-center justify-center px-3">
            <p className="font-sans text-base font-medium">Settings</p>
          </div>
        </nav>
      </header>
      <main className="h-full w-full flex-1 bg-inherit px-4">
        <div className="container mx-auto flex flex-col pt-20 text-[#101010]">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <section className="flex flex-col pt-10">
            <div className="mb-3 text-lg">Background</div>
            <select
              className="rounded bg-blue-500 p-4 text-white"
              onChange={(e) => setTheme(e.currentTarget.value)}
              value={theme}
            >
              <option value="system">System</option>
              {themes.map((t) => (
                <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                  {t.name}
                </option>
              ))}
            </select>
          </section>
          <section className="flex flex-col pt-10">
            <div className="mb-3 text-lg">Scrolling</div>
            <select
              className="rounded bg-blue-500 p-4 text-white"
              onChange={(e) => handleScrollTypeChange(e.target.value)}
              value={productCard.scrollType}
            >
              <option value={'horizontal'}>Horizontal</option>
              <option value={'vertical'}>Vertical</option>
            </select>
          </section>
          <section className="flex flex-col pt-10">
            <div className="mb-3 text-lg">Card Type</div>
            <select
              className="rounded bg-blue-500 p-4 text-white"
              onChange={(e) => handleCardTypeChange(e.target.value)}
              value={productCard.type}
            >
              <option value={'cardA'}>Card A</option>
              <option value={'cardB'}>Card B</option>
            </select>
          </section>
        </div>
      </main>
    </div>
  );
}
