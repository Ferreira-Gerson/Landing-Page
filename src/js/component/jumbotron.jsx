import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron p-5 bg-light">
            <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead text-aline-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at lacinia massa. Quisque ac leo euismod, suscipit velit vel, venenatis mi. Praesent tempus urna sed est sodales scelerisque. In hac habitasse platea dictumst.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>

    );
};

export default Jumbotron;