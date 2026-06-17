"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Geëxtrudeerde achtpuntige ster (khatam) in echt 3D, goudmetaal. */
function StarMesh() {
  const ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const spikes = 8;
    const outer = 1;
    const inner = 0.44;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.34,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.07,
      bevelSegments: 4,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={ref} geometry={geometry} rotation={[0.35, 0, 0]} scale={1.15}>
        <meshStandardMaterial
          color="#c9a24f"
          metalness={0.55}
          roughness={0.28}
          emissive="#5e4a1f"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

/** 3D-scène — pointer-events uit zodat de pagina blijft scrollen op mobiel. */
export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 6]} intensity={1.8} color="#fff2d4" />
      <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#d8bd84" />
      <pointLight position={[0, 0, 5]} intensity={2.4} color="#fff6df" />

      <StarMesh />
    </Canvas>
  );
}
