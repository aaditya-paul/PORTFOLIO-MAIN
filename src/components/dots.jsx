import {useEffect, useState, useRef, useCallback} from "react";

function Dots() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [containerSize, setContainerSize] = useState({width: 0, height: 0});
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Update container size based on hero section dimensions
    const updateContainerSize = () => {
      // Use full viewport size for hero section
      setContainerSize({width: window.innerWidth, height: window.innerHeight});
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  const throttledMouseMove = useCallback((e) => {
    // Throttle mouse position updates using requestAnimationFrame
    if (animationFrameRef.current) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      // Calculate mouse position relative to the canvas
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
      animationFrameRef.current = null;
    });
  }, []);

  useEffect(() => {
    // Track mouse position with throttling
    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [throttledMouseMove]);

  // Optimized dots using Canvas API instead of DOM elements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerSize.width || !containerSize.height) return;

    const ctx = canvas.getContext("2d");
    canvas.width = containerSize.width;
    canvas.height = containerSize.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dotSpacing = 40; // Increased spacing to reduce dot count
    const radius = 200; // Reduced radius for better performance
    const maxDots = 500; // Limit maximum dots

    let dotCount = 0;

    // Only render dots in viewport with culling
    for (
      let y = 0;
      y < containerSize.height && dotCount < maxDots;
      y += dotSpacing
    ) {
      for (
        let x = 0;
        x < containerSize.width && dotCount < maxDots;
        x += dotSpacing
      ) {
        // Calculate distance from mouse
        const dx = x - mousePosition.x;
        const dy = y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Set color and opacity based on distance
        let opacity = 0.15; // Default opacity
        let color = "246, 246, 246"; // Default gray

        if (distance <= radius) {
          const intensity = Math.max(1 - distance / radius, 0.2);
          opacity = intensity * 0.6;
          color = "244, 187, 68"; // Orange color near mouse
        }

        // Draw dot using canvas
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI);
        ctx.fill();

        dotCount++;
      }
    }
  }, [mousePosition, containerSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default Dots;
