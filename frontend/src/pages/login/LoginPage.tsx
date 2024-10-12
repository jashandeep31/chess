import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container h-4/5 bg-accent rounded-lg flex flex-col  items-center justify-center gap-10">
        <div>
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-center">
            Join The <span className="text-green-gradient">Ultimate</span> Chess
            Experience.
          </h1>
        </div>
        <a
          className={cn(
            buttonVariants(),
            "bg-gradient-to-r from-green-900 to-green-500 font-bold text-xl"
          )}
          href="http://localhost:8000/api/v1/auth/google/callback"
        >
          Login with Google
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
