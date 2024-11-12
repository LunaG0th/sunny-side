import Title from '../Title/Title';
import Button from '../Button/Button';
import './Services.css';
import cherryImage from '/cherry.jpg';
import orangeImage from '/orange.jpg';

function Services() {
  return (
    <section id='services'>
      <div className='services'>
        <div className='services__wrapper'>
          <div>
            <Title title="Transform your brand" type={1}/>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you
            </p>
            <Button variant='yellow'>learn more</Button>
          </div>
          <div>
            <img src='/egg.jpg' alt='' />
            {/* <h2>Egg</h2> */}
          </div>
          <div>
            <img src='/red cup.jpg' alt='' />
            {/* <h2>cup</h2> */}
          </div>
          <div>
          <Title title="Stand out to the right audience" type={1}/>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we&apos;ll build and
              extend your brand in digital places.
            </p>
            <Button variant='red'>learn more</Button>
          </div>
          <div style={{ background: `url(${cherryImage}) no-repeat center center/ cover scroll` }}>
            <Title title="Graphic Design" type={2} />
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
          <div style={{ background: `url(${orangeImage}) no-repeat center center/ cover scroll` }}>
            <Title title="Photography" type={2} />
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image
                 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
