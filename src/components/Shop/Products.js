import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: "p1",
    title: "My First Book",
    price: 10,
    description: 'This is a first product - amazing!'
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 20,
    description: 'This is Second product - amazing!'
  }
]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
