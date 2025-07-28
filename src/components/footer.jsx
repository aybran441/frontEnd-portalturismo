// Importa o React
import React from "react";

// Importa ícones de redes sociais da biblioteca react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Define o componente funcional 'Footer'
const Footer = () => {
    return (
        <>
            {/* Rodapé com fundo em gradiente azul, texto preto e sombra */}
            <footer className="w-full bg-gradient-to-r from-blue-300 to-blue-700 text-black py-2 px-2 shadow-lg mt-auto">
                {/* Container com layout responsivo: empilhado no mobile e em linha no desktop */}
                <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                    
                    {/* Texto de direitos autorais centralizado no mobile, alinhado à esquerda no desktop */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-black">
                            Nova Serra Verde. Todos os direitos reservados
                        </p>
                    </div>

                    {/* Ícones de redes sociais com espaçamento entre eles */}
                    <div className="flex space-x-6">
                        {/* Cada link atualmente está com href="#" — idealmente, devem ser URLs válidas */}
                        <a href="#" className="hover:text-green-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-green-300">
                            <FaWhatsapp />
                        </a>
                        <a href="#" className="hover:text-green-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

// Exporta o componente para uso em outras partes da aplicação
export default Footer;