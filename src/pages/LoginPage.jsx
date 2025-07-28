import React from "react";                   // Importa React para usar JSX
import Navbar from "../components/navbar";  // Importa o componente Navbar para a barra de navegação
import Footer from "../components/footer";  // Importa o componente Footer para o rodapé
import LoginForm from "../components/loginForm";  // Importa o formulário de login

// Componente funcional loginPage que representa a página de login do site
const loginPage = () => {
  return (
    <>
      {/* Container principal com layout flex em coluna e altura mínima da tela */}
      <div className="flex flex-col min-h-screen">
        {/* Barra de navegação fixa no topo */}
        <Navbar />

        {/* Área central que cresce para ocupar espaço restante e centraliza o conteúdo */}
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          {/* Formulário de login centralizado */}
          <LoginForm />
        </div>

        {/* Rodapé posicionado ao final da página */}
        <Footer />
      </div>
    </>
  );
};

export default loginPage;  // Exporta o componente para uso em outras partes da aplicação