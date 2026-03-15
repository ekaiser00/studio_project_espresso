import { Link } from 'react-router-dom';

const GiftCardBanner = () => {
  return (
    <section className="border-y">
      <div className="grid md:grid-cols-2">
        <div className="aspect-square bg-secondary overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=800&h=800&fit=crop"
            alt="Gift Card"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-16 text-center md:px-16">
          <h2 className="font-serif-display text-4xl font-light tracking-wide md:text-5xl mb-4">Gift Studio</h2>
          <p className="font-sans-body text-[13px] text-muted-foreground leading-relaxed mb-8 max-w-sm">
            Not sure what to get? Give them the gift of choice with a Studio gift card. Available in any amount.
          </p>
          <Link
            to="/products/gift-card"
            className="border border-foreground px-8 py-3 font-sans-body text-[12px] font-medium uppercase tracking-[0.15em] text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GiftCardBanner;
