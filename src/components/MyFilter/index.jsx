import style from './MyFilter.module.css';

export default function MyFilter({ selectedTag, setSelectedTag }) {
  const baseTags = ['All', 'C#', 'JavaScript', 'Python'];

  let tags = [...baseTags];

  if (selectedTag !== 'All' && !baseTags.includes(selectedTag)) {
    tags.push(selectedTag);
  }

  return (
    <div className={style.filters}>
      {tags.map((tag, i) => (
        <button
          key={i}
          className={`${style.filterButton} ${selectedTag === tag ? style.activeFilter : ''}`}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
