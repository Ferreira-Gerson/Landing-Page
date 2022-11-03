import React from "react";

const Cards = () => {
    return (
            <div className ="card" style={{ width: '16rem' }}>
                <img src="https://picsum.photos/500/325.jpg" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</p>
                <a href="#" className="btn btn-primary">Find out More!</a>
                </div>
            </div>
    );
};

export default Cards;