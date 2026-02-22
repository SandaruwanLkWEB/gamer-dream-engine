import { motion } from "framer-motion";
import GameCard from "./GameCard";
import gameFreefire from "@/assets/game-freefire.jpg";
import gameCod from "@/assets/game-cod.jpg";
import gameGenshin from "@/assets/game-genshin.jpg";
import gameValorant from "@/assets/game-valorant.jpg";
import gameFortnite from "@/assets/game-fortnite.jpg";
import gameApex from "@/assets/game-apex.jpg";

const games = [
  { title: "Free Fire", image: gameFreefire, category: "Battle Royale", rating: 5 },
  { title: "Call of Duty Mobile", image: gameCod, category: "FPS", rating: 5 },
  { title: "Genshin Impact", image: gameGenshin, category: "RPG", rating: 4 },
  { title: "Valorant", image: gameValorant, category: "Tactical FPS", rating: 5 },
  { title: "Fortnite", image: gameFortnite, category: "Battle Royale", rating: 4 },
  { title: "Apex Legends", image: gameApex, category: "FPS", rating: 4 },
];

const GamesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Popular Games
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game, i) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GameCard {...game} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
