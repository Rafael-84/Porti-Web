
import { Link } from 'react-router-dom'
import styles from './error.module.css'

export function Error(){
    return (
        <div className={ styles.containerError }>
            <h1 className={ styles.title } >Error 404!</h1>
                <span className={ styles.spanError }>Página não encontrada!</span>
                <span className={ styles.spanError }>Encontramos esses Links</span>
                    <div className={ styles.links } >
                        <Link to="/">Home</Link>
                        <Link to="/projetos">Projetos</Link>  
                    </div>
                
        </div>
    )
}