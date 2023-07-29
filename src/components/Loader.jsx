import pokeball from '/pokeball.png';
export default function Loader() {
  return (
    <div className='relative'>
      {Array.from(Array(3)).map((img, i) => {
        return (
          <img
            key={i}
            src={pokeball}
            style={{ animationDelay: `${i * 2000}ms` }}
            className='absolute mx-auto left-0 right-0 opacity-0 aspect-square animate-growAndFade'
            alt=''
          />
        );
      })}
    </div>
  );
}
