import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imgClassName,
  showWordmark = true,
}: {
  className?: string;
  imgClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt="G-TECH"
        width={40}
        height={40}
        className={cn("h-9 w-9 shrink-0", imgClassName)}
        priority
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-tight">G-ADV</span>
          <span className="text-[10px] font-medium tracking-wide text-muted-foreground">
            by G-TECH
          </span>
        </span>
      )}
    </div>
  );
}
