import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Product_Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair grey",
          img: "chair.jpeg",
          desc: "Lorem ipsum dolor",
          category: "seating",
          price: "49.99",
        },
        {
          id: 2,
          title: "Black table",
          img: "blacktable.webp",
          desc: "Lorem ipsum dolor",
          category: "tables",
          price: "89.99",
        },
        {
          id: 3,
          title: "Couch",
          img: "couch.jpeg",
          desc: "Lorem ipsum dolor",
          category: "seating",
          price: "59.99",
        },
        {
          id: 4,
          title: "Sectional lounger",
          img: "lounger.jpeg",
          desc: "Lorem ipsum dolor",
          category: "seating",
          price: "169.99",
        },
        {
          id: 5,
          title: "Coffee table",
          img: "coffee_table.jpeg",
          desc: "Lorem ipsum dolor",
          category: "tables",
          price: "29.99",
        },
        {
          id: 6,
          title: "Night table",
          img: "nighttable.jpeg",
          desc: "Lorem ipsum dolor",
          category: "tables",
          price: "69.99",
        },
        {
          id: 7,
          title: "Armchair",
          img: "armchair.avif",
          desc: "Lorem ipsum dolor",
          category: "seating",
          price: "39.99",
        },
        {
          id: 8,
          title: "Sofa",
          img: "sofa.jpeg",
          desc: "Lorem ipsum dolor",
          category: "seating",
          price: "129.99",
        },
        {
          id: 9,
          title: "Lamp",
          img: "lamp.avif",
          desc: "Lorem ipsum dolor",
          category: "other",
          price: "79.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;

    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
