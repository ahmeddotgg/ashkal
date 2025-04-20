import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface WrapperProps {
	className?: string;
	children: ReactNode;
}

export function Wrapper({ children, className }: WrapperProps) {
	return <div className={cn("container", className)}>{children}</div>;
}
