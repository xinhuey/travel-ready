import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Globe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;
    let animationId;
    let globe;

    const timer = setTimeout(() => {
      if (!canvasRef.current) return;

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 1200,
        height: 1200,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 0.8,
        mapSamples: 36000,
        mapBrightness: 4,
        mapBaseBrightness: 0.5,
        baseColor: [0.1, 0.3, 0.6],
        markerColor: [0.4, 0.8, 1.0],
        glowColor: [0.3, 0.5, 1.0],
        markers: [
          { location: [14.5995, 120.9842], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.1 },
          { location: [23.8103, 90.4125], size: 0.05 },
          { location: [30.0444, 31.2357], size: 0.07 },
          { location: [39.9042, 116.4074], size: 0.08 },
          { location: [-23.5505, -46.6333], size: 0.1 },
          { location: [19.4326, -99.1332], size: 0.1 },
          { location: [40.7128, -74.006], size: 0.1 },
          { location: [34.6937, 135.5022], size: 0.05 },
          { location: [41.0082, 28.9784], size: 0.06 },
        ],
        onRender: (state) => {
          phi += 0.003;
          state.phi = phi;
        },
      });

      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={1200}
      style={{
        width: "600px",
        height: "600px",
        opacity: 0,
        transition: "opacity 1s ease",
        display: "block",
      }}
    />
  );
}
