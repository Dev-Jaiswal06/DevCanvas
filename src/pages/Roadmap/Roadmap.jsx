import { useCallback } from "react";
import { motion } from "framer-motion";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import SlideUp from "../../features/animations/SlideUp";

const initialNodes = [
  { id: "html", type: "input", position: { x: 300, y: 0 }, data: { label: "HTML", icon: "🌐", level: "Beginner", hours: 12, xp: 500 }, style: { background: "#E44D26", color: "#fff", borderRadius: "16px", padding: "16px 24px", fontSize: "16px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "css", position: { x: 300, y: 120 }, data: { label: "CSS", icon: "🎨", level: "Intermediate", hours: 20, xp: 800 }, style: { background: "#2965F1", color: "#fff", borderRadius: "16px", padding: "16px 24px", fontSize: "16px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "git", position: { x: 100, y: 120 }, data: { label: "Git & GitHub", icon: "🔀", level: "Beginner", hours: 8, xp: 300 }, style: { background: "#F05032", color: "#fff", borderRadius: "16px", padding: "16px 24px", fontSize: "14px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "javascript", position: { x: 300, y: 240 }, data: { label: "JavaScript", icon: "⚡", level: "Intermediate", hours: 40, xp: 1500 }, style: { background: "#F7DF1E", color: "#000", borderRadius: "16px", padding: "16px 24px", fontSize: "16px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "react", position: { x: 300, y: 360 }, data: { label: "React", icon: "⚛️", level: "Advanced", hours: 60, xp: 2500 }, style: { background: "#61DAFB", color: "#000", borderRadius: "16px", padding: "16px 24px", fontSize: "16px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "typescript", position: { x: 500, y: 360 }, data: { label: "TypeScript", icon: "📘", level: "Advanced", hours: 30, xp: 1200 }, style: { background: "#3178C6", color: "#fff", borderRadius: "16px", padding: "16px 24px", fontSize: "14px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "node", position: { x: 100, y: 360 }, data: { label: "Node.js", icon: "💚", level: "Advanced", hours: 40, xp: 1800 }, style: { background: "#339933", color: "#fff", borderRadius: "16px", padding: "16px 24px", fontSize: "14px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.1)" } },
  { id: "fullstack", type: "output", position: { x: 250, y: 500 }, data: { label: "Full Stack Dev", icon: "🚀", level: "Career", hours: 0, xp: 0 }, style: { background: "linear-gradient(135deg, #06b6d4, #a855f7)", color: "#fff", borderRadius: "20px", padding: "20px 32px", fontSize: "18px", fontWeight: "bold", border: "2px solid rgba(255,255,255,0.2)" } },
];

const initialEdges = [
  { id: "e-html-css", source: "html", target: "css", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" }, style: { stroke: "#06b6d4", strokeWidth: 2 } },
  { id: "e-html-git", source: "html", target: "git", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e-css-js", source: "css", target: "javascript", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" }, style: { stroke: "#06b6d4", strokeWidth: 2 } },
  { id: "e-git-js", source: "git", target: "javascript", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e-js-react", source: "javascript", target: "react", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" }, style: { stroke: "#06b6d4", strokeWidth: 2 } },
  { id: "e-js-ts", source: "javascript", target: "typescript", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e-js-node", source: "javascript", target: "node", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e-react-fs", source: "react", target: "fullstack", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" }, style: { stroke: "url(#gradient)", strokeWidth: 3 } },
  { id: "e-ts-fs", source: "typescript", target: "fullstack", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
  { id: "e-node-fs", source: "node", target: "fullstack", markerEnd: { type: MarkerType.ArrowClosed, color: "#a855f7" }, style: { stroke: "#a855f7", strokeWidth: 1.5, strokeDasharray: "5,5" } },
];

function CustomNode({ data }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl">{data.icon}</span>
      <div>
        <p className="font-bold">{data.label}</p>
        {data.level && <p className="text-[10px] opacity-70">{data.level} · {data.hours}h · ⭐{data.xp}</p>}
      </div>
    </div>
  );
}

const nodeTypes = { default: CustomNode };

function Roadmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      <div className="px-6 py-4 border-b border-white/10">
        <h1 className="text-xl font-bold gradient-text">🗺️ Frontend Roadmap</h1>
        <p className="text-xs text-gray-500">Interactive learning path · Drag to pan · Scroll to zoom</p>
      </div>
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls className="!bg-[#1E1E1E] !border-white/10 !rounded-xl [&>button]:!border-white/10 [&>button]:!text-white" />
          <MiniMap
            nodeColor="#1e293b"
            maskColor="rgba(0,0,0,0.5)"
            className="!bg-[#1E1E1E] !border-white/10 !rounded-xl"
          />
          <Background color="rgba(255,255,255,0.03)" gap={20} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Roadmap;
