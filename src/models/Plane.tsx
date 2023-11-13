"use client"

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

type PlaneProps = {
    isRotating: boolean;
    position: [x: number, y: number, z: number];
    scale: [x: number, y: number, z: number];
    rotation: [x: number, y: number, z: number];
};

export const Plane = ({ isRotating, position, scale, rotation }: PlaneProps) => {
    const ref = useRef<any>();
    const { scene, animations } = useGLTF("/3d/plane.glb");
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions['Take 001']?.play();
        } else {
            actions['Take 001']?.stop();
        }
    }, [actions, isRotating]);

    return (
        <mesh position={position} scale={scale} rotation={rotation} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );

};

useGLTF.preload("/3d/plane.glb");
