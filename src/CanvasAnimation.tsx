import React, { useRef, useEffect } from 'react';

function LissajousCurveAnimation({ A, B, a, b, delta, speed }) {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Referencja do elementu canvas
  const canvasSize = 400; // Rozmiar canvas

  let animationId: number; // ID animacji

  // Funkcja rysująca ślad krzywej Lissajous
  const drawTrace = (context: CanvasRenderingContext2D, t: number, lastX: number, lastY: number) => {
    context.beginPath(); // Rozpoczęcie nowej ścieżki
    context.moveTo(lastX, lastY); // Przesunięcie na punkt początkowy ścieżki

    // Pętla generująca punkty krzywej
    for (let i = 0; i <= t; i += 0.01) { // mniejszy krok dla płynniejszych linii
      const x = canvasSize / 2 + A * Math.sin(a * i + delta); // Współrzędna x
      const y = canvasSize / 2 + B * Math.sin(b * i); // Współrzędna y
      context.lineTo(x, y); // Rysowanie linii do nowego punktu
    }

    context.lineWidth = 2; // Grubość linii
    context.stroke(); // Rysowanie śladu
  };

  // Funkcja animująca rysowanie krzywej
  const animate = (context: CanvasRenderingContext2D, startTime: number, lastX: number, lastY: number) => {
    const currentTime = Date.now(); // Aktualny czas
    const elapsedTime = currentTime - startTime; // Czas od rozpoczęcia animacji
    drawTrace(context, elapsedTime / (1000 * speed), lastX, lastY); // Rysowanie krzywej
    animationId = requestAnimationFrame(() => animate(context, startTime, lastX, lastY)); // Zaplanowanie kolejnej klatki animacji
  };

  useEffect(() => {
    const canvas = canvasRef.current; // Odwołanie do elementu canvas
    if (!canvas) return;

    const context = canvas.getContext('2d'); // Kontekst rysowania 2D
    if (!context) return;

    let lastX = canvasSize / 2 + A * Math.sin(a * 0 + delta); // Początkowa współrzędna x
    let lastY = canvasSize / 2 + B * Math.sin(b * 0); // Początkowa współrzędna y

    const startTime = Date.now(); // Początkowy czas animacji
    animate(context, startTime, lastX, lastY); // Rozpoczęcie animacji

    // Funkcja czyszcząca po zakończeniu animacji
    return () => cancelAnimationFrame(animationId);
  }, [A, B, a, b, delta, speed]);

  return <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />; // Element canvas
}

export default LissajousCurveAnimation;
