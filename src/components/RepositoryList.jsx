import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Unform",
  description: "Sou um repo",
  link: "https://github.com"
}

export function RepositoryList() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
      </ul>
      <h1>{counter}</h1>
      <button type="button" onClick={increment}>Incrementar</button>
    </section>
  )
};