'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [color, setColor] = useState("#000000"); // Cor inicial
  const [svgContent, setSvgContent] = useState<string>("");

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
      className="w-full h-screen flex justify-center items-center" >
      {/* // style={{ backgroundColor: color }} */}
      
      {/* Color Picker */}
      <input 
        type="color" 
        value={color} 
        onChange={handleColorChange} 
        className="mt-10 absolute z-50 left-0"
      />

      <div className="w-[50rem] h-[50rem] relative">

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
  );
}
