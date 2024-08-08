import { Card, List, ListItem } from '@tremor/react';

export function ItemsList({items}) {
 
  return (
    <Card className="mx-auto max-w-md">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Tremor's Hometowns</h3>
      <List className="mt-2">
        {items.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}