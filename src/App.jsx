import "./App.css";
import { useGetProductsQuery } from "./features/product/productSlice2";
import CardProduct from "./components/card/card-product";
import SkeletonCardProduct from "./components/card/skeleton-card-product";
import SEO from "./components/seo/SEOComponent";

function App() {
  const { data, isLoading } = useGetProductsQuery({
    page: 0,
    size: 8,
  });
  const skeletonArray = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div>
      {/* Implement SEO */}
      <SEO
        title="Home | SEYHA ODINN"
        description="ODINN is the most popular powerful ecommerce website which serves many Khmer products such as rural area"
        keywords="product, category, ecommerce, khmer-product"
        url="/"
        image="https://marketplace.canva.com/EAGO8qVpx7M/1/0/1600w/canva-cream-illustrative-food-journal-presentation-d3WZDM7BaWg.jpg"
      />

      <main className="max-w-screen-xl mx-auto">
        <section className="grid grid-cols-4 gap-5">
          {isLoading &&
            skeletonArray.map((num) => <SkeletonCardProduct key={num} />)}

          {!isLoading &&
            data?.content?.map((p) => (
              <CardProduct
                key={p.uuid}
                thumbnail={p.thumbnail}
                title={p.name}
                id={p.uuid}
              />
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
