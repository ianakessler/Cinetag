import { Link } from "react-router-dom";
import CabeLink from "../CabecalhoLink";
import logo from "./logo.png";
import styles from "./cabecalho.module.css"

const Cabecalho = () => {
    return(
        <header className={styles.Cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo da marca"/>
            </Link>

            <nav>

                <CabeLink url="./">
                    Home
                </CabeLink>

                <CabeLink url="./Favoritos">
                    Favoritos
                </CabeLink>


            </nav>
        </header>
        
    )
}

export default Cabecalho;