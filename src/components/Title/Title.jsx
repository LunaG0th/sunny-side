
import './Title.css';

function Title({title, type}) {
  return (
    <div className={`${type === 1 ? 'title__1' : type === 2 ? 'title__2' : ''} container`}>
        <h2>{title}</h2>
        
    </div>
  );
}

export default Title;
