import React, { Component } from 'react';
import './Blog.css'


const text = {
    name: '@tania',
    text: 'This is Blog about me',
    year: 2021,
    month: 'December',
    topic: 'New technology future'
}





class Blog extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="../images/bulma.png" alt="Logo" />
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item is-active">
                                    Home
                                </a>
                                <a className="navbar-item">
                                    Examples
                                </a>
                                <a className="navbar-item">
                                    Features
                                </a>
                                <a className="navbar-item">
                                    Team
                                </a>
                                <a className="navbar-item">
                                    Archives
                                </a>
                                <a className="navbar-item">
                                    Help
                                </a>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">
                                        Account
                                    </a>
                                    <div className="navbar-dropdown">
                                        <a className="navbar-item">
                                            Dashboard
                                        </a>
                                        <a className="navbar-item">
                                            Profile
                                        </a>
                                        <a className="navbar-item">
                                            Settings
                                        </a>
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item">
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                <section className="hero is-info is-medium is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">{text.text}</h1>
                        </div>
                    </div>
                </section>


                <div className="container">

                    <section className="articles">
                        <div className="column is-8 is-offset-2">

                            <div className="card article">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content has-text-centered">
                                            <p className="title article-title">{text.topic}</p>
                                            <div className="tags has-addons level-item">
                                                <span className="tag is-rounded is-info">@skeetskeet</span>
                                                <span className="tag is-rounded">May 10, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content article-body">
                                        <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                                        <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                                            Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                                        <h3 className="has-text-centered">How to properly center tags in bulma?</h3>
                                        <p> Proper centering of tags in bulma is done with className: <pre>level-item</pre>
                                            Voluptat ut farmacium tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie.
                                            Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card article">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-center">
                                            <img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" className="author-image" alt="Placeholder image" />
                                        </div>
                                        <div className="media-content has-text-centered">
                                            <p className="title article-title">Sapien eget mi proin sed 🔱</p>
                                            <p className="subtitle is-6 article-subtitle" title="month">
                                                <a href="#">{text.name}</a> on {text.month} 17, {text.year}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content article-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
                                        </p>
                                        <p>
                                            Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
                                        </p>
                                        <h3 className="has-text-centered">Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras tincidunt lobortis feugiat vivamus.</h3>
                                        <p>
                                            In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                                            Arcu non sodales neque sodales ut etiam sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <section className="hero is-info is-bold is-small promo-block">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">
                                            <i className="fa fa-bell-o"></i> Nemo enim ipsam voluptatem quia.</h1>
                                        <span className="tag is-black is-medium is-rounded">
                                            Natus error sit voluptatem
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <div className="card article">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-center">
                                            <img src="http://www.radfaces.com/images/avatars/angela-chase.jpg" className="author-image" alt="Placeholder image" />
                                        </div>
                                        <div className="media-content has-text-centered">
                                            <p className="title article-title">Cras tincidunt lobortis feugiat vivamus.</p>
                                            <p className="subtitle is-6 article-subtitle">
                                                <a href="#">@angela</a> on October 7, 2017
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content article-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
                                        </p>
                                        <p>
                                            Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
                                        </p>
                                        <h3 className="has-text-centered">“Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.”</h3>
                                        <p>
                                            In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                                            Arcu non sodales neque sodales ut etiam sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                </div>

            </div>
        )
    }
}








export default Blog;