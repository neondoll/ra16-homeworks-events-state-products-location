import cn from "classnames";
import type { HTMLAttributes } from "react";

interface ShopCardProps {
  className?: HTMLAttributes<HTMLLIElement>['className'];
  card: Product;
}

function ShopCard({ className, card }: ShopCardProps) {
  return (
    <li className={cn(className, "shop-card")}>
      <span className="shop-card__name">{card.name}</span>
      <span className="shop-card__color">{card.color}</span>
      <img alt={card.name} className="shop-card__img" src={card.img} />
      <span className="shop-card__footer">
        <span className="shop-card__price">{"$" + card.price}</span>
        <button className="shop-card__btn" type="button">Add to cart</button>
      </span>
    </li>
  );
}

export default ShopCard;
