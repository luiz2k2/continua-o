import { useState } from 'react'
import './App.css'

export default function App() {

  const [email, setEmail] = useState("")

  return (
    <main>

      <div id="esq"></div>

      <div id="dir">
        <div className="login">

          <h1>Iniciar sessão no PlayStation</h1>

          <label>ID de início de sessão (endereço de email)</label>

          <input 
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button>Seguinte</button>

          <div className="links">
            <span>Sobre a conta da Sony</span>
            <span>Problemas ao iniciar uma sessão?</span>
          </div>

          <button className="criar">Criar uma conta</button>

        </div>
      </div>

    </main>
  )
}