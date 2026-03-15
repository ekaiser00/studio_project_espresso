import { Star } from 'lucide-react';
import { reviews } from '@/lib/products';

const ReviewsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-10">
      {/* Summary */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} className="text-foreground" />
          ))}
        </div>
        <p className="font-sans-body text-[12px] text-muted-foreground uppercase tracking-[0.1em]">
          2k+ Product Reviews · 577 Store Reviews
        </p>
      </div>

      {/* Reviews carousel */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 lg:-mx-10 lg:px-10">
        {reviews.map((review, i) => (
          <div key={i} className="min-w-[300px] flex-shrink-0 border p-6 lg:min-w-[350px]">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={12} fill="currentColor" strokeWidth={0} className="text-foreground" />
              ))}
            </div>
            <p className="font-sans-body text-[13px] leading-relaxed mb-4">{review.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans-body text-[12px] font-medium">{review.name}</p>
                {review.verified && (
                  <p className="font-sans-body text-[10px] text-muted-foreground uppercase tracking-wider">Verified Buyer</p>
                )}
              </div>
              <p className="font-sans-body text-[11px] text-muted-foreground">{review.date}</p>
            </div>
            <div className="mt-3 pt-3 border-t">
              <p className="font-sans-body text-[11px] text-muted-foreground">{review.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
