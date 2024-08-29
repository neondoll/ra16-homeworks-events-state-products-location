import cn from "classnames";
import ShopItem from "./ShopItem.tsx";
import type { HTMLAttributes } from "react";

interface ListViewProps {
  className?: HTMLAttributes<HTMLUListElement>['className'];
  items: Product[];
}

function ListView({ className, items }: ListViewProps) {
  return (
    <ul className={cn(className, "list-view")}>
      {items.map((item, index) => (
        <ShopItem
          className="list-view__shop-item"
          item={item}
          key={`shop-item-${index + 1}`}
        />
      ))}
    </ul>
  );
}

export default ListView;
