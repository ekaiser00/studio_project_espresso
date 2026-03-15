import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="px-6 py-24 lg:px-10 max-w-3xl mx-auto text-center">
        <h1 className="font-serif-display text-5xl font-light tracking-wide md:text-6xl mb-8">Warranty</h1>
        <p className="font-sans-body text-[14px] text-muted-foreground leading-relaxed mb-6">
          Every Studio product is backed by our satisfaction guarantee. If your glassware arrives damaged or develops 
          a defect, we'll replace it — no questions asked.
        </p>
        <p className="font-sans-body text-[14px] text-muted-foreground leading-relaxed">
          Contact us at support@studioglassware.com for warranty claims.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Warranty;
