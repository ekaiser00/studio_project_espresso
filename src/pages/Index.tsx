import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialProofBar from '@/components/SocialProofBar';
import ProductSection from '@/components/ProductSection';
import GiftCardBanner from '@/components/GiftCardBanner';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import { sets, glasses, baristaTools } from '@/lib/products';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProductSection title="Sets" subtitle="Curated collections for every coffee lover" products={sets} layout="scroll" />
        <div className="border-t" />
        <ProductSection title="Glasses" subtitle="Handcrafted borosilicate glass for every drink" products={glasses} layout="grid" />
        <div className="border-t" />
        <ProductSection title="Barista Tools" subtitle="Elevate your coffee ritual" products={baristaTools} layout="scroll" />
        <GiftCardBanner />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
