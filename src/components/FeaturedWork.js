import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';


class FeaturedWork extends Component {
    constructor() {
        super();
        this.state = {
            dbData: {}
        }
    }
    
    componentDidMount() {
        firebase.database().ref('projects').orderByKey().on('value', snapshot => {
            this.setState({ dbData: snapshot.val() }); 
        });
    }
    
    renderList() {
        const reversedDbData = _.map(this.state.dbData, (project, index) => {
            return { project, index }
        });
        
        if (reversedDbData) {
            return  (reversedDbData.reverse()).map(({ project, index }) => {
                return (
                    <div key={index}>
                        <div className="col-md-4 card">
                            <img src={project.imageURL} alt={project.title} className="img-responsive" data-toggle="modal" data-target={'#' + index} />
                            <h3 className="text-uppercase">{project.title}</h3>
                            <p><a href={project.projectURL} target="__blank">{project.projectURL}</a></p>
                        </div>
                        <div className="modal text-left fade" id={index} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">{project.title}</h4>
                                    </div>
                                    <div className="modal-body">
                                        <img className="img-responsive" src={project.imageURL} />
                                        {project.description}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return <div>Loading...</div>;
    }
    
    render() {
        return (
            <div>
                <header className="row">
                    <div className="col-md-12">
                        <h2 className="text-muted">Featured Work</h2>
                    </div>
                </header>
                <section className="row text-center featured-work">
                   {this.renderList()}
                </section>
            </div>
        );
    }
}

export default FeaturedWork;


// const FeaturedModal = () => {
//     return (
//         <section>
//         <div className="modal fade" id="nh-map" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Neighborhood Map</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="images/nh-map.png" />
//                         The fifth project for the Udacity Full Stack Nanodegree. The Neighborhood Map project involves developing a single page application with the KnockoutJS framework and various API's. Aside from the Google Maps API, additional information is added to the project locations with the FourSquare API loaded asynchronously. KnockoutJS allows the project to be organized with the MVVM pattern.
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal fade" id="virtual-closet" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Virtual Closet</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="images/virtual-closet.png" />
//                         This was a group project for my Software Engineering class at CSU Monterey Bay. The Virtual Closet application allows users to take pictures of their closet items to receive suggestions based on current weather conditions. 
//                         Built with React Native for the mobile front-end and Flask for the backend. I was able to work on all parts of the stack in this project, but most of my contributions were focused on the React Native aspect of the project.
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal fade" id="item-catalog" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Inventory Item Catalog</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="https://raw.githubusercontent.com/ddavignon/item-catalog/master/assets/catalog-item-new.png" />
//                         This is the fourth project for the Udacity Full Stack Nanodegree. The Item Catalog project consists of developing an application that provides a list of items within a variety of categories, as well as provide a user registration and authentication system. This project uses persistent data storage to create a RESTful web application that allows users to perform Create, Read, Update, and Delete operations.
//                         A user does not need to be logged in in order to read the categories or items uploaded. However, users who created an item are the only users allowed to update or delete the item that they created.
//                         This program uses third-party auth with Google or Facebook. Some of the technologies used to build this application include Flask, Bootsrap, Jinja2, and SQLite.
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal fade" id="log-analysis" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Newspaper Site Log Analysis</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="images/log-analysis.png" />
//                         This is the third project for the Udacity Full Stack Nanodegree. In this project, a large database with over a million rows is explored by building complex SQL queries to draw business conclusions for the data. 
//                         The project mimics building an internal reporting tool for a newpaper site to discover what kind of articles the site's readers like. The database contains newspaper articles, as well as the web server log for the site.                    </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal fade" id="movie-trailer" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Movie Trailer Website</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="images/movie-trailer.png" />
//                         This was my first project in the Udacity Full Stack Developer Nanodegree course. This project I wrote server-side code to store a list of movies, including box art imagery and a movie trailer URL. This project is written using object-oriented Python.
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal fade" id="puppy-generator" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4 className="modal-title" id="myModalLabel">Puppy Quotes</h4>
//                     </div>
//                     <div className="modal-body">
//                         <img className="img-responsive" src="images/puppy-site.png" />
//                         This was the first project for my Software Engineering class at CSU Monterey Bay. This is a server-side application built with the Flask framework for Python. It uses the Twitter API to generate random quotes, and the Getty Image API to generate random background image.
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </section>
//     );
// }

// const FeaturedWorkHeader = () => {
//     return (
//         <header className="row">
//             <div className="col-md-12">
//               <h2 className="text-muted">Featured Work</h2>
//             </div>
//          </header>
//     );
// }

// const FeaturedWork = () => {
//     return (
//         <div>
//         <FeaturedWorkHeader />
//          <section className="row text-center featured-work">
//             <div className="col-md-4 card">
//                 <img src="images/nh-map.png" alt="nh-map" className="img-responsive" data-toggle="modal" data-target="#nh-map" />
//                 <h3 className="text-uppercase">Neighborhood Map</h3>
//                 <p><a href="https://ddavignon.github.io/neighborhood-map/" target="__blank">https://ddavignon.github.io/neighborhood-map/</a></p>
//             </div>
//             <div className="col-md-4 card">
//                 <img src="https://raw.githubusercontent.com/ddavignon/item-catalog/master/assets/catalog-item.png" alt="item-catalog" className="img-responsive" data-toggle="modal" data-target="#item-catalog" />
//                 <h3 className="text-uppercase">Item Catalog</h3>
//                 <p><a href="https://github.com/ddavignon/item-catalog" target="__blank">https://github.com/ddavignon/item-catalog</a></p>
//             </div>
//             <div className="col-md-4 card">
//                 <img src="images/virtual-closet.png" alt="virtual-closet-applictaion" className="img-responsive" data-toggle="modal" data-target="#virtual-closet" />
//                 <h3 className="text-uppercase">Virtual Closet</h3>
//                 <p><a href="https://csumb-sp17-cst438.github.io/virtual_closet/" target="__blank">https://csumb-sp17-cst438.github.io/virtual_closet/</a></p>
//             </div>
//             <div className="col-md-4 card">
//                 <img src="images/log-analysis.png" alt="image-placeholder" className="img-responsive" data-toggle="modal" data-target="#log-analysis" />
//                 <h3 className="text-uppercase">Log Analysis</h3>
//                 <p><a href="https://github.com/ddavignon/logs-analysis" target="__blank">https://github.com/ddavignon/logs-analysis</a></p>
//             </div>
//             <div className="col-md-4 card">
//                 <img src="images/movie-trailer.png" alt="movie-trailer-website" className="img-responsive" data-toggle="modal" data-target="#movie-trailer" />
//                 <h3 className="text-uppercase">Movie Trailer Website</h3>
//                 <p><a href="https://github.com/ddavignon/movie-trailer-website" target="__blank">https://github.com/ddavignon/movie-trailer-website</a></p>
//             </div>
//             <div className="col-md-4 card">
//                 <img src="images/puppy-site.png" alt="image-placeholder" className="img-responsive" data-toggle="modal" data-target="#puppy-generator" />
//                 <h3 className="text-uppercase">Puppy Quotes</h3>
//                 <p><a href="https://puppy-generator.herokuapp.com" target="__blank">https://puppy-generator.herokuapp.com</a></p>
//             </div>
//          </section>
//          <FeaturedModal />
//          </div>
//     );
// }

// export default FeaturedWork;
