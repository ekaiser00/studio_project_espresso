import { Link } from 'react-router-dom';
import type { Product } from '@/lib/products';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="font-serif-display text-base font-medium">{product.name}</h3>
      <p className="font-sans-body text-[12px] text-muted-foreground mt-0.5">{product.size}</p>
      <div className="flex items-center gap-2 mt-1">
        <span className="font-sans-body text-[13px] tabular-nums">${product.price}</span>
        {product.originalPrice && (
          <span className="font-sans-body text-[12px] text-muted-foreground line-through tabular-nums">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
