import React, { useState } from "react";

// Componente funcional LoginForm para formulário de login
const LoginForm = () => {
  // Estado para armazenar o email digitado
  const [email, setEmail] = useState('');
  // Estado para armazenar a senha digitada
  const [senha, setSenha] = useState('');

  // Função chamada no envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevê comportamento padrão (recarregar página)
    
    // Exibe um alert com email e senha digitados (para testes)
    alert(`Email: ${email} \<nsenha:${senha}`);
  };

  return (
    <>
      {/* Container branco com sombra, borda arredondada e largura máxima */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Título do formulário */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        
        {/* Formulário com evento onSubmit */}
        <form onSubmit={handleSubmit}>
          {/* Campo para email */}
          <div>
            <label>E-mail</label>
            <input
              id="Email"
              type="Email" // Tipo de input (deveria ser "email" em minúsculo)
              name="Email"
              value={email} // Estado email controla valor do input
              onChange={(e) => setEmail(e.target.valeu)} // Atualiza estado ao digitar — **Erro: 'valeu' deve ser 'value'**
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Digite seu Email"
            />
          </div>

          {/* Campo para senha */}
          <div>
            <label>Senha</label>
            <input
              id="Senha"
              type="Senha" // Tipo de input errado — deve ser "password" (minusculo)
              name="Senha"
              value={senha} // Estado senha controla valor do input
              onChange={(e) => setSenha(e.target.valeu)} // Atualiza estado ao digitar — **Erro: 'valeu' deve ser 'value'**
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Digite sua senha"
            />
          </div>

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-rounded-b-lg hover:bg-blue-300 transition pt-3"
          >
            Entrar
          </button>
        </form>

        {/* Texto para cadastro */}
        <p className="mt-6 text-center text-sm text-gray-60000">não tem conta?</p>
        <a href="/register" className="text-green-600 hover:underline text-center p-2">
          Cadastre-se
        </a>
      </div>
    </>
  );
};

export default LoginForm;