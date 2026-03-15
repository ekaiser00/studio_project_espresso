import type { Product } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  layout?: 'scroll' | 'grid';
}

const ProductSection = ({ title, subtitle, products, layout = 'grid' }: ProductSectionProps) => {
  return (
    <section className="px-6 py-16 lg:px-10">
      <div className="mb-8 text-center">
        <h2 className="font-serif-display text-4xl font-light tracking-wide md:text-5xl">{title}</h2>
        <p className="font-sans-body text-[13px] text-muted-foreground mt-2 tracking-wide">{subtitle}</p>
      </div>

      {layout === 'scroll' ? (
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 lg:-mx-10 lg:px-10">
          {products.map((product) => (
            <div key={product.slug} className="min-w-[260px] flex-shrink-0 lg:min-w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductSection;
