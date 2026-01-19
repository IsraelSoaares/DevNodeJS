const form = document.getElementById('registerForm')
const mensagem = document.getElementById('mensagem')



form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const nome_usuario = document.getElementById('nome_usuario').value
  const senha = document.getElementById('senha').value

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome_usuario, senha })
    })

    const data = await response.json()

    if (!response.ok) {
      mensagem.textContent = data.message || 'Erro ao registrar'
      mensagem.style.color = 'red'
      return
    }

    mensagem.textContent = `Usuário "${data.nome_usuario}" criado com sucesso!`
    mensagem.style.color = 'green'
    form.reset()
  } catch (err) {
    mensagem.textContent = 'Erro de conexão com o servidor'
    mensagem.style.color = 'red'
  }
})


