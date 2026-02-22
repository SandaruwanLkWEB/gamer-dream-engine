import { motion } from "framer-motion";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  rating: number;
}

const GameCard = ({ title, image, category, rating }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground mt-1">{title}</h3>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-xs ${i < rating ? "text-primary" : "text-muted-foreground"}`}>
              ★
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
