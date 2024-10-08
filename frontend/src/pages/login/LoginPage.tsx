import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  return (
    <div className="container  flex justify-center items-center h-screen">
      <a
        className={cn(buttonVariants())}
        href="http://localhost:8000/api/v1/auth/google/callback"
      >
        Login with Google
      </a>
    </div>
  );
};

export default LoginPage;
