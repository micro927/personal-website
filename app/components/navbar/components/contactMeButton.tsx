'use client';

import Link from 'next/link';
import Button from '../../button';
import { useContext } from 'react';
import { OnboardingMessageContext } from '../../onboardingMessageProvider';
import { onboardingMessageItem } from '@/app/core/presentation/onboardingMessageItem';

function ContactMeButton() {
  const { setMessage } = useContext(OnboardingMessageContext);
  const { contact } = onboardingMessageItem;

  const onClickButton = () => {
    setMessage(contact);
  };

  return (
    <div>
      <Link href="#welcome">
        <Button className="!rounded-full" onClick={onClickButton}>
          Contact me
        </Button>
      </Link>
    </div>
  );
}

export default ContactMeButton;
