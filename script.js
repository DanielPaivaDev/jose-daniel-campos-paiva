document.addEventListener('DOMContentLoaded', function() {
    
    // -- VALIDANDO FORM

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            exibirMensagem('Por favor, preencha todos os campos.', 'error');
            return;
        }

        if (!validarEmail(email)) {
            exibirMensagem('Por favor, insira um formato de e-mail válido (ex: usuario@dominio.com).', 'error');
            return;
        }

        console.log('Dados do formulário:', { nome, email, mensagem });
        
        exibirMensagem('Mensagem enviada com sucesso!', 'success');
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
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    }


    const themeToggle = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

});
