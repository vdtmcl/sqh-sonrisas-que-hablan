import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Sphere } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";

function Nodes() {
  const group = useRef<Group>(null);
  const points = useMemo(
    () => [
      [-2.2, -0.5, 0],
      [-0.8, 0.7, 0.2],
      [0.4, -0.2, -0.1],
      [1.5, 0.8, 0.25],
      [2.2, -0.55, 0]
    ] as [number, number, number][],
    []
  );

  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.25) * 0.18;
  });

  return (
    <group ref={group}>
      <Line points={points} color="#174EFF" lineWidth={2} transparent opacity={0.7} />
      {points.map((point, index) => (
        <Sphere key={index} args={[index === 2 ? 0.11 : 0.075, 24, 24]} position={point}>
          <meshStandardMaterial color={index === 2 ? "#FF5F66" : "#174EFF"} roughness={0.45} />
        </Sphere>
      ))}
      <Line points={points.map(([x, y, z]) => [x, y + Math.sin(x) * 0.35, z - 0.3] as [number, number, number])} color="#FF5F66" lineWidth={1.4} transparent opacity={0.65} />
    </group>
  );
}

export function ConversationField() {
  return (
    <div className="absolute inset-0 hidden opacity-90 lg:block" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 44 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 2, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <Nodes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
