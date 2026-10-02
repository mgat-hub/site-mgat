# MGAT Explicações — README Técnico

## 1. Nome do projeto
**MGAT Explicações**

## 2. Tecnologias usadas
- HTML5
- CSS3 (com glassmorphism e responsividade)
- JavaScript vanilla (sem bibliotecas externas)
- WhatsApp (envio direto via URL)

## 3. Fluxo do formulário
Preencher formulário → validar dados → organizar mensagem → abrir WhatsApp

## 4. Número atual do WhatsApp
**244936758420**

## 5. Como alterar o número
A variável `numeroWhatsApp` está localizada em `js/main.js`. Basta alterar o valor da string para o novo número pretendido.

## 6. Como testar
- Abrir o projeto com Live Server.
- Preencher todos os campos obrigatórios (nome_encarregado, telefone, nome_crianca, idade, ano, horario, conhecimento).
- Selecionar pelo menos uma disciplina (Português, Matemática ou Cultura Geral).
- Clicar em "Enviar para WhatsApp".
- Confirmar que o WhatsApp abre com a mensagem preenchida.
- Testar também o envio com campos vazios (deve aparecer mensagem de erro).

## 7. Estrutura principal
- `index.html` — estrutura da página e formulário
- `css/style.css` — estilos com glassmorphism, responsividade, header fixo
- `js/main.js` — lógica de validação e envio WhatsApp
- `README-tecnico.md` — este ficheiro

## 8. Observações importantes
- Não existe backend.
- Não existe base de dados.
- O Supabase foi removido.
- Os dados são enviados diretamente para o WhatsApp (não são guardados nem processados no servidor).

---
*Projeto MGAT Explicações — Reforço escolar para 4.º, 5.º e 6.º anos*