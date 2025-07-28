import React from "react";                      // Importa React para usar JSX
import Navbar from "../components/navbar";     // Importa o componente Navbar (barra de navegação)
import Footer from "../components/footer";     // Importa o componente Footer (rodapé)
import AboutHero from "../components/AboutHero"; // Importa componente AboutHero (seção principal da página Sobre)
import corego from "../assets/imagens/corego.jpg"; // Importa imagem para usar como background

// Componente funcional About que representa a página "Sobre"
const About = () => {
  return (
    // Container principal da página com flex para layout em coluna,
    // altura mínima da tela inteira, fundo com imagem responsiva
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${corego})` }}  // Define a imagem de fundo usando inline style
    >
      {/* Renderiza a barra de navegação no topo */}
      <Navbar />

      {/* Renderiza o componente AboutHero, passando título e parágrafo como props */}
      <AboutHero 
        titulo="minha experiencia"
        paragrafo={
          `Criar essa página foi uma jornada incrível de aprendizado e prática com React e Tailwind CSS.
          Aprendi a estruturar componentes, aplicar estilos com Tailwind e trabalhar com imagens de fundo responsivas.
          Também melhorei minha organização de arquivos e a reutilização de componentes como Navbar e Footer.
          Estou animado para continuar evoluindo e aplicando esses conhecimentos em projetos futuros, e VAI CORINTHIANS!!`
        }
      />

      {/* Renderiza o rodapé na parte inferior da página */}
      <Footer />
    </div>
  );
};

export default About;  // Exporta o componente para ser usado em outras partes da aplicação
