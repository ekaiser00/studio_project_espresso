const AnnouncementBar = () => {
  const items = [
    'FREE SHIPPING ON ORDERS $49+',
    '★',
    'FREE CARAFE ON ORDERS $150+',
    '★',
    'FREE SHIPPING ON ORDERS $49+',
    '★',
    'FREE CARAFE ON ORDERS $150+',
    '★',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="bg-foreground text-background overflow-hidden py-2.5">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-sans-body mx-4 text-[11px] font-medium uppercase tracking-[0.15em]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
