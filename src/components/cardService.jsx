// Importa a biblioteca React, necessária para definir componentes funcionais
import React from "react";

// Define o componente funcional 'CardService', que recebe propriedades (props)
const CardService = (props) => {
  return (
    <>
      {/* Container principal do card */}
      <div
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto
        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Imagem do card, preenchida via props */}
        <img
          src={props.img}        // URL da imagem passada por props
          alt={props.alt}        // Texto alternativo (acessibilidade) vindo das props
          className="w-full h-48 sm:h-56 md:h-64 object-cover"  // Responsividade e corte da imagem
        />

        {/* Área de conteúdo textual do card */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Título do card */}
          <h1 className="text-lg sm:text-xl font-semibold text-gray-950">
            {props.titulo}        {/* Título passado pelas props */}
          </h1>

          {/* Descrição abaixo do título */}
          <p className="text-gray-800 mt-2 text-sm sm:text-base">
            {props.descricao}     {/* Descrição passada pelas props */}
          </p>

          {/* Botão/link com texto personalizado */}
          <a
            href={props.link}     // URL de destino passada pelas props
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-4 rounded-3xl text-center
              hover:bg-blue-300 transition duration-300"
          >
            {props.botao}         {/* Texto do botão passado pelas props */}
          </a>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para que ele possa ser utilizado em outros arquivos
export default CardService;