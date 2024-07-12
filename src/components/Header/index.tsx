import { Link } from "react-router-dom";
import styles from './header.module.css'


import { FaGithubAlt, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Header(){
    return (
        <section>
            <div className={ styles.containerLinks }>
            <ul>
                <Link  to="/">Home</Link>

                <Link  to="/projetos">Projetos</Link>                
            </ul>
            </div>

            <div className={ styles.containerIcons }>
                <Link className={ styles.icon }  to="https://github.com/Rafael-84" target="_blank">
                    <FaGithubAlt  size={30} color="#2E8DEC" />
                </Link>

                <Link className={ styles.icon } to="#">
                <FaWhatsapp size={30} color="#2E8DEC" />
                </Link>

                <Link className={ styles.icon } to="#">
                <SiGmail size={30} color="#2E8DEC" />
                </Link>
                
            </div>
            
        </section>        
    )
}