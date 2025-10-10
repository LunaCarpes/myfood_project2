 document.getElementById('cadastroForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do form

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value;
            const telefone = document.getElementById('telefone').value.trim();
            const endereco = document.getElementById('endereco').value.trim();
            const cidade = document.getElementById('cidade').value.trim();
            const cep = document.getElementById('cep').value.trim();

            const errorMsg = document.getElementById('errorMsg');

            // Validação básica
            if (!nome || !email || !senha || !telefone || !endereco || !cidade || !cep) {
                errorMsg.textContent = 'Todos os campos são obrigatórios!';
                errorMsg.style.display = 'block';
                return;
            }

            if (senha.length < 6) {
                errorMsg.textContent = 'A senha deve ter pelo menos 6 caracteres!';
                errorMsg.style.display = 'block';
                return;
            }

            // Simula salvamento (em um app real, envie para o backend via fetch/AJAX)
            console.log('Dados de cadastro:', { nome, email, senha, telefone, endereco, cidade, cep });

            // Mensagem de sucesso e redirecionamento
            alert('Cadastro realizado com sucesso! Redirecionando para o app...');
            window.location.href = 'home.html'; // Redireciona para a página principal
        });