import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto max-w-6xl px-6 sm:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
};

export default Container;