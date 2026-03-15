import { Star } from 'lucide-react';

const SocialProofBar = () => {
  return (
    <div className="border-y py-5 flex items-center justify-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} className="text-foreground" />
        ))}
      </div>
      <span className="font-sans-body text-[12px] font-medium uppercase tracking-[0.12em]">
        60,000+ Happy Coffee Lovers
      </span>
    </div>
  );
};

export default SocialProofBar;
