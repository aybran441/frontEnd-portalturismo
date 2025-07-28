import React from "react";                      // Importa React para usar JSX
import Navbar from "../components/navbar";     // Importa o componente Navbar para a barra de navegação
import Footer from "../components/footer";     // Importa o componente Footer para o rodapé
import corego from "../assets/imagens/corego.jpg"; // Importa a imagem de fundo para a página
import RegisterForm from "../components/registerform"; // Importa o formulário de cadastro

// Componente funcional RegisterPage que representa a página de registro/cadastro
const RegisterPage = () => {
  return (
    <>
      {/* Container principal com layout flex vertical, altura mínima da tela e altura fixa */}
      <div
        className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${corego})` }} // Define a imagem de fundo com cover e centralizado
      >
        {/* Barra de navegação no topo */}
        <Navbar />

        {/* Área principal que cresce e centraliza o formulário */}
        <div className="flex-grow flex items-center justify-center">
          {/* Componente do formulário de registro */}
          <RegisterForm />
        </div>

        {/* Rodapé fixado no final */}
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage; // Exporta o componente para uso em outras partes da aplicação
