import cn from "classnames";
import ShopCard from "./ShopCard.tsx";
import type { HTMLAttributes } from "react";

interface CardsViewProps {
  className?: HTMLAttributes<HTMLUListElement>['className'];
  cards: Product[]
}

function CardsView({ className, cards }: CardsViewProps) {
  return (
    <ul className={cn(className, "cards-view")}>
      {cards.map((card, index) => (
        <ShopCard
          className="cards-view__shop-card"
          card={card}
          key={`shop-card-${index + 1}`}
        />
      ))}
    </ul>
  );
}

export default CardsView;
