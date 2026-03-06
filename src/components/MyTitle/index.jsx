import style from './MyTitle.module.css';

export default function MyTitle() {
  const text = "Hello, I'm Alex S.";

  return (
    <div className={style.title}>
      <h1>
        {text.split('').map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
