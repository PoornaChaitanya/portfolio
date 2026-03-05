import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1.5px solid var(--color-primary)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 40,
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "var(--color-primary)",
      border: "none",
      mixBlendMode: "difference",
      opacity: 0.2,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-100 hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
      {/* Small dot that rigidly follows cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-100 hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          transition: "transform 0.05s linear",
        }}
      />
    </>
  );
};

export default CustomCursor;
