import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="px-6 py-24 lg:px-10 max-w-3xl mx-auto text-center">
        <h1 className="font-serif-display text-5xl font-light tracking-wide md:text-6xl mb-8">About Studio</h1>
        <p className="font-sans-body text-[14px] text-muted-foreground leading-relaxed mb-6">
          Studio was born from a simple idea: coffee deserves beautiful glassware. We design every piece with intention — 
          clean lines, premium borosilicate glass, and proportions made for the way you actually drink.
        </p>
        <p className="font-sans-body text-[14px] text-muted-foreground leading-relaxed">
          From our first espresso glass to our growing collection of barista tools, everything we make is designed 
          by coffee lovers, for coffee lovers.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
