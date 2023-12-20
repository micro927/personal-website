import Link from 'next/link';
import { MenuList } from '@/app/core/types/app';

function NavLink({ title, link = '#' }: { title: string; link: string }) {
  return (
    <div className="select-none text-light transition-colors duration-200 hover:text-accent-500">
      <Link href={`#${link}`}>{title}</Link>
    </div>
  );
}

function Navbar({ menuList }: { menuList: MenuList }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex gap-12 px-24 py-8">
        {menuList.map(({ title, shortTitle, link }, key) => (
          <NavLink key={key} title={shortTitle || title} link={link} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
