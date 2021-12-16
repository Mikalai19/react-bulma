import React, { Component } from "react";
import './Forum.css';

class Forum extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-white topNav">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="../images/bulma.png" width="112" height="28" />
                            </a>
                            <div className="navbar-burger burger" data-target="topNav">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="topNav" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item" href="cover.html">Home</a>
                                <a className="navbar-item" href="landing.html">Landing</a>
                                <a className="navbar-item" href="blog.html">Blog</a>
                                <a className="navbar-item" href="instaAlbum.html">Album</a>
                                <a className="navbar-item" href="kanban[search].html">Kanban</a>
                                <a className="navbar-item" href="search.html">Search</a>
                                <a className="navbar-item" href="tabs.html">Tabs</a>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field is-grouped">
                                        <p className="control">
                                            <a className="button is-small">
                                                <span className="icon">
                                                    <i className="fa fa-user-plus"></i>
                                                </span>
                                                <span>
                                                    Register
                                                </span>
                                            </a>
                                        </p>
                                        <p className="control">
                                            <a className="button is-small is-info is-outlined">
                                                <span className="icon">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <span>Login</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item is-active" href="#">Popular</a>
                                <a className="navbar-item" href="#">Recent</a>
                                <a className="navbar-item" href="#">Rising</a>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <input className="input" type="search" placeholder="Search forum..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="container">
                    <div className="columns">
                        <div className="column is-3">
                            <a className="button is-primary is-block is-alt is-large" href="#">New Post</a>
                            <aside className="menu">
                                <p className="menu-label">
                                    Tags
                                </p>
                                <ul className="menu-list">
                                    <li><span className="tag is-primary is-medium ">Dashboard</span></li>
                                    <li><span className="tag is-link is-medium ">Customers</span></li>
                                    <li><span className="tag is-light is-danger is-medium ">Authentication</span></li>
                                    <li><span className="tag is-dark is-medium ">Payments</span></li>
                                    <li><span className="tag is-success is-medium ">Transfers</span></li>
                                    <li><span className="tag is-warning is-medium ">Balance</span></li>
                                    <li><span className="tag is-medium ">Question</span></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column is-9">
                            <div className="box content">
                                <article className="post">
                                    <h4>Bulma: How do you center a button in a box?</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 1</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <h4>How can I make a bulma button go full width?</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@red</a> replied 40 minutes ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 0</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <h4>TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 13</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <h4>How to vertically center elements in Bulma?</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@brown</a> replied 3 hours ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <h4>I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="post">
                                    <h4>How to make tiles wrap with Bulma CSS?</h4>
                                    <div className="media">
                                        <div className="media-left">
                                            <p className="image is-32x32">
                                                <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                                            </p>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <a href="#">@rapper</a> replied 3 hours ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light"><i className="fa fa-comments"></i> 2</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <div className="columns is-mobile is-centered">
                                <div className="field is-grouped is-grouped-multiline">
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <a className="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">Bulma Templates</a>
                                            <span className="tag is-light">Daniel Supernault</span>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="tags has-addons">
                                            <a className="tag is-link">The source code is licensed</a>
                                            <span className="tag is-light">MIT &nbsp;<i className="fa fa-github"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Forum;