import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
      >
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          className={styles.input}
          text="text"
        />
        <button
          onClick={searchBtn}
          className={`${styles.btn} btn btn-success fs-5`}
        >
          Search
        </button>
      </form>
    </>
  );
};

export { Search };
