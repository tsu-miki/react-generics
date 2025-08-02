import { List } from "../components/List";
import { List2 } from "../components/List2";

export const GenericsComponentPage = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const products: Product[] = [
    { id: 1, name: "りんご", price: 100 },
    { id: 2, name: "みかん", price: 200 },
  ];

  return (
    <>
      <h1>商品リスト</h1>
      <List items={products} renderItem={(product) => (
        <span>{product.name} - ¥{product.price.toLocaleString()}</span>
      )} />
      <List2 items={products} renderItem={(product) => (
        <span>{product.name} - ¥{product.price.toLocaleString()}</span>
      )} />
    </>
  );
};
