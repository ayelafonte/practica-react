import { useEffect, useState } from "react";
import { getLatestAdverts } from "../service";

function ListPage(history, ...props) {
    const [list, setList] = useState([]);
  
    useEffect(() => {
      getLatestAdverts().then((adverts) => {
        setList(adverts);
      });
    }, []);
}