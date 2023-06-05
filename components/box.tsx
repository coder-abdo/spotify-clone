import { twMerge } from "tailwind-merge";
import type { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Box: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        bg-neutral-900
        rounded-lg
        h-fit
        w-full 
  `,
        className
      )}
    >
      {children}
    </div>
  );
};
