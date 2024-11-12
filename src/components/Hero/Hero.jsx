import './Hero.css';
import ArrowDown from '/icon arrow down.svg';

function Hero() {
  return (
    <section id='hero'>
      <div className='hero'>
        <div className='hero__wrapper container'>
          <div className='hero__title'>
            <h1>we are creatives</h1>
          </div>
          <div className='hero__icon'>
            <img src={ArrowDown} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
