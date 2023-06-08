import styles from './naoencontrada.module.css';

const NotFound = () => {
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Conteudo não encontrado.</p>
        </section>
    )
}

export default NotFound;