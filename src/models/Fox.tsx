"use client"

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

type FoxProps = {
    currentAnimation: string;
    position: [number, number, number];
    scale: [number, number, number];
    rotation: [number, number, number];
};

export function Fox({ currentAnimation, position, scale, rotation }: FoxProps) {
    const group = useRef();
    const { nodes, materials, animations }: any = useGLTF("/3d/fox.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        Object.values(actions).forEach((action) => action?.stop());
        if (actions[currentAnimation]) actions[currentAnimation]?.play();
    }, [actions, currentAnimation]);

    return (
        // @ts-ignore
        <group ref={group} position={position} scale={scale} rotation={rotation} dispose={null}>
            <group name="Sketchfab_Scene">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/3d/fox.glb");
