'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [color, setColor] = useState<string>("#000000"); // Cor inicial
  const [svgContent, setSvgContent] = useState<string>("");
  const [show, setShow] = useState<boolean>(false); // Cor inicial
  const [logoclick, setLogoclick] = useState<boolean>(false); // Cor inicial

  setTimeout(function() {
    setShow(true)
  }, 100)

  // Função para lidar com a mudança da cor
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  // Função para alterar a cor do SVG removendo styles embutidos
  const changeSvgColor = (svg: string, color: string) => {
    // Remover possíveis styles embutidos que interferem na mudança de cor
    const updatedSvg = svg
      .replace(/fill="[^"]*"/g, '') // Remove todos os atributos fill anteriores

    // Inserir a cor diretamente nos elementos com tag <path> ou <rect>
    return updatedSvg.replace(/(<path|<rect|<circle|<polygon)/g, `$1 fill="${color}"`);
  };

  // Função para carregar o SVG e atualizar sua cor
  useEffect(() => {
    fetch('/img/nikecolor.svg')
      .then((response) => response.text())
      .then((svg) => {
        const updatedSvg = changeSvgColor(svg, color);
        setSvgContent(updatedSvg);
      });
  }, [color]); // Recarrega o SVG sempre que a cor muda

  return (
    <div 
      className="w-full h-screen flex justify-center items-center" style={{ backgroundColor: color }}>

        <label htmlFor="colorPicker" className="absolute top-5 left-5 text-white z-50 flex" onClick={()=> setLogoclick(true)}>
          <Image 
            src='/img/logo.png' 
            alt="Imagem de fundo" 
            width={50} 
            height={50} 
            className="opacity-100 z-50"
          />
            <p className={`ml-5 flex justify-center place-items-center opacity-75 animate-fade-right ${logoclick?'hidden':'visible'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left mr-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
              Clique para alternar a cor do site
            </p>
        </label>
              
      {/* Color Picker */}
      <input 
        id="colorPicker"
        type="color" 
        value={color} 
        onChange={handleColorChange} 
        className="absolute z-50 left-5 top-10 opacity-0"
      />

      <div className="bg-g w-full h-screen absolute z-10 opacity-75"></div>

      <div className={`w-[50rem] h-[50rem] absolute z-40 mt-10 ml-10 rot1 duration-1000 ${show?'ml-10 opacity-100':'ml-0 opacity-0'}`}>
        <div className="ani1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Image 
          src='/img/nikerOver.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-30 opacity-40"
        />
        <div className="svg-container w-[93.8%] h-[93.8%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20" dangerouslySetInnerHTML={{ __html: svgContent }} />
      <Image 
          src='/img/nikerBase.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"
        />
        <Image 
          src='/img/frontshoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        />

        <Image 
          src='/img/backshoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        />

        <Image 
          src='/img/undershoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        />

        <Image 
          src='/img/snapshoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        />

        {/* <Image 
          src='/img/evelopshoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        /> */}

        <Image 
          src='/img/checkshoe.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50"
        />
        </div>
      </div>

      <div className={`w-[50rem] h-[50rem] absolute z-30 mt-[-8rem] ml-[-15rem] rot2 rotate-[20deg] duration-1000 ${show?'ml-[-15rem] opacity-100':'ml-0 opacity-0'}`}>
      <div className="ani2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Image 
          src='/img/nikerOver.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-30 opacity-40"
        />
        <div className="svg-container w-[93.8%] h-[93.8%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20" dangerouslySetInnerHTML={{ __html: svgContent }} />
      <Image 
          src='/img/nikerBase.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"
        />
        </div>
      </div>

      <Image 
          src='/img/bg-logo.png' 
          alt="Imagem de fundo" 
          width={1000} 
          height={1000} 
          unoptimized
          className="absolute w-auto h-full z-10 animate-fade-left"
        />

    </div>
  );
}
