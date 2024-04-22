import React from "react";

const About = () => {
  return (
    <div className="flex-auto w-fit border-solid border-2 border-black p-3 laptop:ml-3 text-left">
      <img src="text.png" alt="" />
      <br />
      <p>
        to rodzaj krzywej parametrycznej, która opisuje ruch oscylacyjny. Jest
        to krzywa wygenerowana przez równania sinusoidalne w dwóch wymiarach,
        gdzie częstotliwości drgań w obu kierunkach mogą być różne, co prowadzi
        do różnorodnych kształtów krzywych. W zależności od stosunku częstości
        drgań wzdłuż osi x i y oraz fazy początkowej, krzywe Lissajous mogą
        przyjmować różne kształty, takie jak elipsy, koła, kwadraty, czy
        bardziej złożone wzory.
      </p>
      <div className="flex flex-col tablet:flex-row">
        <div className=" p-2 text-left border-solid border-2 border-black mb-2 tablet:mb-0">
          <h1 className=" font-bold">Wizualizacja</h1>
          <img src="Circular_Lissajous.gif" alt="" />
        </div>
        <div className=" p-2 text-left border-solid border-2 border-black tablet:ml-1">
          <h1 className=" font-bold">Możliwości</h1>
          <img src="lissajous20picture.jpg" alt="" width={"430px"} />
        </div>
      </div>
    </div>
  );
};

export default About;
