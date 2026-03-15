import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&h=1080&fit=crop"
        alt="The Matcha Set"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-background px-4">
        <h1 className="font-serif-display text-5xl font-light tracking-wide md:text-7xl lg:text-8xl mb-4">
          The Matcha Set
        </h1>
        <p className="font-sans-body text-[13px] font-light tracking-[0.1em] uppercase mb-8 max-w-md">
          Everything you need for the perfect matcha at home
        </p>
        <Link
          to="/products/matcha-set"
          className="border border-background px-8 py-3 font-sans-body text-[12px] font-medium uppercase tracking-[0.15em] text-background hover:bg-background hover:text-foreground transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
