import React from "react";                            // Importa React para usar JSX
import Navbar from "../components/navbar";           // Importa componente Navbar para a barra de navegação
import Footer from "../components/footer";           // Importa componente Footer para o rodapé
import Background from "../assets/imagens/montamha.jpg"  // Importa imagem de fundo da página

// Componente funcional KnowPage que representa uma página informativa chamada "Nova Serra Azul"
const KnowPage = () => {
  return (
    <>
      {/* Container principal da página */}
      <div 
        className="mih-h-screen bg-cover bg-center text-white" 
        style={{background: `url(${Background})`}}   // Define a imagem de fundo via estilo inline
      >

        {/* Overlay preto com opacidade para escurecer o fundo e melhorar contraste do texto */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div> 
        
        {/* Conteúdo da página com z-index maior para ficar sobre o overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Barra de navegação no topo */}
          <Navbar />

          {/* Conteúdo principal da página */}
          <main className="flex-grow flex flex-col items-center justify-center px-4">
            
            {/* Bloco de texto centralizado com título e parágrafo */}
            <div className="max-w-3xl text-center py-16">
              <h1 className="text-5xl font-bold mb-6">sobre A NOva Serra Azul</h1>
              <p className="text-lg leading-relaxed mb-10">
                🌍 Explore novos destinos e transforme seus sonhos em realidade!
                “Descubra o mundo, viva aventuras inesquecíveis.” ✈️
              </p>
            </div>

            {/* Segundo bloco de texto com título e parágrafo */}
            <div className="max-w-3xl text-center py-16">
              <h1 className="text-5xl font-bold mb-6">sobre A NOva Serra Azul</h1>
              <p className="text-lg leading-relaxed mb-10">
                🌟 Sua próxima aventura começa aqui!
                “Viaje mais, descubra mais, viva mais.” ✈️🌴
              </p>
            </div>
          </main>

          {/* Rodapé da página */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default KnowPage;  // Exporta o componente para uso em outras partes da aplicação