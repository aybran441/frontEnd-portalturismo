// Importa React para criar componentes funcionais
import React from 'react';
// Importa Link do react-router-dom (embora não esteja sendo usado no código)
import { Link } from "react-router-dom";

// Componente funcional Hero que recebe props para personalização
const Hero = (props) => {
    return (
        // Container principal com altura fixa, fundo configurado via prop, e estilos para centralizar conteúdo e texto branco
        <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${props.Background})` }} // Fundo dinâmico vindo das props
        >
            {/* Div vazia, sem função aparente, pode ser removida */}
            <div />

            {/* Container do conteúdo textual, com z-index para ficar sobre o fundo */}
            <div className="relative z-10 text-center p-4">

                {/* Título principal com tamanho responsivo, fonte em negrito, margem e sombra para destacar no fundo */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}  {/* Título passado via props */}
                </h1>

                {/* Parágrafo com tamanho responsivo, margem, largura máxima e sombra para melhorar legibilidade */}
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.paragrafo}  {/* Texto dinâmico via props */}
                    Nova Serra Azul     {/* Texto fixo adicional - cuidado pois fica junto do prop anterior */}
                </p>

                {/* Link estilizado como botão com cor de fundo azul que muda ao passar o mouse */}
                <a
                    href={props.rota}  // Link de navegação vindo das props
                    className="bg-blue-300 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                    {props.botao}      {/* Texto do botão via props */}
                </a>
              
            </div>
        </div>
    );
};

// Exporta o componente para uso em outros arquivos
export default Hero;