import { Link } from "react-router-dom";
import { Header } from '../../components/Header';

import { FaGithubAlt, FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import petLog from '../../assets/images/pet-log.png';
import dentalDev from '../../assets/images/dental-dev.png';
import colegioVencer from '../../assets/images/colegio-vencer.png';

import styles from './projeto.module.css'

export function Projetos(){

    const data = [
        {id: "1", image: petLog, name: "Pet Log", url: "https://github.com/Rafael-84", descricao: "Sistema web para reserva de produtos pets"},
        {id: "2", image: dentalDev, name: "Dental Dev", url:"https://github.com/Rafael-84", descricao: "Page intitucional"},
        {id: "3", image: colegioVencer, name: "Colégio Vencer", url: "https://github.com/Rafael-84", descricao: "Sistema idealizado para trabalho de prototipação de tela para a faculdade, o objetivo era criar um sistema de reserva de equipamentos audio visuais para os professores do colegio Vencer (colegio fictício)..."},
    ]


    return (
        <div>
            <Header/>
            <h1 className={ styles.title } >Projetos</h1>
            <div className={ styles.containerSlider }>                
                {data.map((item) => (
                    <div className={ styles.containerAll } key={item.id}>
                        <div className={ styles.containerImages } >
                            <Link to={item.url} target="_blank"><img className={styles.imageProjetos} src={item.image} /></Link>
                            <span>{item.name}</span>
                        </div>                        
                        <div className={styles.description}>
                            <span>{item.descricao}</span>
                            <span>Clique no ícone ao lado para mais detalhes</span>
                            <Link to="https://github.com/Rafael-84" target="_blank">
                                <FaGithubAlt  size={30} color="#fff" />
                            </Link>
                        </div>
                                              
                    </div>                    
                ))}
            </div>
            <footer>
                <h4>Entre em Contato através dos links abaixo</h4>
                <div className={ styles.linkIcon }>
                    <Link  to="https://github.com/Rafael-84" target="_blank">
                        <FaGithubAlt  size={40} color="#2E8DEC" />
                    </Link>

                    <Link  to="#">
                    <FaWhatsapp size={40} color="#2E8DEC" />
                    </Link>

                    <Link  to="#">
                    <SiGmail size={40} color="#2E8DEC" />
                    </Link>
                
                </div>
            </footer>
        </div>
    )
}