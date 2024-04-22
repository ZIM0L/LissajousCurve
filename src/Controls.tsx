import React, { useState } from 'react';
import LissajousCurveAnimation from './CanvasAnimation'; // Import komponentu animacji krzywej Lissajous

function LissajousCurveController() {
  const [A, setA] = useState(100); // Amplituda wzdłuż osi x
  const [B, setB] = useState(100); // Amplituda wzdłuż osi y
  const [a, seta] = useState(3); // Częstość wzdłuż osi x
  const [b, setb] = useState(2); // Częstość wzdłuż osi y
  const [delta, setDelta] = useState(180); // Faza przesunięcia w radianach
  const [speed, setSpeed] = useState(1); // Szybkość animacji

  // Funkcja konwertująca stopnie na radiany
  const toRadians = (deg) => (deg * Math.PI) / 180;

  // Obsługa zmiany wartości w polach wejściowych
  const handleInputChange = (event) => {
    const target = event.target;
    const value = parseFloat(target.value);
    const name = target.name;

    switch (name) {
      case 'A':
        setA(value);
        break;
      case 'B':
        setB(value);
        break;
      case 'a':
        seta(value);
        break;
      case 'b':
        setb(value);
        break;
      case 'delta':
        setDelta(value); // Ustawienie wartości fazy w radianach
        break;
      case 'speed':
        setSpeed(value); // Ustawienie wartości szybkości animacji
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex-auto text-left border-solid border-2 border-black p-3 mb-3 laptop:mb-0'>
      <form className='w-full flex flex-col'>
        <label>
          Amplituda A: &nbsp;
          {A}
        </label>
        <span>
        </span>
        <input type="range" name="A" min="0" max="200" value={A} onChange={handleInputChange} />
        <br />
        <label>
          Amplituda B: &nbsp;
        {B}
        </label>
        <input type="range" name="B" min="0" max="200" value={B} onChange={handleInputChange} />
        <br />
        <label>
          Częstość a: &nbsp;
        {a}
        </label>
        <input type="range" name="a" min="0" max="10" step="0.1" value={a} onChange={handleInputChange} />
        <br />
        <label>
          Częstość b: &nbsp;
        {b}
        </label>
        <input type="range" name="b" min="0" max="10" step="0.1" value={b} onChange={handleInputChange} />
        <br />
        <label>
          Delta(∠): &nbsp;
          {delta}
        </label>
        <input type="range" name="delta" min="0" max="360" step="1" value={delta} onChange={handleInputChange} />
        <br />
        <label>
          Szybkość: &nbsp;
        {speed}
        </label>
        <input type="range" name="speed" min="0.1" max="10" step="0.1" value={speed} onChange={handleInputChange} />
      </form>
      {/* Renderowanie komponentu animacji krzywej Lissajous */}
      <div className='flex justify-center'>
      <LissajousCurveAnimation key={`${A}-${B}-${a}-${b}-${delta}`} A={A} B={B} a={a} b={b}  delta={toRadians(delta)} speed={speed} />
      </div>
    </div>
  );
}

export default LissajousCurveController;
