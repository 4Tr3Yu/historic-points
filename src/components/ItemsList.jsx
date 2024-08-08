import { List, ListItem } from '@tremor/react';

export function ItemsList({items}) {
 
    return (
        <>
          <List className="mt-2 ">
            {items.map((item) => (
              <ListItem key={item.name}>
                <span>{item.name}</span>
                <span>{item.location}</span>
                <span>{item.tags}</span>
              </ListItem>
            ))}
          </List>
        </>
    );
}