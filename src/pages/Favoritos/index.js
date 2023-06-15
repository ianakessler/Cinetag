import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useFavoritoContext } from "../../contextos/Favoritos";
import styles from "./favoritos.module.css";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  if(favorito.length===0){
    return(
      <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Parece que você ainda não adicionou nenhum video ao favoritos! </h1>
      </Titulo>
      <section className={styles.container}>
        <p className={styles.aviso}>Para fazer isso é só clicar no simbolo de coração abaixo do título do video.</p>
      </section>
    </>
    )
  }
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;
