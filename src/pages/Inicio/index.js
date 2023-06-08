import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import videos from "../../json/db.json";
import styles from "./inicio.module.css";

const Inicio = () => {

  

  return (
    <>

      <Banner imagem="home" />
      
      <Titulo>
        <h1>Um lugar para ver seus filmes e series!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((videos) => {
          return <Card {...videos} key={videos.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;
