'use client';

import { OnboardingMessageContextType } from '@/app/core/types/app';
import { ReactNode, createContext, useState } from 'react';

export const OnboardingMessageContext =
  createContext<OnboardingMessageContextType>({
    message: '',
    setMessage: () => undefined,
  });

export function OnboardingMessageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [message, setMessage] = useState('');

  return (
    <OnboardingMessageContext.Provider value={{ message, setMessage }}>
      {children}
    </OnboardingMessageContext.Provider>
  );
}
