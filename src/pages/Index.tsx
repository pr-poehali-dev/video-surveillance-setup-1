import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import EquipmentSection from '@/components/EquipmentSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import TelegramWidget from '@/components/TelegramWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <EquipmentSection />
      <PortfolioSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
      <TelegramWidget />
    </div>
  );
};

export default Index;