import {  useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './player.module.css'
import videos from "../../json/db.json";
import NotFound from '../NaoEncontrada';



const Player = ()=> {
    const parametros = useParams();
    const video = videos.find((video)=> {
        return video.id === Number(parametros.id)
    })

    if(!video){
        return <NotFound/>
    }


    return(
        <>
            <Banner imagem="player"/>
            <Titulo>
                <h1>Aqui esta seu player</h1>
            </Titulo>
            <section className={styles.container}>

                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>                 
                </iframe>

            </section>
        </>
    )
}

export default Player