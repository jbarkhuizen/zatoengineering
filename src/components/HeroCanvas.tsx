"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MechanicalGearCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    // 1. Create a single persistent instance of the modern THREE.Timer
    const timerRef = useRef(new THREE.Timer());

    useFrame(() => {
        if (meshRef.current) {
            const timer = timerRef.current;

            timer.update();

            const elapsedTime = timer.getElapsed();

            meshRef.current.rotation.z = elapsedTime * 0.25
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh ref={meshRef}>
                /*TorusKnot creates an interlocking, heavy machinery style layout */
                <torusKnotGeometry args={[1.4, 0.4, 120, 3, 4]} />
                <meshStandardMaterial 
                    color="#a1a1aa"
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>
        </Float>
    );
}

export default function  HeroCanvas() {
    return (
        <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
            <pointLight position={[-5, -5, -2]} intensity={2} color="#b8860b" />

            <MechanicalGearCore />
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
}