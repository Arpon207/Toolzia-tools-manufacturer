const Pagination = ({ count, currentPage }) => {
  const totalpage = Array.from(
    { length: Math.ceil(count / 16) },
    (_, i) => i + 1
  );

  const handlePaginate = (page) => {
    currentPage.setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="my-5 flex justify-end">
      {totalpage.map((page) => (
        <button
          className={`btn btn-neutral btn-circle ml-2 btn-sm ${
            currentPage.currentPage !== page && "btn-outline"
          }`}
          onClick={() => handlePaginate(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
