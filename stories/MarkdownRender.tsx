import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';import remarkGfm from 'remark-gfm';import rehypeSlug from 'rehype-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';

type MarkdownRenderProps = {
  content: string;
};

type CodeProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const MarkdownRender: FC<MarkdownRenderProps> = ({ content }) => {
  const components: Components = {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');

      if (!inline && match) {
        const code = String(children).replace(/\n$/, '');
        const [copied, setCopied] = useState(false);

        const handleCopy = async () => {
          try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch (err) {
            console.error('Copy failed:', err);
          }
        };

        return (
          <div className="code-block-container">
            <button
              onClick={handleCopy}
              className="copy-button"
            >
              {copied ? '✅' : '📋'}
            </button>
            <SyntaxHighlighter
              style={prism as any}
              language={match[1]}
              PreTag="div"
              customStyle={{
                margin: 0,
                padding: '0.5rem',
                borderRadius: '6px',
              }}
              {...props}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      <ReactMarkdown components={components} rehypePlugins={[rehypeRaw, rehypeSlug]}
  remarkPlugins={[remarkGfm]} >
        {content}
      </ReactMarkdown>
      <style>
        {`
        .code-block-container {
            position: relative;
        }

        .copy-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            z-index: 10;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            background-color: white;
            border: none;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.15s ease-in-out, background-color 0.15s;
        }

        
        @media (min-width: 851px) {
            .code-block-container:hover .copy-button {
                opacity: 1;
            }
        }

        @media (max-width: 850px) {
            .copy-button {
                opacity: 1;
            }
        }

        .copy-button:hover {
            background-color: #f3f4f6;
        }
        
        .badge-wrapper > p {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5px;
          }
        `}
      </style>
    </>
  );
};
