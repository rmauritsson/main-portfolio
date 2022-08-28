import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    // returning an empty object returns the default values which are static with no interactivity
    //return {};
    return {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          //value: { min: 1, max: 4 },
          random: true,
        },
      },
      detectRetina: true,
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    //loadFull(engine);
  }, []);

  return (
    <>
      <Particles init={particlesInit} options={options} />
    </>
  );
};

export default ParticlesComponent;
