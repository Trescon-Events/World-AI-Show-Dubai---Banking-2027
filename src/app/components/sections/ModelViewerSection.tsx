"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export function ModelViewerSection() {
  return (
    <section className="relative py-20 bg-[#08121E] border-y-2 border-[#0069B8] overflow-hidden">
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Interactive <span className="text-[#009EAD]">3D Floorplan</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Explore the World AI Show | BFSI | Dubai 2027 venue in full 3D.
          </p>
        </div>
        <div className="w-full aspect-video min-h-[500px] max-h-[750px] relative max-w-5xl mx-auto">
          <ModelViewer modelUrl="https://pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev/models/floorplan-draco.glb" />
        </div>
      </div>
    </section>
  );
}
