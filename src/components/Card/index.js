import styles from './card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesavoritar from './desfavoritar.png';
import {useFavoritoContext} from '../../contextos/Favoritos'
import { Link } from 'react-router-dom';


const Card = (props) => {

    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav)=> fav.id === props.id);
    const icone = !ehFavorito ?  iconeFavoritar : iconeDesavoritar;

    return(
        <div className={styles.card} id={props.id}>
            <Link className={styles.link} to={`/${props.id}`}>
                <img 
                src={props.capa} 
                alt={props.titulo} 
                className={styles.capa}/>

                <h2 className={styles.titulo}>{props.titulo}</h2>
            </Link>

            <img 
            src={icone} 
            alt="Favoritar filme" 
            className={styles.favoritar} 
            onClick={() => {
                const novoFav ={
                    id: props.id,
                    titulo: props.titulo,
                    capa: props.capa
                }
                adicionarFavorito(novoFav)
            }}/>
             
        </div>
    )
}

export default Card;