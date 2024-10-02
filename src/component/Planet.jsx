import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./planet.module.css";
import firsttext from "../assets/texture1.jpg";
import secondtext from "../assets/texture2.jpg";
import thirdtext from "../assets/texture3.jpg";

const planetTexture = {
  first: firsttext,
  second: secondtext,
  third: thirdtext,
};
// import Page1_info from "./Page1_info";
export default function Planet({ planets, setPlanet }) {
  const mountRef = useRef(null);
  //useEffect==> here it allows using three.js
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 0.7, 0.1, 10);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(230, 300);
    mountRef.current.appendChild(renderer.domElement);
    //gets texture
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const currentPlanetTexture = planetTexture[planets];
    setPlanet = planetTexture[planets];

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      setPlanet,
      (texture) => {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.5,
          metalness: 0,
        });

        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 27); // Soft white light
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Main white light
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          planet.rotation.y += 0.01; // Rotate the planet
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error); // Error handling
      }
    );

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [planets]);
  return (
    <div>
      <div className={styles.Revolvee} ref={mountRef} />
    </div>
  );
}
