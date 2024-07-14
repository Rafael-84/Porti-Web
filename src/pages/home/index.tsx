import { Link } from 'react-router-dom';
import styles from './home.module.css';

import { Header } from '../../components/Header';

import { Swiper, SwiperSlide } from 'swiper/react';

import Perfil from '../../assets/images/perfil.jpg';
import petLog from '../../assets/images/pet-log.png';
import dentalDev from '../../assets/images/dental-dev.png';
import colegioVencer from '../../assets/images/colegio-vencer.png';

import { SiGmail } from "react-icons/si";
import { FaGithubAlt, FaWhatsapp, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma  } from "react-icons/fa";
import { EffectFade } from 'swiper/modules';

export function Home(){

    const data = [
        {id: "1", image: petLog, name: "Projeto Pet Log"},
        {id: "2", image: dentalDev, name: "Projeto Dental Dev"},
        {id: "3", image: colegioVencer, name: "Projeto Colégio Vencer"},
    ]
    
    return (
           <main>
             <Header/>
            <section className={ styles.containerInicio }>
                <h1 className={ styles.title }>Sobre</h1>
                    <div className={ styles.areaSobre }>
                        <div>
                            <img className={ styles.imagePerfil } src={ Perfil } alt="Foto Rafael Luiz da Silva" />
                        </div>
                        <div className={ styles.textAreaSobre }>
                            <p className={ styles.textSobreP }>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Optio animi perferendis facere fuga cum labore commodi unde minus officia nisi,
                            sed accusamus odit temporibus! Eius ipsa in error natus dolorum!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Optio animi perferendis facere fuga cum labore commodi unde minus officia nisi,
                            sed accusamus odit temporibus! Eius ipsa in error natus dolorum!</p>
                        </div>
                    </div>
                    <div className={ styles.areaTecnologia }>
                        <span>Técnologias que utilizo</span>
                        <ul className={ styles.icons }>
                            <li><FaHtml5 size={40} color="#2E8DEC" /></li>
                            <li> <FaCss3Alt size={40} color="#2E8DEC" /></li>
                            <li><FaJsSquare size={40} color="#2E8DEC" /></li>
                            <li><FaReact size={40} color="#2E8DEC" /></li>
                            <li><FaFigma size={40} color="#2E8DEC" /></li>
                        </ul>
                    </div>
                    <div>
                        <Link className={ styles.buttonAction } to="#" target='_blank'>Entrar em Contato</Link>
                    </div>
            </section>
            <section className={styles.containerSlider} >
                <h2 className={styles.titleProjetos}>Alguns dos meus projetos</h2>
                <div className={styles.containerSlide}>
                    
                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation                                  
                    >
                        {data.map((item) => (
                            <SwiperSlide  key={item.id}>
                                <div >
                                <img className={ styles.sliderImage } src={item.image} alt={ item.name } />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <footer>
                <h4>Entre em Contato através dos links abaixo</h4>
                <div className={styles.linkIcon}>
                    <Link to="https://github.com/Rafael-84" target="_blank">
                        <FaGithubAlt  size={40} color="#2E8DEC" />
                    </Link>

                    <Link to="#">
                    <FaWhatsapp size={40} color="#2E8DEC" />
                    </Link>

                    <Link to="#">
                    <SiGmail size={40} color="#2E8DEC" />
                    </Link>
                
                </div>
            </footer>
        </main>
    )
}