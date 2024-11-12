import './Button.css';

const Button = ({ variant, children, onClick }) => {
    // const handleClick = () => {
    //     console.log('object');
    //   };
      
  return (
    <button
      className={
        variant === 'red'
          ? 'btn__red'
          : variant === 'yellow'
          ? 'btn__yellow'
          : 'btn'
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
