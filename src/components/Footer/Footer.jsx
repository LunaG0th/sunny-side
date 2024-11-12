import Title from '../Title/Title'
import './Footer.css'
import facebook from '/facebook.svg'
import instagram from '/instagram.svg'
import twitter from '/twitter.svg'
import pinterest from '/pinterest.svg'


function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer__wrapper container">
                <Title title='sunnyside'  type={2}/>
                <div className="footer__links">
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Project</li>
                    </ul>
                </div>
                <div className="footer__socialMedia">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
