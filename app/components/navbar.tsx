import Link from 'next/link';
import { MenuList, VariantEnum } from '@/app/core/types/app';
import Button from './button';

function NavLink({ title, link = '#' }: { title: string; link: string }) {
  return (
    <div className="cursor-pointer select-none px-1 py-2 text-light transition-colors duration-150 ease-in hover:text-accent-500 active:text-primary-500">
      <Link href={`#${link}`}>{title}</Link>
    </div>
  );
}

function Navbar({ menuList }: { menuList: MenuList }) {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex items-center gap-10 bg-background-500 px-24 py-5 transition-colors">
        {menuList.map(({ title, shortTitle, link }, key) => (
          <NavLink key={key} title={shortTitle || title} link={link} />
        ))}
        <div className="ml-auto">
          <Link href="#contact">
            <Button
              variant={VariantEnum.SECONDARY}
              className="!rounded-full text-sm"
            >
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
