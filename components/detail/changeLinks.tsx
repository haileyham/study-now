export default function Changelinks(content: string) {
  const url = /((http|https)?:\/\/[^\s]+)/g;
  const processedContent = content.split(url).map((item, i) => {
    if (i % 2 === 0) {
      return item;
    } else {
      return (
        <a key={i} href={item}>
          {item}
        </a>
      );
    }
  });
  return processedContent;
}
