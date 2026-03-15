import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Mobile menu */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif-display text-2xl font-bold tracking-wide lg:text-3xl">
          STUDIO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="font-sans-body text-[13px] font-medium uppercase tracking-[0.12em] text-foreground hover:text-muted-foreground transition-colors">
              Products
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                <div className="border bg-background p-6 min-w-[200px]">
                  <div className="flex flex-col gap-3">
                    <Link to="/products/glasses" className="font-sans-body text-[13px] uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors">Glasses</Link>
                    <Link to="/products/barista-tools" className="font-sans-body text-[13px] uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors">Barista Tools</Link>
                    <Link to="/products/sets" className="font-sans-body text-[13px] uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors">Sets</Link>
                    <Link to="/products/gift-card" className="font-sans-body text-[13px] uppercase tracking-[0.1em] hover:text-muted-foreground transition-colors">Gift Card</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="font-sans-body text-[13px] font-medium uppercase tracking-[0.12em] text-foreground hover:text-muted-foreground transition-colors">
            About
          </Link>
          <Link to="/warranty" className="font-sans-body text-[13px] font-medium uppercase tracking-[0.12em] text-foreground hover:text-muted-foreground transition-colors">
            Warranty
          </Link>
        </nav>

        {/* Cart */}
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger asChild>
            <button className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center bg-foreground text-background font-sans-body text-[9px] font-bold">
                0
              </span>
            </button>
          </SheetTrigger>
          <CartDrawer />
        </Sheet>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link to="/products/glasses" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">Glasses</Link>
            <Link to="/products/barista-tools" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">Barista Tools</Link>
            <Link to="/products/sets" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">Sets</Link>
            <Link to="/products/gift-card" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">Gift Card</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">About</Link>
            <Link to="/warranty" onClick={() => setMobileMenuOpen(false)} className="font-sans-body text-[13px] uppercase tracking-[0.12em]">Warranty</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
