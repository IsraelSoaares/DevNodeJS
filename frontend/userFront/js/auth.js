const API_URL = 'http://localhost:9090/api'

async function login() {
  const nome_usuario = document.getElementById('nome_usuario').value
  const senha = document.getElementById('senha').value
  const msg = document.getElementById('msg')




  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome_usuario, senha })
  })

  const data = await res.json()

  if (!res.ok) {
    msg.textContent = data.message
    return
  }

  msg.textContent = 'Login realizado com sucesso'

  // depois aqui entra o JWT
  // localStorage.setItem('token', data.token)

  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1000)

}

async function register() {
  const nome_usuario = document.getElementById('nome_usuario').value
  const senha = document.getElementById('senha').value
  const form = document.getElementById('registerForm')
  const mensagem = document.getElementById('mensagem')



  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome_usuario, senha })
  })

  const data = await res.json()

  if (!res.ok) {
    msg.textContent = data.message
    return
  }

  msg.textContent = 'Conta criada com sucesso'

  setTimeout(() => {
    window.location.href = '/index.html'
  }, 1000)
}
