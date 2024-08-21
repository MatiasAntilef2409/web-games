import { useState } from "react";
import Card from "../../components/Card/Card";
import UseFetch from "../../hooks/UseFetch";
import styles from "./home.module.css";
import Modal from "../../components/Modal/Modal";
import { IconArrowUp } from "../../components/icon/IconsSVG";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [hideModal, setHideModal] = useState(false);
  const [contentModal, setContentModal] = useState({
    title: "",
    info: "",
  });
  const [inputFetch, setInputFetch] = useState("");
  const [inputGenre, setInputGenre] = useState("");
  const [inputPlatform, setInputPlatform] = useState("");
  const [searchParams, setSearchParams] = useState({
    fetch: "",
    genre: "",
    platform: "",
  });
  const [page, setPage] = useState(1);

  const { data } = UseFetch({
    url: `https://api.rawg.io/api/games?key=115c8017a0ef456c80ab0f0fd205894b${
      searchParams.genre ? `&genres=${searchParams.genre}` : ""
    }${
      searchParams.platform ? `&parent_platforms=${searchParams.platform}` : ""
    }&search=${
      searchParams.fetch
    }&search-precise=true&page=${page}&page_size=9`,
  });

  const selectGenre = [
    { label: "-Genre-", value: "" },
    { label: "Adventure", value: "adventure" },
    { label: "Action", value: "action" },
    { label: "Fighting", value: "fighting" },
    { label: "Indie", value: "indie" },
    { label: "Platformer", value: "platformer" },
    { label: "Puzzle", value: "puzzle" },
    { label: "Shooter", value: "shooter" },
    { label: "RPG", value: "role-playing-games-rpg" },
  ];

  const selectPlatform = [
    { label: "-Platform-", value: "" },
    { label: "Windows", value: "1" },
    { label: "MacOS", value: "5" },
    { label: "Linux", value: "6" },
    { label: "Xbox", value: "3" },
    { label: "PlayStation", value: "2" },
    { label: "Nintendo", value: "7" },
    { label: "Android", value: "8" },
    { label: "IOS", value: "4" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      fetch: inputFetch,
      genre: inputGenre,
      platform: inputPlatform,
    });

    if (inputFetch || inputGenre || inputPlatform) {
      setContentModal({
        title: "Success",
        info: "Request send",
      });
      setShowModal(true);
      setHideModal(false);

      setTimeout(() => {
        setHideModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 500);
      }, 3000);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.container_filters} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputFetch(e.target.value)}
          placeholder="Input game"
        />
        <select
          name="platform"
          onChange={(e) => setInputPlatform(e.target.value)}
        >
          {selectPlatform.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select name="genre" onChange={(e) => setInputGenre(e.target.value)}>
          {selectGenre.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button_confirm_params}>
          Confirmar
        </button>
      </form>
      <section className={styles.container_cards}>
        {data &&
          data.results.map((value) => (
            <Card
              key={value.id}
              passId={value.id}
              title={value.name}
              image={value.background_image}
              genres={value.genres}
            />
          ))}
      </section>
      <div className={styles.buttons_page}>
        <button
          className={styles.button_page}
          onClick={() =>
            page > 1
              ? setPage(page - 1)
              : alert("Se encuentra en la primera pagina")
          }
        >
          Pagina anterior
        </button>
        <h3>{page}</h3>
        <button
          className={styles.button_page}
          onClick={() => setPage(page + 1)}
        >
          Pagina siguiente
        </button>
        <IconArrowUp />
        {showModal && (
          <Modal
            title={contentModal.title}
            info={contentModal.info}
            hide={hideModal}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
