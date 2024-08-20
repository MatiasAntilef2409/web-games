import { Link } from "react-router-dom";
import styles from "./card.module.css";
import MyImage from "../LazyLoadImage/MyImage";
import LinkStyle from "../LinkStyle/LinkStyle";

function Card({ image, passId, title, genres }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <MyImage img={image} />
      </div>
      <section className={styles.card_info}>
        <h2> {title} </h2>
      </section>
      <section className={styles.card_info_hidden}>
        <ul className={styles.list_genres}>
          {genres &&
            genres.map((value) => <li key={value.id}> {value.name} </li>)}
        </ul>
        <div className={styles.container_link_style}>
          <Link to={"/game-info"} state={{ passId }}>
            <LinkStyle text={"See more"} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Card;
