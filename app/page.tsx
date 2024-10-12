'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [color, setColor] = useState<string>("#032035"); // Cor inicial
  const [svgContent, setSvgContent] = useState<string>("");
  const [show, setShow] = useState<boolean>(false); // Cor inicial
  const [logoclick, setLogoclick] = useState<boolean>(false); // Cor inicial

  const [darkbase, setDarkbase] = useState<boolean>(false); // Cor inicial
  const [darkfront, setDarkfront] = useState<boolean>(false); // Cor inicial
  const [darkback, setlDarkback] = useState<boolean>(false); // Cor inicial
  const [darkunder, setDarkunder] = useState<boolean>(false); // Cor inicial
  const [darknap, setDarknap] = useState<boolean>(false); // Cor inicial
  const [darkmark, setDarkmark] = useState<boolean>(false); // Cor inicial
  const [darkevelop, setDarkevelop] = useState<boolean>(false); // Cor inicial
  const [darkcheck, setDarkcheck] = useState<boolean>(false); // Cor inicial
  const [darkcadar, setDarkcadar] = useState<boolean>(false); // Cor inicial
  const [darktamp, setDarktamp] = useState<boolean>(false); // Cor inicial

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
    fetch('/img/nikecolor2.svg')
      .then((response) => response.text())
      .then((svg) => {
        const updatedSvg = changeSvgColor(svg, color);
        setSvgContent(updatedSvg);
      });
  }, [color]); // Recarrega o SVG sempre que a cor muda

  return (
    <div className="w-full h-screen flex justify-center items-center" style={{ backgroundColor: color }}>

      <div className="w-auto h-5 absolute top-5 right-5 z-50">
        <div className="inline">
          <p className="text-sm text-center mt-3">BASE</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-white border-4 ${!darkbase?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkbase(false)}></div>
            <div className={`bg-black border-4 ${darkbase?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkbase(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">SOLA</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkunder?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkunder(false)}></div>
            <div className={`bg-black border-4 ${darkunder?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkunder(true)}></div>
          </div>
        </div> 

        <div className="inline">
          <p className="text-sm text-center mt-3">FRONTAL</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkfront?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkfront(false)}></div>
            <div className={`bg-black border-4 ${darkfront?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkfront(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">TAMPA FRONTAL</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-white border-4 ${!darktamp?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarktamp(false)}></div>
            <div className={`bg-black border-4 ${darktamp?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarktamp(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">TRASEIRA</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkback?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setlDarkback(false)}></div>
            <div className={`bg-black border-4 ${darkback?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setlDarkback(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">SUPERIOR TRASEIRA</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darknap?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarknap(false)}></div>
            <div className={`bg-black border-4 ${darknap?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarknap(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">MARCA</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-white border-4 ${!darkmark?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkmark(false)}></div>
            <div className={`bg-black border-4 ${darkmark?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkmark(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">LOGOTIPO</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkcheck?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkcheck(false)}></div>
            <div className={`bg-black border-4 ${darkcheck?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkcheck(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">CADARÇO</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkcadar?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkcadar(false)}></div>
            <div className={`bg-black border-4 ${darkcadar?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkcadar(true)}></div>
          </div>
        </div>

        <div className="inline">
          <p className="text-sm text-center mt-3">SUPERIOR</p>
          <div className="flex cursor-pointer justify-center">
            <div className={`bg-slate-400 border-4 ${!darkevelop?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkevelop(false)}></div>
            <div className={`bg-black border-4 ${darkevelop?'border-sky-700':'border-slate-600'} duration-300 rounded-full w-8 h-8 mx-1`} onClick={()=>setDarkevelop(true)}></div>
          </div>
        </div>
      </div>

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
            
      <input id="colorPicker" type="color" value={color} onChange={handleColorChange} className="absolute z-50 left-5 top-10 opacity-0"/>

      <div className="bg-g w-full h-screen absolute z-10 opacity-75"></div>

    {/* Tenis 1 */}
      <div className={`w-[50rem] h-[50rem] absolute z-40 mt-10 ml-10 rot1 duration-1000 ${show?'ml-10 opacity-100':'ml-0 opacity-0'}`}>
        <div className="ani1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="svg-container w-[93.8%] h-[93.8%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20" dangerouslySetInnerHTML={{ __html: svgContent }} />
        <Image src='/img/nikerOver.png' alt="Imagem de fundo" width={1000} height={1000} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-30 opacity-40"/>
        <Image src='/img/nikertampblack.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darktamp?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/nikertampwhite.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${!darktamp?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/nikerBase.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${!darkbase?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10`}/>
        <Image src='/img/nikerBaseDark.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkbase?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10`}/>
        <Image src='/img/frontshoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkfront?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/backshoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkback?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/undershoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkunder?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/snapshoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darknap?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/markblack.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkmark?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/markwhite.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${!darkmark?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/evelopshoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkevelop?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/checkshoe.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkcheck?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        <Image src='/img/cadar.png' alt="Imagem de fundo" width={1000} height={1000} className={`absolute duration-300 ${darkcadar?'opacity-100':'opacity-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-50`}/>
        </div>
      </div>

    {/* Tenis 2 */}
      <div className={`w-[50rem] h-[50rem] absolute z-30 mt-[-8rem] ml-[-15rem] rot2 rotate-[20deg] duration-1000 ${show?'ml-[-15rem] opacity-100':'ml-0 opacity-0'}`}>
      <div className="ani2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Image src='/img/nikerOver.png' alt="Imagem de fundo" width={1000} height={1000} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-30 opacity-40"/>
        <div className="svg-container w-[93.8%] h-[93.8%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20" dangerouslySetInnerHTML={{ __html: svgContent }} />
      <Image src='/img/nikerBase.png' alt="Imagem de fundo" width={1000} height={1000} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10"/>
        </div>
      </div>

    {/* Nike escrito no background */}
      <Image src='/img/bg-logo.png' alt="Imagem de fundo" width={1000} height={1000} className="absolute w-auto h-full z-10 animate-fade-left"/>

    </div>
  );
}
