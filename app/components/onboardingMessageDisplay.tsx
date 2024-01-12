'use client';

import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OnboardingMessageContext } from './onboardingMessageProvider';
import { cx } from '@emotion/css';
import { MdOutlineClose, MdOutlineTipsAndUpdates } from 'react-icons/md';

function OnboardingDisplay({ className }: { className?: string }) {
  const { message, setMessage } = useContext(OnboardingMessageContext);
  const [isShowMessage, setIsShowMessage] = useState(false);

  const closeMessage = () => {
    setIsShowMessage(false);
    setMessage('');
  };

  useEffect(() => {
    setIsShowMessage(message !== '');

    const closeTimeout = setTimeout(() => {
      closeMessage();
    }, 10000);

    return () => clearTimeout(closeTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <AnimatePresence>
      {isShowMessage && (
        <motion.div
          key={message}
          initial={{ y: 80, opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', delay: 0.6 },
          }}
          exit={{ y: 80, opacity: 0 }}
          className={cx(
            className,
            'fixed bottom-10 flex w-full justify-center px-10 lg:justify-end',
          )}
        >
          <div className="flex w-fit items-center gap-3 rounded-3xl bg-white bg-opacity-100 px-7 py-5 text-gray-600 drop-shadow-xl lg:bg-opacity-80">
            <div>
              <MdOutlineTipsAndUpdates
                size={24}
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </div>
            <p className="text-sm md:text-base">{message}</p>
            <div>
              <button onClick={closeMessage} className="p-1 md:p-2">
                <MdOutlineClose size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OnboardingDisplay;
