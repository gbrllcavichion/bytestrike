import './Footer.css'

const Footer = () => {
    return(<footer className="footer">
            <section>
                <ul>
                   <li>
                        <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="Facebook" />
                        </a>
                    </li> 
                    <li>
                        <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="Twitter" />
                        </a>
                    </li> 
                    <li>
                        <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="Instagram" />
                        </a>
                    </li> 
                </ul>
            </section>
            <section>
                <img src="/images/logo.png"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Gabrielle.
                </p>
            </section>
        </footer>
    )
}

export default Footer