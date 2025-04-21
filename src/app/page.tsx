import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import ProductCard from "./_components/ProductCard";
import productList from "./_config/productData";

export default function Home() {
  return <div className="w-full h-full">
    <Navbar/>
    <main className="h-full p-16 grid-cols-1 md:grid-cols-2 grid xl:grid-cols-3 gap-16 place-items-center box-border">
      {productList.map((product, index)=>(
        <ProductCard id={product.id} name={product.name} imgUrl={product.imgUrl} description={product.description} price={product.price} key={`product-${index}`}/>
      )) }
    </main>
    <Footer/>
  </div>;
}
