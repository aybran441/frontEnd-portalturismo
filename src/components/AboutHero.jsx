// Importa o React, que é necessário para criar componentes funcionais
import React from "react";

// Define o componente funcional 'aboutHero' que recebe 'props' como argumento
const aboutHero = (props) => {
  return (
    <>
      {/* Container principal com fundo em gradiente azul, altura definida, margem e centralização do conteúdo */}
      <div
        className="bg-gradient-to-r from-blue-300 to-blue-700 relative h-[630px] m-8 mt-16 bg-cover bg-center flex items-center justify-center text-white"
      >
        {/* Container interno com z-index para garantir que o conteúdo fique acima do fundo */}
        <div className="relative z-10 text-center p-4">
          
          {/* Título principal, com tamanho de fonte grande, sombra para destaque e margem inferior */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.titulo} {/* Insere o título vindo das props */}
          </h1>

          {/* Parágrafo de descrição, com tamanho de fonte médio, sombra e centralização */}
          <p className="text-lg md:text-x1 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.paragrafo} {/* Insere o parágrafo vindo das props */}
          </p>

          {/* H2 vazio (possivelmente para uso futuro, talvez um subtítulo ou destaque adicional) */}
          <h2 className="text-5xl font-semibold mb-7 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {/* Pode ser preenchido futuramente */}
          </h2>

        </div>
      </div>
    </>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default aboutHero;