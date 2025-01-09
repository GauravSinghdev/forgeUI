import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";

interface LoadingBtnProps extends ButtonProps {
  loading: boolean;
}

export default function LoadingBtn({
  loading,
  disabled,
  className,
  ...props
}: LoadingBtnProps) {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {props.children}
      {loading && <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
}