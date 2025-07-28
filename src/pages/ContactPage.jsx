import React from "react";                    // Importa o React para usar JSX
import Navbar from "../components/navbar";   // Importa o componente Navbar para a barra de navegação
import Footer from "../components/footer";   // Importa o componente Footer para o rodapé
import ContactForm from "../components/contacForm"; // Importa o componente ContactForm para o formulário de contato (atenção: pode haver erro de digitação no nome do arquivo "contacForm")

// Componente funcional ContactPage que representa a página de contato do site
const ContactPage = () => {
    return (
        // Container principal com flexbox em coluna e altura mínima da tela inteira
        <div className="flex flex-col min-h-screen">
            {/* Barra de navegação na parte superior da página */}
            <Navbar />

            {/* Conteúdo principal da página */}
            <div className="mt-auto">
                {/* Formulário de contato */}
                <ContactForm />
            </div>

            {/* Rodapé fixado na parte inferior da página */}
            <Footer />
        </div>
    );
};

export default ContactPage;  // Exporta o componente para que possa ser usado em outras partes da aplicação
