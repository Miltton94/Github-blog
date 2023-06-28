import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  content: string
}

const PostContent = ({content}: PostContentProps) => {
  return (
    <section className="flex flex-col gap-4 py-10 px-8 mb-32">
      <ReactMarkdown 
      children={content}
      components={{
       h1: ({ children }) => (
          <h1 className="text-2xl font-bold text-blue">{children}</h1>
        ),
       h2: ({ children }) => (
          <h2 className="text-xl font-bold text-blue">{children}</h2>
        ),
       h3: ({ children }) => (
          <h3 className="text-lg font-bold text-blue">{children}</h3>
        ),
       strong: ({ children }) => (
          <strong className="text-2xl text-blue">{children}</strong>
        ),
       
      div: ({ children }) => (
          <div className="bg-post">{children}</div>
        ),
        
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dracula as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      /> 
    </section>
  )
}

export default PostContent