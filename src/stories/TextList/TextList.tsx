import clsx from 'clsx';
import * as styles from './TextList.css.ts';

export interface LinkRendererProps {
  href: string;
  target?: string;
  rel?: string;
}

export interface TextListProps {
  items: {
    items?: {
      items?: { link?: LinkRendererProps; text: string }[];
      link?: LinkRendererProps;
      text: string;
    }[];
    link?: LinkRendererProps;
    text: string;
  }[];
  tag: 'ul' | 'ol';
}

const TextList: React.FC<TextListProps> = (props) => {
  const { items, tag } = props;
  const Tag = tag;
  return (
    <Tag className={styles.parentContainer}>
      {items.map((parent, parentIndex) => (
        <li key={parentIndex} className={styles.parentListContainer}>
          {parent.link ? (
            <a className={styles.parent} href={parent.link.href} target={parent.link.target} rel={parent.link.rel}>
              <div className={clsx(styles.text)}>
                {tag === 'ol' && <span className={styles.underlineNone['parent']}>{String(parentIndex + 1) + '.'}</span>}
                <span className={clsx(tag === 'ul' && styles.listStyle['decimal'], styles.child)}>{parent.text}</span>
              </div>
            </a>
          ) : (
            <div className={styles.text}>
              {tag === 'ol' && <span className={styles.marginRight['parent']}>{String(parentIndex + 1) + '.'}</span>}
              <span className={clsx(tag === 'ul' && styles.listStyle['decimal'], styles.text)}>{parent.text}</span>
            </div>
          )}

          {parent.items && (
            <Tag className={styles.childContainer}>
              {parent.items.map((child, childIndex) => (
                <li key={childIndex}>
                  {child.link ? (
                    <a className={styles.parent} href={child.link.href} target={child.link.target} rel={child.link.rel}>
                      <div className={clsx(styles.text)}>
                        {tag === 'ol' && (
                          <span className={styles.underlineNone['child']}>{String(parentIndex + 1) + '-' + String(childIndex + 1) + '.'}</span>
                        )}
                        <span className={(tag === 'ul' && styles.listStyle['decimal'], styles.child)}>{child.text}</span>
                      </div>
                    </a>
                  ) : (
                    <div className={styles.text}>
                      {tag === 'ol' && (
                        <span className={styles.marginRight['child']}>{String(parentIndex + 1) + '-' + String(childIndex + 1) + '.'}</span>
                      )}
                      <span className={tag === 'ul' ? styles.listStyle['circle'] : undefined}>{child.text}</span>
                    </div>
                  )}

                  {child.items && (
                    <Tag className={styles.grandChildContainer}>
                      {child.items.map((grandChild, grandChildIndex) => (
                        <li key={grandChildIndex}>
                          {grandChild.link ? (
                            <a className={styles.parent} href={grandChild.link.href} target={grandChild.link.target} rel={grandChild.link.rel}>
                              <div className={clsx(styles.text)}>
                                {tag === 'ol' && (
                                  <span className={clsx(styles.underlineNone['grandChild'])}>
                                    {String(parentIndex + 1) + '-' + String(childIndex + 1) + '-' + String(grandChildIndex + 1) + '.'}
                                  </span>
                                )}
                                <span className={clsx(tag === 'ul' && styles.listStyle['square'], styles.child)}>{grandChild.text}</span>
                              </div>
                            </a>
                          ) : (
                            <div className={styles.text}>
                              {tag === 'ol' && (
                                <span className={styles.marginRight['grandChild']}>
                                  {String(parentIndex + 1) + '-' + String(childIndex + 1) + '-' + String(grandChildIndex + 1) + '.'}
                                </span>
                              )}
                              <span className={tag === 'ul' ? styles.listStyle['square'] : undefined}>{grandChild.text}</span>
                            </div>
                          )}
                        </li>
                      ))}
                    </Tag>
                  )}
                </li>
              ))}
            </Tag>
          )}
        </li>
      ))}
    </Tag>
  );
};

export default TextList;
