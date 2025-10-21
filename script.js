/* Espera o DOM carregar completamente antes de executar o script */
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Requisito Obrigatório: Validação do Formulário ---

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message'); // Elemento para feedback

    contactForm.addEventListener('submit', function(event) {
        // 1. Previne o envio padrão do formulário
        event.preventDefault(); 
        
        // 2. Coleta e limpa os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 3. Validação de campos vazios
        if (nome === '' || email === '' || mensagem === '') {
            exibirMensagem('Por favor, preencha todos os campos.', 'error');
            return; // Para a execução se houver erro
        }

        // 4. Validação do formato do e-mail
        if (!validarEmail(email)) {
            exibirMensagem('Por favor, insira um formato de e-mail válido (ex: usuario@dominio.com).', 'error');
            return; // Para a execução se houver erro
        }

        // 5. Simulação de Envio (Se tudo estiver válido)
        console.log('Dados do formulário:', { nome, email, mensagem });
        
        // Exibe mensagem de sucesso
        exibirMensagem('Mensagem enviada com sucesso!', 'success');
        
        // Limpa os campos do formulário
        contactForm.reset();
    });

    /**
     * Função auxiliar para validar e-mail usando uma expressão regular simples.
     * @param {string} email - O e-mail a ser validado.
     * @returns {boolean} - True se o e-mail for válido, false caso contrário.
     */
    function validarEmail(email) {
        // Expressão regular simples para validação de e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * Função auxiliar para exibir mensagens de feedback no formulário.
     * @param {string} msg - A mensagem a ser exibida.
     * @param {string} type - 'success' (verde) ou 'error' (vermelho).
     */
    function exibirMensagem(msg, type) {
        formMessage.textContent = msg;
        formMessage.style.color = (type === 'success') ? 'green' : 'red';
        
        // Limpa a mensagem após 5 segundos
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    }

    
    // --- Sugestão da Atividade: Tema Claro/Escuro ---

    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tem uma preferência salva
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function() {
        // Adiciona ou remove a classe 'dark-mode' do body
        document.body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

});
