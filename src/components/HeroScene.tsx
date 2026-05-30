import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Orb() {
  return (
    <mesh>
      <sphereGeometry args={[0.55, 64, 64]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#0ea5e9"
        emissiveIntensity={4}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

function Rings() {
  return (
    <group rotation={[0.4, 0, 0.15]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.022, 16, 200]} />
        <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={4} />
      </mesh>

      <mesh rotation={[Math.PI / 2 + 0.3, 0, 0]}>
        <torusGeometry args={[1.8, 0.016, 16, 200]} />
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={3.5} />
      </mesh>

      <mesh rotation={[Math.PI / 2 - 0.2, 0, 0.4]}>
        <torusGeometry args={[2.3, 0.011, 16, 200]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={3} />
      </mesh>

      <mesh rotation={[Math.PI / 2 + 0.5, 0, -0.3]}>
        <torusGeometry args={[2.75, 0.007, 16, 200]} />
        <meshStandardMaterial color="#818cf8" emissive="#6366f1" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <group>
        <Orb />
        <Rings />
      </group>

      <EffectComposer>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
