import React, { Component } from "react";
import "./Documentation.css";


const text = {
    word: "New tag",
    word2: "Account only",
    word3: "Billing only",
    word4: "Article you want to use",
    word5: "Best ideas",
    word6: "Find Find Find",
    word6: "Seattle"
}


const textList = [
    {
        word: "New Tag"
    },
    {
        word: "New Author"
    },
    {
        word: "New Style Guide"
    },

]

const displayTextList = textList.map((c, idx) => {
    return (
        <h1>
            {c.word}
        </h1>

    )
})

class Documentation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            </a>

                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu" >
                            <div className="navbar-end" >
                                <a className="navbar-item" > {text.word}</a>
                                <a className="navbar-item" title="account"> {text.word2} </a>
                                <a className="navbar-item" title="billing"> {text.word3} </a>

                            </div>
                        </div>
                    </div>
                </nav>
                <section className="hero is-medium">
                    <div className="hero-body has-text-centered">
                        <h1 className="title is-2">{text.word5}.</h1>
                        <div id="hero-input-group" className="field has-addons has-addons-centered">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder={text.word6} />
                            </div>
                            <div className="control">
                                <a className="button is-medium is-primary">
                                    <i className="fal fa-search"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h2 className="subtitle">{text.word4}</h2>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field has-addons has-addons-centered">
                                    <div className="control">
                                        <a className="button is-small" disabled>
                                            <i className="far fa-chevron-left"></i>
                                        </a>
                                    </div>
                                    <div className="control">
                                        <a className="button is-small">
                                            <i className="far fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                </figure>
                                <h2 className="subtitle">Creating a Group</h2>
                                <span className="tag is-rounded">Users & Groups</span>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                </figure>
                                <h2 className="subtitle">Downloading/Printing Your Invoices</h2>
                                <span className="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                </figure>
                                <h2 className="subtitle">Changing the Account Owner</h2>
                                <span className="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                                </figure>
                                <h2 className="subtitle">Adding Internal Notes</h2>
                                <span className="tag is-rounded">Billing & Accounts</span>
                            </article>
                        </div>
                    </div>
                </section>
            </div>






        )
    }
}

export default Documentation