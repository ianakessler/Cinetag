import styles from './banner.module.css';


const Banner = (props) =>{
    return(
        <div
            className={styles.capa}
            style={{backgroundImage: `url('/images/banner-${props.imagem}.png')`}}

            />
    )
}

export default Banner;