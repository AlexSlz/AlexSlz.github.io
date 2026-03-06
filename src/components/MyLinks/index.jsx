import links from '../../data/links';
import style from './MyLinks.module.css';

export default function MyLinks() {
  return (
    <div className={style.card}>
      <h2 className="gradient-underline">Contact with me</h2>
      <p>I'm always open to new opportunities and conversations. Reach out!</p>
      <ul className={style.list}>
        {links.map((item) => (
          <li key={item.name}>
            <i className={item.icon} aria-hidden="true"></i>
            {item.name} =
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
