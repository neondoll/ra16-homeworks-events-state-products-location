import IconSwitch from "./IconSwitch.tsx";
import { PureComponent } from "react";
import ListView from "./ListView.tsx";
import CardsView from "./CardsView.tsx";

interface StoreState {
  isList: boolean;
}

class Store extends PureComponent {
  private products: Product[] = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
  ];
  public state: StoreState = { isList: false };

  private onSwitch() {
    console.log("change state here");
    this.setState({ isList: !this.state.isList });
  }

  public render() {
    return (
      <div className="store">
        <IconSwitch
          className="store__icon-switch"
          icon={this.state.isList ? "view_module" : "view_list"}
          onSwitch={this.onSwitch.bind(this)}
        />
        {this.state.isList ? (
          <ListView
            className="store__list-view"
            items={this.products}
          />
        ) : (
          <CardsView
            className="store__cards-view"
            cards={this.products}
          />
        )}
      </div>
    );
  }
}

export default Store;
