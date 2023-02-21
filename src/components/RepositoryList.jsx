import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const getRepos = await fetch('https://api.github.com/users/kevinCubas/repos')
      const repos = await getRepos.json()
      setRepositories(repos)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo} />
          )
        )}
      </ul>
    </section>
  )
};