'use client';

import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cx } from '@emotion/css';
import { CONTENT_MAX_WIDTH } from '../core/constant';
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
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-gray-600 bg-opacity-50 backdrop-blur-sm"
              onClick={onClose}
            ></motion.div>
            <motion.dialog
              style={{ maxWidth: CONTENT_MAX_WIDTH }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  duration: 0.4,
                },
              }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className={cx(className, 'fixed z-50 overflow-scroll shadow-xl')}
              open
            >
              {children}
            </motion.dialog>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Dialog;
