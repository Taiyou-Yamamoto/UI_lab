import React from 'react';
import * as styles from './List.css';
type ListProps = {
  items: string[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      {items.map((item, index) => (
        <li key={index} className={styles.liContainer}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default List;
