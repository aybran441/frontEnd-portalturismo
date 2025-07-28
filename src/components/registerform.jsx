import axios from "axios";           // Importa axios para fazer requisições HTTP
import React, { useState } from "react";  // Importa React e hook useState

// Componente funcional RegisterForm para cadastro de usuários
const RegisterForm = () => {
  // Estado para armazenar nome do usuário
  const [nome, setNome] = useState('');
  // Estado para armazenar email
  const [email, setEmail] = useState('');
  // Estado para armazenar senha
  const [senha, setSenha] = useState('');

  // Função assíncrona chamada ao enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();  // Evita o comportamento padrão de recarregar a página

    try {
      // Envia uma requisição POST para o backend com dados do formulário
      const response = await axios.post("http://localhost:5000/api/users", {
        name: nome,
        email,         // shorthand para email: email
        password: senha
      });

      // Exibe alerta confirmando o cadastro com dados recebidos na resposta
      alert(
        "Usuario cadastrado com sucesso!!" +
        ` nome: ${response.data.name} email: ${response.data.email}`
      );

      // Redireciona para página de login após cadastro
      window.location.href = "/login";
    } catch (error) {
      // Se erro de resposta do servidor (ex: status 4xx ou 5xx)
      if (error.response) {
        alert("Erro ao cadastrar usuario");
      } else {
        // Se erro de conexão, servidor fora do ar etc.
        alert("Erro ao conectar ao servidor");
      }
    }
  };

  return (
    <>
      {/* Container branco com sombra, bordas arredondadas e largura máxima */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Título do formulário */}
        <h2 className="text-2xl font-semibold text-center mb-6">Cadastrar</h2>

        {/* Formulário com onSubmit para disparar handleSubmit */}
        <form onSubmit={handleSubmit}>

          {/* Campo para nome */}
          <div>
            <label>Nome</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={nome}                       // Controlado pelo estado nome
              onChange={(e) => setNome(e.target.value)}  // Atualiza estado no input
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none
                focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              placeholder="Digite seu Nome"
            />
          </div>

          {/* Campo para email */}
          <div>
            <label>E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}                      // Controlado pelo estado email
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                focus:ring-2 focus:ring-purple-500 text-sm sm:text-base mb-2"
              placeholder="Digite seu Email"
            />

            {/* Campo para senha */}
            <div>
              <label>Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                value={senha}                    // Controlado pelo estado senha
                onChange={(e) => setSenha(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                  focus:ring-2 focus:ring-purple-500 text-sm sm:text-base mb-2"
                placeholder="Digite sua senha"
              />
            </div>
          </div>

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2
              rounded-lg transition duration-300 w-full sn:w-full mt-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;