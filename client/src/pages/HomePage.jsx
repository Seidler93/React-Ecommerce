import DealsContainer from "../components/HomePageUI/DealsContainer";
import ProductsContainer from "../components/HomePageUI/ProductsContainer";
import TopicsContainer from "../components/HomePageUI/TopicsContainer";

export default function HomePage() {
  return (
    <>
      <DealsContainer/>
      <div className="content-container">
        <TopicsContainer/>
        <ProductsContainer/>
      </div>
    </>
  );
}