"use client"

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import { Island } from "@/models/Island";
import { Sky } from "@/models/Sky";
import { Bird } from "@/models/Bird";
import { Plane } from "@/models/Plane";
import { HomeInfo } from "@/components/HomeInfo";

export default function Home() {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3];
    let screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4];

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative ">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage ? <HomeInfo currentStage={currentStage} /> : null}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* @ts-ignore */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird />
          <Sky
            isRotating={isRotating}
          />
          <Island
            // @ts-ignore
            position={islandPosition}
            // @ts-ignore
            scale={islandScale}
            // @ts-ignore
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            // @ts-ignore
            position={planePosition}
            // @ts-ignore
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
