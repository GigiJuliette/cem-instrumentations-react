import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './ParticlesBackground.css'

export default function ParticlesBackground({ bgColor, linksColor }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: { color: { value: { bgColor } } },
        particles: {
          number: { value: 250 },
          color: { value: linksColor },
          links: { enable: true, color: linksColor, distance: 150, opacity: .5, width: 1 },
          move: { enable: true, speed: 1, outMode: "bounce" },
          size: { value: 1 },
          shape: { type: "circle" },
        },
      }}
    />
  );
}
