import { Card, List, ListItem } from '@tremor/react';

export function ItemsList({items}) {
 
  return (
    <Card className="mx-auto max-w-md">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Tremor's Hometowns</h3>
      <List className="mt-2">
        {items.map((item) => (
          <ListItem key={item.name}>
            <span>{item.name}</span>
            <span>{item.location}</span>
            <span>{item.tags}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}