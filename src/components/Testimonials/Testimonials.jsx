import './Testimonials.css';

const testi = [
  {
    img: './emily.jpg',
    comment:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R',
    job: 'Marketing Director',
  },

  {
    img: './thomas.jpg',
    comment:
      'Sunnysides enthusiasm coupled with their keen interest in our brand success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    job: 'Chief Operating Officer',
  },
  {
    img: './jennie.jpg',
    comment:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    job: 'Business Owner ',
  },
];

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='testimonials'>
        <h2>client testimonials</h2>
        <div className='testimonials__wrapper container'>
          {testi.map((prof) => (
            <Profile profObj={prof} key={prof.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Profile = ({ profObj }) => {
  return (
    <div className='testimonials__profile'>
      <img src={profObj.img} alt={profObj.name} />
      <p>{profObj.comment}</p>
      <div className='profileName'>
        <h4>{profObj.name}</h4>
        <em>{profObj.job}</em>
      </div>
    </div>
  );
};
export default Testimonials;
