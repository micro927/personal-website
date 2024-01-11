'use client';

import Dialog from '@/app/components/dialog';
import { Work } from '@/app/core/types/data';

function WorkModal({
  work,
  isOpen,
  onClose,
}: {
  work: Work;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      className="rounded-xl border p-20 shadow-sm"
    >
      {work.jobTitle}
      <button onClick={onClose} className="border p-2">
        close
      </button>
    </Dialog>
  );
}

export default WorkModal;
