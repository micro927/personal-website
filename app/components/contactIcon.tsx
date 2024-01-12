import { ContactIconEnum } from '../core/types/app';
import { iconStyleMapping } from '../core/presentation/contactIconStyleMapping';
import Link from 'next/link';
import { cx } from '@emotion/css';
function ContactIcon({ icon, link }: { icon: ContactIconEnum; link: string }) {
  const IconLogo = iconStyleMapping[icon].icon;
  const hrefPrefix = icon === ContactIconEnum.EMAIL ? 'mailto:' : 'https://';
  return (
    <Link
      href={`${hrefPrefix}${link}`}
      aria-label={`to ${icon}`}
      target={'_blank'}
      className={cx(`group flex cursor-pointer flex-col items-center gap-3`)}
    >
      <IconLogo className="h-8 w-8 text-gray-400 transition duration-700 ease-out group-hover:scale-110 group-hover:text-dark md:h-10 md:w-10" />
      <p className=" -translate-y-3 text-base font-bold opacity-0 transition duration-200 first-letter:uppercase group-hover:-translate-y-0 group-hover:opacity-100 md:text-lg">
        {icon}
      </p>
    </Link>
  );
}

export default ContactIcon;
