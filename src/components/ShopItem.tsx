import cn from "classnames";
import type { HTMLAttributes } from "react";

interface ShopItemProps {
  className?: HTMLAttributes<HTMLLIElement>['className'];
  item: Product;
}

function ShopItem({ className, item }: ShopItemProps) {
  return (
    <li className={cn(className, "shop-item")}>
      <img alt={item.name} className="shop-item__img" src={item.img} />
      <span className="shop-item__name">{item.name}</span>
      <span className="shop-item__color">{item.color}</span>
      <span className="shop-item__price">{"$" + item.price}</span>
      <button className="shop-item__btn" type="button">Add to cart</button>
    </li>
  );
}

export default ShopItem;
