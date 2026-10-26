"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Interactive3DHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const getWidth = () => container.clientWidth || window.innerWidth;
    const getHeight = () => container.clientHeight || window.innerHeight;

    // 1. Scene, Camera & WebGL Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a0e, 0.022);

    const camera = new THREE.PerspectiveCamera(
      55,
      getWidth() / getHeight(),
      0.1,
      1000
    );
    camera.position.set(0, 4.5, 25);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(getWidth(), getHeight());

    // 2. Mouse & Touch Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onPointerMove = (clientX: number, clientY: number) => {
      mouse.targetX = (clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // 3. Undulating Cyber Terrain Mesh (Electric Cyan #10d7ff)
    const gridWidth = 95;
    const gridDepth = 95;
    const gridSegments = 64;
    const terrainGeo = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegments,
      gridSegments
    );
    terrainGeo.rotateX(-Math.PI / 2);

    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x10d7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.position.y = -6.5;
    scene.add(terrain);

    const terrainPos = terrainGeo.attributes.position;
    const initialTerrainY = new Float32Array(terrainPos.count);
    for (let i = 0; i < terrainPos.count; i++) {
      initialTerrainY[i] = terrainPos.getY(i);
    }

    // 4. Flowing Neural Data Highway Streams (Alternating #b5f43b & #10d7ff)
    const streamCount = 8;
    const linesGroup = new THREE.Group();
    scene.add(linesGroup);

    const streamMaterials = [
      new THREE.LineBasicMaterial({
        color: 0xb5f43b,
        transparent: true,
        opacity: 0.75,
        linewidth: 2,
      }),
      new THREE.LineBasicMaterial({
        color: 0x10d7ff,
        transparent: true,
        opacity: 0.65,
        linewidth: 2,
      }),
      new THREE.LineBasicMaterial({
        color: 0xb5f43b,
        transparent: true,
        opacity: 0.45,
      }),
      new THREE.LineBasicMaterial({
        color: 0x10d7ff,
        transparent: true,
        opacity: 0.35,
      }),
    ];

    const streamsData: {
      line: THREE.Line;
      basePoints: THREE.Vector3[];
      speed: number;
      freqOffset: number;
    }[] = [];

    for (let i = 0; i < streamCount; i++) {
      const points: THREE.Vector3[] = [];
      const yBase = -2.5 + (i % 4) * 1.5;
      const xOffset = (i - streamCount / 2) * 5.2;

      for (let j = 0; j <= 28; j++) {
        const z = (j / 28) * 65 - 32;
        const x = xOffset + Math.sin(j * 0.35 + i) * 3.5;
        const y = yBase + Math.cos(j * 0.3 + i * 0.8) * 1.6;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(
        curveGeo,
        streamMaterials[i % streamMaterials.length]
      );
      linesGroup.add(line);
      streamsData.push({
        line,
        basePoints: points,
        speed: 0.75 + i * 0.12,
        freqOffset: i * 0.6,
      });
    }

    // 5. Two-Tone Glowing AI Constellation Particles (#b5f43b & #10d7ff)
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const coords = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const voltLime = new THREE.Color(0xb5f43b);
    const electricCyan = new THREE.Color(0x10d7ff);

    for (let i = 0; i < particleCount * 3; i += 3) {
      coords[i] = (Math.random() - 0.5) * 75;
      coords[i + 1] = (Math.random() - 0.5) * 42;
      coords[i + 2] = (Math.random() - 0.5) * 50;

      const chosenColor = Math.random() > 0.5 ? voltLime : electricCyan;
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(coords, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const generateGlowTexture = () => {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.85)");
        gradient.addColorStop(0.45, "rgba(181, 244, 59, 0.45)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(c);
    };

    const glowTexture = generateGlowTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Animate undulating cyber terrain
      for (let i = 0; i < terrainPos.count; i++) {
        const vx = terrainPos.getX(i);
        const vz = terrainPos.getZ(i);
        const wave =
          Math.sin(vx * 0.18 + t * 1.35) * 0.8 +
          Math.cos(vz * 0.22 + t * 1.1) * 0.8;
        terrainPos.setY(i, initialTerrainY[i] + wave);
      }
      terrainPos.needsUpdate = true;

      // Animate data stream highways
      for (let i = 0; i < streamsData.length; i++) {
        const stream = streamsData[i];
        const positions = stream.line.geometry.attributes.position;
        for (let j = 0; j < stream.basePoints.length; j++) {
          const bp = stream.basePoints[j];
          positions.setY(
            j,
            bp.y +
              Math.sin(t * stream.speed + j * 0.25 + stream.freqOffset) * 0.65
          );
          positions.setX(j, bp.x + Math.cos(t * 0.45 + i) * 0.35);
        }
        positions.needsUpdate = true;
      }

      // Particle field subtle orbit & mouse parallax
      particleSystem.rotation.y = t * 0.025 + mouse.x * 0.18;
      particleSystem.rotation.x =
        Math.sin(t * 0.02) * 0.05 - mouse.y * 0.12;

      // Camera tilt towards cursor
      camera.position.x = mouse.x * 3.2;
      camera.position.y = 4.5 + mouse.y * 1.8;
      camera.lookAt(0, -1, 0);

      renderer.render(scene, camera);
    };

    const onResize = () => {
      const width = getWidth();
      const height = getHeight();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
      terrainGeo.dispose();
      terrainMat.dispose();
      streamsData.forEach((s) => s.line.geometry.dispose());
      streamMaterials.forEach((m) => m.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      glowTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden z-0"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(16, 215, 255, 0.08) 0%, rgba(7, 10, 14, 1) 85%)",
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing"
      />
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 35%, rgba(7, 10, 14, 0.8) 100%)",
        }}
      />
    </div>
  );
}
