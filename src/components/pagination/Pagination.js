import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import DisplayItems from "./DisplayItems";
import "./Pagination.css";
import Spinner from "../ui/Spinner";

const Pagination = ({ items, isLoading }) => {
    // const [users, setUsers] = useState(items);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    /*     const displayItems = items
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item) => {
            return (
                <div className="item" key={item.char_id}>
                    {console.log(item)}
                    <img src={item.img} alt="char-img" />
                    <section>
                        <h3>Name : {item.name} ({item.nickname})</h3>
                        <h3>Actor Name : {item.portrayed}</h3>
                        <h3>Occupation : {item.occupation.join(", ")}</h3>
                        <h3>Birthday : {item.birthday}</h3>
                        <h3>Status : {item.status}</h3>
                    </section>
                    <section>

                    </section>
                </div>
            );
        });
 */
    const pageCount = Math.ceil(items.length / usersPerPage);

    // react-paginate stores the page on which we want to move to ,
    // in 'selected' object
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return isLoading ? (
        <Spinner />
    ) : (
        <div className="item-container">
            
            {/* {displayItems} */}
            <DisplayItems
                items={items}
                usersPerPage={usersPerPage}
                pagesVisited={pagesVisited}
            />

            {/* Using ReactPaginate Library to implement pagination */}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default Pagination;
