import React, { useState } from 'react';
import './List.css';

const List = () => {
    setInterval(function() {
        setNumero(Math.random(100));
      }, 1000);
    var [numero,setNumero] = useState(0);
    return <p>{numero}</p>;
}

export default List;