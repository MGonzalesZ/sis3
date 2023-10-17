import './NAFstyle.css';
import uniImg from './img/uni.jpg';
// import Image from 'next/image';

export function Information() {
  return (
    <main>
      <section class="info">
        <p class="parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
          morbi leo urna molestie at. At in tellus integer feugiat scelerisque
          varius morbi enim. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus. In metus vulputate eu scelerisque felis
          imperdiet proin fermentum leo. Id ornare arcu odio ut sem nulla
          pharetra. Proin sagittis nisl rhoncus mattis. Ultrices gravida dictum
          fusce ut placerat. Tempor orci eu lobortis elementum nibh tellus. C{' '}
        </p>
      </section>
      <section class="image">
        <img src={uniImg} alt="Imagen de ejemplo" />
      </section>
    </main>
  );
}
