import React from "react";                             // Importa React para usar JSX
import Navbar from "../components/navbar";            // Importa o componente Navbar para a barra de navegação
import Footer from "../components/footer";            // Importa o componente Footer para o rodapé
import Hero from "../components/hero";                // Importa o componente Hero para o banner principal da página
import Background from "../assets/imagens/flores.jpg" // Importa a imagem de fundo da página

// Componente funcional Home que representa a página inicial do site
const Home = () => {
    return (
        // Container principal com layout flex em coluna e altura mínima da tela
        // Também define a imagem de fundo via estilo inline
        <div 
            className="flex flex-col min-h-screen" 
            style={{backgroundImage: `url(${Background})`}}
        >
            {/* Barra de navegação no topo */}
            <Navbar />

            {/* Componente Hero que recebe várias props para título, texto, rota do botão e texto do botão */}
            <Hero 
                titulo="Portal de Serviços" 
                paragrafo="Venha conhecer os mais diversos serviços de turismo" 
                rota="/Know" 
                botao="Saiba mais " 
            />

            {/* Rodapé posicionado no final da página */}
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Home;  // Exporta o componente para ser usado em outras partes da aplicação
