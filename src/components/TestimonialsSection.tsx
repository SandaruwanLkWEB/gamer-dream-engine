import { motion } from "framer-motion";

const testimonials = [
  { name: "Emma Johnson", text: "This app is amazing! It made my gaming so much easier and faster.", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Liam Smith", text: "Great experience! The design is clean and very easy to use.", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Sophia Davis", text: "I love how smooth everything works. Highly recommended!", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Noah Wilson", text: "Customer support was quick and helpful. Really appreciate it!", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Olivia Brown", text: "One of the best platforms I've used. It's super user-friendly.", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "William Moore", text: "The features are just what I needed. Very smart and intuitive.", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Ava Taylor", text: "Everything works perfectly. I've already told my friends about it.", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "James Anderson", text: "I've tried many apps before, but this one is definitely the best.", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
];

const TestimonialsSection = () => {
  // Duplicate for infinite scroll effect
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
          Testimonials
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
          Verified Rivistore Users
        </h2>
      </motion.div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-left w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-72 shrink-0 rounded-lg bg-card border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/30"
                />
                <h3 className="font-display text-base font-semibold text-foreground">
                  {t.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
