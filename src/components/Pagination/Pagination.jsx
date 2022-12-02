import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.scss";

const Pagination = ({
                   pageNumber, 
                   info, 
                   updatePageNumber
                   }) => {

  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  }

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions)
  }, []);
  

  return (
    <>
    <ReactPaginate styles={styles}
      className='pagination justify-content-center my-4 gap-4'
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangesDisplayed={width < 576 ? 1 : 2}
      pageCount={Math.ceil(info?.pages)}
      onPageChange={pageChange}
      previousLabel="Prev"
      previousClassName='btn btn-primary fs-5 prev'
      nextClassName="btn btn-primary fs-5 next"
      activeClassName='active'
      pageClassName='page-item'
      pageLinkClassName='page-link'
    />
  </>
  )
}

export { Pagination }
