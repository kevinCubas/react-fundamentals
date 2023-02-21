export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Hello"}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.link}>Acessar repo</a>
    </li>
  )
};