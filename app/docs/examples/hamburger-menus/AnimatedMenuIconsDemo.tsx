import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type AnimatedMenuIconDemoProps = {
  title: string;
  description: string;
  component: React.ComponentType<any>;
  codeSnippet: string;
};

export default function AnimatedMenuIconDemo({ title, description, component: Component, codeSnippet }: AnimatedMenuIconDemoProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(true);

  const handleCopy = (): void => {
    const codeToCopy: string = showComments
      ? codeSnippet
      : codeSnippet
          .split("\n")
          .filter((line: string) => !line.includes("//"))
          .join("\n");
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const processedCode: string = showComments
    ? codeSnippet
    : codeSnippet
        .split("\n")
        .filter((line: string) => !line.includes("//"))
        .join("\n");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center items-center h-32 bg-secondary rounded-md">
            <Component isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
          </div>

          <div className="relative">
            <div className="absolute right-2 top-2 flex space-x-2 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowComments(!showComments)}
                className="text-xs h-7 px-2"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopy} className="text-xs h-7 px-2">
                {copied ? <CheckIcon className="h-3 w-3" /> : <CopyIcon className="h-3 w-3" />}
              </Button>
            </div>
            <div className="font-mono text-sm rounded-md overflow-hidden ">
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{ margin: 0, borderRadius: "0.5rem", backgroundColor: "#232323", padding: "1.5rem 1rem" }}
              >
                {processedCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
