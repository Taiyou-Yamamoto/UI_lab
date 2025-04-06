import React from 'react';

type ListProps = {
  items: string[];
};

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '8px' }}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default List;
