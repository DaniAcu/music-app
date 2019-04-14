import React, { Fragment } from 'react';
import { ItemContainer, ItemImage, ItemDescription } from './styled';

export const List = ({ items, onClick }) => {
  return (
    <Fragment>
      {items &&
        items.map(item => (
          <ItemContainer key={item.id} onClick={() => onClick(item)}>
            <ItemImage src={item.image} />
            <ItemDescription>
              <h3>{item.name}</h3>
              <span>{item.description}</span>
            </ItemDescription>
          </ItemContainer>
        ))}
    </Fragment>
  );
};

export default List;
