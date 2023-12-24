import { ContactIconEnum } from '../core/types/icon';
import { iconStyleMapping } from '../core/contactIconStyleMapping';
import Link from 'next/link';
import { cx } from '@emotion/css';
function ContactIcon({ icon, link }: { icon: ContactIconEnum; link: string }) {
  const IconLogo = iconStyleMapping[icon].icon;
  const hrefPrefix = icon === ContactIconEnum.EMAIL ? 'mailto:' : 'https://';
  return (
    <div className="group">
      <Link
        href={`${hrefPrefix}${link}`}
        aria-label={`to ${icon}`}
        target={'_blank'}
        className={cx(
          `flex items-center justify-center overflow-hidden rounded-xl bg-white p-2 transition duration-150 ease-out group-hover:scale-125`,
          iconStyleMapping[icon].color,
        )}
      >
        <IconLogo
          className={cx(
            'bg-white text-black transition duration-150 group-hover:text-white',
            iconStyleMapping[icon].color,
          )}
          size={20}
        />
      </Link>
    </div>
  );
}

export default ContactIcon;
