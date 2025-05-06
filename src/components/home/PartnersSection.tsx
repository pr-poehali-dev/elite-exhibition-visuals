
const PartnersSection = () => {
  const partners = [
    "ГМИИ им. А.С. Пушкина",
    "Cosmoscow",
    "Галерея \"К35\"",
    "The Art Newspaper Russia"
  ];

  return (
    <section className="py-16 md:py-24 bg-exhibition-anthracite border-t border-exhibition-gold/10">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <h2 className="text-3xl font-serif font-semibold mb-4">
            Сотрудничество с <span className="text-exhibition-aquamarine">лидерами</span> рынка
          </h2>
          <p className="text-foreground/70">
            Мы гордимся партнерством с ведущими галереями, аукционными домами и финансовыми институтами
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center reveal">
          {partners.map((partner, i) => (
            <div key={i} className="flex justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="h-12 w-auto px-4 bg-foreground/10 rounded-md flex items-center justify-center">
                <div className="font-serif text-exhibition-gold text-sm md:text-lg font-medium">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
