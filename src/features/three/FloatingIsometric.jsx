import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";

function CodeBlock({ position, color, label }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <group position={position}>
        <RoundedBox args={[2, 1.2, 0.3]} radius={0.1}>
          <meshStandardMaterial color={color} transparent opacity={0.9} />
        </RoundedBox>
        <Text position={[0, 0, 0.2]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
          {label}
        </Text>
      </group>
    </Float>
  );
}

function FloatingIsometric() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
        <CodeBlock position={[0, 0, 0]} color="#06b6d4" label="HTML" />
        <CodeBlock position={[1.5, -0.5, -0.5]} color="#a855f7" label="CSS" />
        <CodeBlock position={[-1.5, 0.5, -0.5]} color="#22d55e" label="JS" />
        <CodeBlock position={[0, -1, -1]} color="#eab308" label="React" />
      </Canvas>
    </div>
  );
}

export default FloatingIsometric;
