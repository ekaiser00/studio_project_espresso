import { useParams } from 'react-router-dom';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductPage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="px-6 py-24 lg:px-10 max-w-3xl mx-auto text-center">
        <h1 className="font-serif-display text-5xl font-light tracking-wide md:text-6xl mb-8 capitalize">
          {slug?.replace(/-/g, ' ')}
        </h1>
        <p className="font-sans-body text-[14px] text-muted-foreground leading-relaxed">
          Product details coming soon.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
