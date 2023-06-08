import styles from "./footer.module.css"


const Footer = () =>{
    return(
    <footer className={styles.Footer}>
        <p>Todos os direitos reservados - <sub> ian kessler</sub> </p>
        <p>
            Contato (11)97489 - 8005 | aratian.akessler@gmail.com
        </p>
    </footer>
    )
}

export default Footer