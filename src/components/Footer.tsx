import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      {/* Tagline */}
      <div className="px-6 py-16 lg:px-10 text-center">
        <h2 className="font-serif-display text-3xl font-light tracking-wide md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-tight">
          Glassware + Accessories Designed by Coffee Lovers for Coffee Lovers.
        </h2>
      </div>

      {/* Links grid */}
      <div className="border-t px-6 py-12 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto">
          <div>
            <p className="font-sans-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">Glasses</p>
            <div className="flex flex-col gap-2">
              {['Espresso', 'Cortado', 'Tasting', 'Latte', 'Latte XL', 'Iced Coffee'].map((item) => (
                <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="font-sans-body text-[12px] text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">Barista Tools</p>
            <div className="flex flex-col gap-2">
              {['Happy Pucks', 'Mad Pucks', 'Coffee Tray', 'Carafe'].map((item) => (
                <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="font-sans-body text-[12px] text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">Sets</p>
            <div className="flex flex-col gap-2">
              {['Family Set', 'Latte Lovers', 'Espresso Lovers', 'Pourover Lovers'].map((item) => (
                <Link key={item} to={`/products/${item.toLowerCase().replace(' ', '-')}`} className="font-sans-body text-[12px] text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-sans-body text-[11px] font-semibold uppercase tracking-[0.12em] mb-4">Support</p>
            <div className="flex flex-col gap-2">
              {['Help Center', 'Warranty', 'Contact', 'Terms', 'Refund Policy', 'Privacy', 'Shipping'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="font-sans-body text-[12px] text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Studio text */}
      <div className="border-t overflow-hidden py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-serif-display text-6xl font-light tracking-widest text-border mx-8 md:text-8xl select-none">
              STUDIO GLASSWARE
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t px-6 py-4 text-center">
        <p className="font-sans-body text-[11px] text-muted-foreground">
          © 2024 Studio Glassware. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
