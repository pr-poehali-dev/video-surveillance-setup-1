import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TelegramWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform"
        asChild
      >
        <a 
          href="https://t.me/moskcompany" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
        >
          <Icon name="Send" size={28} />
        </a>
      </Button>
    </div>
  );
};

export default TelegramWidget;
