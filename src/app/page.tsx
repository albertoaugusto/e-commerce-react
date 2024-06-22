import "./globals.sass";
import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

async function getProducts() {
    const res = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC");

    if (!res.ok){
      throw new Error('falha ao acessar');
    }

    return res.json();
  }

export default async function Home() {
  const products = await getProducts();
  console.log(products);
  
  return (
    <div className="container-grid">
        <div className="cards grid">
              {products.products.map((product: ProductType) => (
                <Product key={product.id} product={product}></Product>
                ))};
        </div>
    </div>
  );
}
