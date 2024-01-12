import Link from 'next/link';
import { MenuList } from '@/app/core/types/app';
import { CONTENT_MAX_WIDTH, NAVBAR_HEIGHT } from '../../core/constant';
import ContactMeButton from './components/contactMeButton';

function NavLink({ title, link = '#' }: { title: string; link: string }) {
  return (
    <div className="text-light hover:text-accent-500 active:text-primary-500 cursor-pointer select-none px-1 py-2 transition-colors duration-150 ease-in">
      <Link href={`#${link}`}>{title}</Link>
    </div>
  );
}

function Navbar({ menuList }: { menuList: MenuList }) {
  return (
    <>
      <div className="fixed top-0 z-30 hidden w-full sm:block">
        <div
          style={{
            height: NAVBAR_HEIGHT,
          }}
          className="flex w-full items-center justify-center bg-background"
        >
          <div
            style={{
              maxWidth: CONTENT_MAX_WIDTH,
            }}
            className="flex w-full items-center justify-end gap-10 px-4 transition-colors"
          >
            {menuList.map(({ title, shortTitle, link }, key) => (
              <NavLink key={key} title={shortTitle || title} link={link} />
            ))}
            <ContactMeButton />
          </div>
        </div>
      </div>
      <div className="hidden sm:block" style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
}

export default Navbar;
