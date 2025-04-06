import { useEffect, useRef } from 'react';
import * as styles from './Modal.css.ts';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  size?: 'S' | 'M' | 'L';
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  size = 'L',
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // モーダルの表示切替
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // ESCキーで閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // dialog の backdropクリックで閉じる（自動で発火）
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.overlay} onCancel={handleCancel}>
      <div className={styles.modalSize[size]}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label='Close'
        >
          ×
        </button>
        {children}
      </div>
    </dialog>
  );
};
