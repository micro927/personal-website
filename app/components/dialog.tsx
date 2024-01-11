'use client';

import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cx } from '@emotion/css';
function Dialog({
  children,
  isOpen,
  onClose,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) {
  useEffect(() => {
    if (document) {
      document.onkeydown = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-gray-600 bg-opacity-80 backdrop-blur-sm"
            >
              <motion.dialog
                initial={{ opacity: 0, y: -20, x: '-50%' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: '-50%',
                  transition: { type: 'spring' },
                }}
                exit={{ opacity: 0 }}
                className={cx(className, 'fixed inset-1/2 z-50')}
                open
              >
                {children}
              </motion.dialog>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Dialog;
