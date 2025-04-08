import clsx from 'clsx';
import * as styles from './index.css';

export interface NotificationProps {
  onClose: () => void;
  open: boolean;
  title: string;
  type: 'information' | 'warning' | 'danger';
  buttonList?: {
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary' | 'tertiary';
  }[];
  description?: string;
  link?: {
    href: string;
    target?: string;
    rel?: string;
  };
  linkText?: string;
}

const Notifications: React.FC<NotificationProps> = (props) => {
  const { title, type, description, link, onClose, buttonList, linkText } = props;

  return (
    <div className={styles.container[type]} role='status'>
      <div className={styles.header}>
        <div className={styles.titleWithIcon}>
          <span className={styles.icon}>{type === 'information' ? 'ℹ️' : type === 'warning' ? '⚠️' : '❌'}</span>
          <p>{title}</p>
        </div>
        {type !== 'danger' && (
          <button type='button' onClick={onClose} className={styles.closeButton}>
            ✖ <span className={styles.closeText}>閉じる</span>
          </button>
        )}
      </div>

      {description && <span className={styles.description}>{description}</span>}

      {link && (
        <div className={styles.linkWrapper}>
          <a href={link.href} target={link.target} rel={link.rel} className={styles.linkText}>
            {linkText || '詳細はこちら'}
          </a>
        </div>
      )}

      {buttonList && (
        <div className={styles.buttonWrapper}>
          {buttonList.map((item, index) => (
            <button key={index} type='button' className={clsx(styles.button, styles.buttonType[item.type || 'primary'])} onClick={item.onClick}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
