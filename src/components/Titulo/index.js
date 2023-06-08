
import styles from './titulo.module.css';

const Titulo = (props) => {
    return (
        <div className={styles.texto}>
            {props.children}
        </div>
    )
}

export default Titulo;