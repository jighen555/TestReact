import React from 'react'

const Product = ({ nome, prezzo, img, children }) => {
    let name = '';
    if (children !== undefined && children !== null)
        name = children;
    else
        name = nome;

    const eventHandler = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <article>
            <div className="card">
                <img src={img}/>
                <h6>{name}</h6>
                <p>{prezzo}</p>
                <button onClick={() => alert(nome)}>Ciao</button>
                <button onClick={eventHandler}>Ciao</button>
                <hr/>
            </div>
        </article>
    )
}

export default Product
