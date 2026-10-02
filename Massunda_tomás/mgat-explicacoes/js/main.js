const reservaForm = document.querySelector('#reserva-form');
const reservaMensagem = document.querySelector('#reserva-mensagem');

if (reservaForm && reservaMensagem) {
    reservaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validar campos obrigatórios
        const nome_encarregado = reservaForm['nome_encarregado'].value.trim();
        const telefone = reservaForm['telefone'].value.trim();
        const nome_crianca = reservaForm['nome_crianca'].value.trim();
        const idade = reservaForm['idade'].value.trim();
        const ano = reservaForm['ano'].value.trim();
        const horario = reservaForm['horario'].value.trim();
        const conhecimento = reservaForm['conhecimento'].value.trim();

        // Verificar se algum campo obrigatório está vazio
        if (!nome_encarregado || !telefone || !nome_crianca || !idade || !ano || !horario || !conhecimento) {
            reservaMensagem.textContent = 'Preencha todos os campos obrigatórios.';
            reservaMensagem.style.color = '#ff5f57';
            return;
        }

        // Recolher disciplinas selecionadas
        const disciplinasSelecionadas = [];
        const checkboxes = reservaForm['disciplinas'];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                disciplinasSelecionadas.push(checkboxes[i].value);
            }
        }
        const disciplinasTexto = disciplinasSelecionadas.length > 0
            ? disciplinasSelecionadas.join(', ')
            : 'Não especificado';

        const dificuldades = reservaForm['dificuldades'].value.trim();

        // Criar mensagem para WhatsApp
        const mensagem = `Olá! Quero reservar uma vaga no MGAT Explicações.

Nome do encarregado: ${nome_encarregado}
Telefone: ${telefone}
Nome da criança: ${nome_crianca}
Idade: ${idade}
Ano: ${ano}
Disciplinas com dificuldade: ${disciplinasTexto}
Dificuldades: ${dificuldades}
Horário preferido: ${horario}
Como conheceu: ${conhecimento}`;

        // Número do WhatsApp
        const numeroWhatsApp = '244936758420';

        // Criar URL e abrir
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        reservaMensagem.textContent = 'A abrir o WhatsApp...';
        reservaMensagem.style.color = '#fff';
        window.open(url, '_blank');
    });
}