import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import Pagination from "./components/pagination/Pagination";
import "./App.css";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    const getQueryHandler = (query) => {
      setQuery(query);
    };

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            );

            // console.log(result.data);

            setItems(result.data);
            setIsLoading(false);
        };

        fetchItems();
    }, [query]);

    return (
        <div className="container">
            <Header />
            <Search getQuery={getQueryHandler} />
            <Pagination isLoading={isLoading} items={items}/>
        </div>
    );
};

export default App;