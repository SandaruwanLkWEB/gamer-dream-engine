import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gamepad2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Coming soon!", description: "Backend not yet connected." });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card border border-border rounded-lg p-8"
      >
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold text-primary text-glow">TopGamer</span>
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground text-center mb-6">Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" placeholder="Email" className="bg-muted border-border" required />
          <Input type="password" placeholder="Password" className="bg-muted border-border" required />
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-display text-lg box-glow">
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
