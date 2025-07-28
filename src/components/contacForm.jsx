// Importa o React e o hook useState para gerenciar estado local
import React, { useState } from "react";

// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Define o componente funcional 'ContactForm'
const ContactForm = () => {
  // Estado que armazena os dados do formulário
  const [formData, setFormData] = useState({
    name: "",     // Nome do usuário
    email: "",    // Email do usuário
    message: "",  // Mensagem enviada
  });

  // Função para atualizar os dados conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,                         // Mantém os dados anteriores
      [e.target.name]: e.target.value,     // Atualiza o campo alterado dinamicamente
    });
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    try {
      // Envia os dados do formulário via POST para o back-end
      const response = await axios.post("http://localhost:5000/api/contacts", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Se a requisição for bem-sucedida, exibe um alerta com os dados
      alert("menssagem cadastrada com sucesso!!" + `nome: ${formData.name} email: ${formData.email}`);

      // Redireciona o usuário para a página inicial
      window.location.href = "/";
    } catch (error) {
      // Se houver resposta do servidor com erro
      if (error.response) {
        alert("Erro ao cadastrar usuário");
      } else {
        alert("erro ao conectar ao servidor");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url($)` }} // ⚠️ Erro: URL da imagem de fundo está vazia
    >
      {/* Card de formulário com fundo branco semi-transparente */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Entre em contato</h2>

        {/* Formulário de envio */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite seu nome"
            />
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite seu e-mail"
            />
          </div>

          {/* Campo Mensagem */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Digite sua mensagem..."
            />
          </div>

          {/* Botão de envio */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-md transition duration-300 w-full"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Exporta o componente para que ele possa ser usado em outros lugares
export default ContactForm;