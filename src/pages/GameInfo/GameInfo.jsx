import { useLocation } from "react-router-dom";
import { UseFetch } from "../../hooks";
import styles from "./gameInfo.module.css";
import { useState } from "react";
import MyImage from "../../components/LazyLoadImage/MyImage";

function GameInfo() {
  const { state } = useLocation();
  const [page, setPage] = useState(0);
  const { passId } = state || {};

  const { data: data } = UseFetch({
    url: `https://api.rawg.io/api/games/${passId}?key=115c8017a0ef456c80ab0f0fd205894b`,
  });

  const { data: images } = UseFetch({
    url: `https://api.rawg.io/api/games/${passId}/screenshots?key=115c8017a0ef456c80ab0f0fd205894b`,
  });

  return (
    <div className={styles.container}>
      {data && (
        <img
          src={data.background_image}
          className={styles.front_page_image}
          alt=""
        />
      )}
      <div className={styles.overlay}>
        {data && (
          <a href={data.website} className={styles.web_site}>
            {data.name}
          </a>
        )}
        <ul className={styles.ratings}>
          {data &&
            data.ratings.map((value) => (
              <span key={value.id}>
                <p className={styles.title_rating}>{value.title}</p>
                <p className={styles.porcentaje_rating}>{value.percent}%</p>
              </span>
            ))}
        </ul>
      </div>
      <section className={styles.description}>
        <section className={styles.description_info}>
          <h2>Description</h2>
          <p> {data && data.description_raw}</p>
        </section>
        {data && (
          <MyImage
            img={data.background_image_additional}
            className={styles.description_image}
          />
        )}
      </section>
      <div className={styles.carousel_container}>
        <div className={styles.carousel}>
          {images &&
            images.results.map((image, idx) => (
              <img
                key={image.id}
                src={image.image}
                className={
                  page === idx
                    ? styles.screenshots
                    : `${styles.screenshots} ${styles.hidden}`
                }
              />
            ))}
          <span className={styles.indicators}>
            {images &&
              images.results.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPage(idx);
                  }}
                  className={
                    page === idx
                      ? `${styles.indicator} ${styles.indicator_select}`
                      : styles.indicator
                  }
                ></button>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
