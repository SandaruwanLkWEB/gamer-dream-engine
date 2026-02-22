import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Trophy } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "All transactions are encrypted and secure." },
  { icon: Zap, title: "Instant Delivery", desc: "Get your game credits within seconds." },
  { icon: Users, title: "24/7 Support", desc: "Our team is always here to help you." },
  { icon: Trophy, title: "Best Prices", desc: "Competitive prices on all game top-ups." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em]">About Us</span>
            <h1 className="font-display text-5xl font-bold text-foreground mt-2 mb-4">
              Who We Are
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rivistore is Sri Lanka's leading gaming platform, providing instant game top-ups, 
              credits, and in-game purchases for your favorite games.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
