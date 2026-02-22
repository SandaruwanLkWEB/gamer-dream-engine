import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
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
          <Store className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold text-primary text-glow">Rivistore</span>
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Full Name" className="bg-muted border-border" required />
          <Input type="email" placeholder="Email" className="bg-muted border-border" required />
          <Input type="password" placeholder="Password" className="bg-muted border-border" required />
          <Input type="password" placeholder="Confirm Password" className="bg-muted border-border" required />
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-display text-lg box-glow">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
