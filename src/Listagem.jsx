import { useState } from "react";
import './Listagem.css';

export default function Listagem() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'João Silva', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com' },
    { id: 3, nome: 'Carlos Oliveira', email: 'carlos@email.com' },
  ]);

  return (
    <>
      <main>
        <h1>Tabela de Usuários</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>📝</td>
                <td>🗑️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}