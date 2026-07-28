"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  Folder,
  FileCode,
  FileJson,
  FileType,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  Search,
  GitBranch,
  Settings,
  Play,
  Plus,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface FileNode {
  id: string;
  name: string;
  type: "file" | "folder";
  language?: string;
  content?: string;
  children?: FileNode[];
  isOpen?: boolean;
}

interface Tab {
  id: string;
  name: string;
  content: string;
  language: string;
}

// --- Mock Data ---
const initialFiles: FileNode[] = [
  {
    id: "src",
    name: "src",
    type: "folder",
    isOpen: true,
    children: [
      {
        id: "components",
        name: "components",
        type: "folder",
        isOpen: true,
        children: [
          {
            id: "Button.tsx",
            name: "Button.tsx",
            type: "file",
            language: "typescript",
            content: `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button
      className={\`px-4 py-2 rounded \${
        variant === 'primary' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`,
          },
          {
            id: "Header.tsx",
            name: "Header.tsx",
            type: "file",
            language: "typescript",
            content: `import React from 'react';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1>My App</h1>
    </header>
  );
};`,
          },
        ],
      },
      {
        id: "app.tsx",
        name: "App.tsx",
        type: "file",
        language: "typescript",
        content: `import React from 'react';
import { Button } from './components/Button';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-8">
        <h2>Welcome to my app</h2>
        <Button onClick={() => alert('Clicked!')}>
          Click me
        </Button>
      </main>
    </div>
  );
}

export default App;`,
      },
      {
        id: "index.css",
        name: "index.css",
        type: "file",
        language: "css",
        content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 
    'Courier New', monospace;
}`,
      },
    ],
  },
  {
    id: "package.json",
    name: "package.json",
    type: "file",
    language: "json",
    content: `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}`,
  },
  {
    id: "tsconfig.json",
    name: "tsconfig.json",
    type: "file",
    language: "json",
    content: `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,
  },
];

// --- Components ---

function FileIcon({ name, type }: { name: string; type: string }) {
  if (type === "folder") return <Folder className="w-4 h-4 text-[#dcb67a]" />;
  if (name.endsWith(".tsx") || name.endsWith(".ts"))
    return <FileCode className="w-4 h-4 text-[#519aba]" />;
  if (name.endsWith(".css")) return <FileType className="w-4 h-4 text-[#563d7c]" />;
  if (name.endsWith(".json")) return <FileJson className="w-4 h-4 text-[#cbcb41]" />;
  return <FileCode className="w-4 h-4 text-gray-400" />;
}

function SimpleSyntaxHighlight({ code, language }: { code: string; language: string }) {
  const lines = code.split("\n");
  
  const highlight = (line: string) => {
    // Very basic syntax highlighting for demo purposes
    let highlighted = line
      .replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|interface|type)\b/g, '<span class="text-[#c586c0]">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-[#569cd6]">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-[#ce9178]">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-[#b5cea8]">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="text-[#6a9955]">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="text-[#4ec9b0]">$1</span>');
    
    return highlighted;
  };

  return (
    <pre className="font-mono text-sm leading-6">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-12 text-right pr-4 text-[#858585] select-none flex-shrink-0">
            {i + 1}
          </span>
          <span 
            className="text-[#d4d4d4] whitespace-pre"
            dangerouslySetInnerHTML={{ __html: highlight(line) || "\u00a0" }}
          />
        </div>
      ))}
    </pre>
  );
}

function FileTree({
  nodes,
  level = 0,
  onFileClick,
  activeFileId,
}: {
  nodes: FileNode[];
  level?: number;
  onFileClick: (node: FileNode) => void;
  activeFileId: string | null;
}) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    const setOpen = (nodes: FileNode[]) => {
      nodes.forEach((node) => {
        if (node.type === "folder" && node.isOpen) {
          initial[node.id] = true;
          if (node.children) setOpen(node.children);
        }
      });
    };
    setOpen(nodes);
    return initial;
  });

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="text-sm">
      {nodes.map((node) => (
        <div key={node.id}>
          <div
            className={cn(
              "flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-[#2a2d2e]",
              activeFileId === node.id && node.type === "file" && "bg-[#37373d]"
            )}
            style={{ paddingLeft: `${level * 12 + 8}px` }}
            onClick={() => {
              if (node.type === "folder") {
                toggleFolder(node.id);
              } else {
                onFileClick(node);
              }
            }}
          >
            {node.type === "folder" && (
              openFolders[node.id] ? (
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              )
            )}
            {node.type === "file" && <span className="w-3.5" />}
            <FileIcon name={node.name} type={node.type} />
            <span className="text-[#cccccc] text-[13px]">{node.name}</span>
          </div>
          {node.type === "folder" && openFolders[node.id] && node.children && (
            <FileTree
              nodes={node.children}
              level={level + 1}
              onFileClick={onFileClick}
              activeFileId={activeFileId}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// --- Main Page Component ---
export default function VSCodeClone() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleFileClick = useCallback((node: FileNode) => {
    if (node.type !== "file" || !node.content) return;
    
    setActiveFileId(node.id);
    
    const existingTab = tabs.find((t) => t.id === node.id);
    if (!existingTab) {
      const newTab: Tab = {
        id: node.id,
        name: node.name,
        content: node.content,
        language: node.language || "text",
      };
      setTabs((prev) => [...prev, newTab]);
    }
    setActiveTab(node.id);
  }, [tabs]);

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    const newTabs = tabs.filter((t) => t.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId) {
      if (newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1].id);
        setActiveFileId(newTabs[newTabs.length - 1].id);
      } else {
        setActiveTab(null);
        setActiveFileId(null);
      }
    }
  };

  // Resize handlers
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing && sidebarRef.current) {
        const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;
        if (newWidth > 150 && newWidth < 500) {
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] text-white flex flex-col overflow-hidden font-sans">
      {/* Title Bar */}
      <div className="h-9 bg-[#181818] flex items-center justify-between px-3 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-gray-400 ml-3">VS Code Web — my-project</span>
        </div>
        <div className="flex items-center gap-3">
          <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#181818] flex flex-col items-center py-2 gap-4 border-r border-[#2b2b2b]">
          <div className="p-2 bg-[#37373d] rounded cursor-pointer">
            <FileCode className="w-6 h-6 text-white" />
          </div>
          <div className="p-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          <div className="p-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
            <GitBranch className="w-6 h-6 text-gray-400" />
          </div>
          <div className="p-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
            <Play className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Sidebar */}
        {sidebarVisible && (
          <>
            <div
              ref={sidebarRef}
              className="bg-[#181818] border-r border-[#2b2b2b] flex flex-col"
              style={{ width: sidebarWidth }}
            >
              <div className="h-9 flex items-center px-4 text-xs font-bold text-[#bbbbbb] uppercase tracking-wider">
                Explorer
              </div>
              <div className="flex-1 overflow-y-auto">
                <FileTree
                  nodes={initialFiles}
                  onFileClick={handleFileClick}
                  activeFileId={activeFileId}
                />
              </div>
            </div>
            <div
              className="w-1 cursor-col-resize hover:bg-[#007acc] active:bg-[#007acc]"
              onMouseDown={startResizing}
            />
          </>
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Tabs */}
          <div className="flex bg-[#181818] overflow-x-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 min-w-[120px] max-w-[200px] cursor-pointer border-t-2 text-sm select-none",
                  activeTab === tab.id
                    ? "bg-[#1e1e1e] border-t-[#007acc] text-white"
                    : "bg-[#2d2d2d] border-t-transparent text-[#969696] hover:bg-[#2a2d2e]"
                )}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveFileId(tab.id);
                }}
              >
                <FileIcon name={tab.name} type="file" />
                <span className="truncate flex-1">{tab.name}</span>
                <button
                  className="hover:bg-[#4e4e4e] rounded p-0.5"
                  onClick={(e) => closeTab(e, tab.id)}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {tabs.length === 0 && (
              <div className="flex-1" />
            )}
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto">
            {activeTabData ? (
              <div className="p-4">
                <SimpleSyntaxHighlight
                  code={activeTabData.content}
                  language={activeTabData.language}
                />
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-[#6e6e6e]">
                <FileCode className="w-24 h-24 mb-4 opacity-20" />
                <p className="text-lg">Select a file to start editing</p>
                <p className="text-sm mt-2">Use the Explorer sidebar to browse files</p>
                <div className="mt-8 flex gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <span className="bg-[#2d2d2d] px-2 py-1 rounded">Ctrl</span>
                    <span className="bg-[#2d2d2d] px-2 py-1 rounded">P</span>
                    <span className="ml-1">Quick Open</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-xs text-white select-none">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                <span>main</span>
              </div>
              <div className="flex items-center gap-1">
                <X className="w-3.5 h-3.5" />
                <span>0 errors</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {activeTabData && (
                <>
                  <span>{activeTabData.language.toUpperCase()}</span>
                  <span>UTF-8</span>
                </>
              )}
              <span>Ln 1, Col 1</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
