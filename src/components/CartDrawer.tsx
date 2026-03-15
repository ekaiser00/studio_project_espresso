import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { glasses } from '@/lib/products';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const suggestedProducts = glasses.slice(0, 3);

  return (
    <SheetContent side="right" className="w-full sm:max-w-md bg-background p-0 flex flex-col">
      <SheetHeader className="border-b px-6 py-4">
        <SheetTitle className="font-sans-body text-[13px] font-semibold uppercase tracking-[0.12em] text-center">
          Your Cart
        </SheetTitle>
      </SheetHeader>

      {/* Shipping progress */}
      <div className="border-b px-6 py-4">
        <p className="font-sans-body text-[11px] uppercase tracking-[0.1em] text-muted-foreground text-center mb-2">
          You're $49 away from free shipping!
        </p>
        <div className="h-1 w-full bg-border">
          <div className="h-1 bg-foreground" style={{ width: '0%' }} />
        </div>
      </div>

      {/* Empty state */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <p className="font-serif-display text-xl mb-2">Your cart is empty</p>
        <p className="font-sans-body text-[12px] text-muted-foreground mb-8">Add some items to get started</p>
      </div>

      {/* Best sellers suggestion */}
      <div className="border-t px-6 py-6">
        <p className="font-sans-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">Best Sellers</p>
        <div className="flex gap-3">
          {suggestedProducts.map((p) => (
            <Link to={`/products/${p.slug}`} key={p.slug} className="flex-1">
              <div className="aspect-[3/4] bg-secondary mb-2 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <p className="font-sans-body text-[11px]">{p.name}</p>
              <p className="font-sans-body text-[11px] text-muted-foreground">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Payment icons */}
      <div className="border-t px-6 py-4 flex items-center justify-center gap-2">
        {['Visa', 'MC', 'Amex', 'PayPal', 'GPay'].map((m) => (
          <span key={m} className="font-sans-body text-[9px] text-muted-foreground border px-2 py-1">{m}</span>
        ))}
      </div>
    </SheetContent>
  );
};

export default CartDrawer;
