
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export const CodeBlock = ({ code, className }: CodeBlockProps) => {
  return (
    <pre className={cn(
      "p-4 rounded-lg bg-[#1A1F2C] text-white overflow-x-auto font-mono text-sm",
      className
    )}>
      <code>{code}</code>
    </pre>
  );
};
