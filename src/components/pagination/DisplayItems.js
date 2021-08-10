import React from "react";
import "./DisplayItems.css"
const DisplayItems = ({ items, usersPerPage, pagesVisited }) => {
    return <>{
        items.slice(pagesVisited, pagesVisited + usersPerPage)
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
        })
    }</>;
};

export default DisplayItems;