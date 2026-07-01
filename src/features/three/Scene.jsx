import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";

function FloatingCube() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh position={[2, -1, -1]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#a855f7" wireframe />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh position={[-2, 1, -0.5]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial color="#22d3ee" wireframe />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#06b6d4" />
        <Stars count={500} depth={50} radius={100} factor={4} />
        <FloatingCube />
        <FloatingSphere />
        <FloatingTorus />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export default Scene3D;
