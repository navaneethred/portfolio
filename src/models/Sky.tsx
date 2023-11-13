"use client"

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Sky = ({ isRotating }: { isRotating: boolean }) => {
    const sky = useGLTF("/3d/sky.glb");
    const skyRef = useRef<any>();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta;
        }
    });

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );

};

useGLTF.preload("/3d/sky.glb");
