import { Link } from "react-router-dom";
import styles from "./cabeLink.module.css";

const CabeLink = (props) => {
    return(
        <Link to={props.url} className={styles.Link}>
            {props.children}
        </Link>
    )
}

export default CabeLink;