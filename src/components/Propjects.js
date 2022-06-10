import React from "react";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectRefs: null,
            titleRef: null,
            contentRef: null,
            projectHeight: -1,
            titlePadding: 0,
        }
    }

    resize = () => {
        const { projectRefs, titleRef, contentRef } = this.state;
        const width = projectRefs.clientWidth;
        const titleHeight = titleRef.clientHeight;
        const outerHeight = contentRef.clientHeight;
        this.setState({ projectHeight: width, titlePadding: (width - titleHeight - outerHeight) / 2 });
    }

    componentDidMount() {
       this.resize();
       window.addEventListener('resize', this.resize);
    }

    render() {
        const { projectHeight, titlePadding } = this.state;

        return (
            <div className = "projects" id="projects">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-sm-12 col-md-12 text-center">
                            <div className = "projects-header">
                                <h1>Projects and Portfolio</h1>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-sm-12 col-md-12 text-center">
                            <div className = "projects-header-quote">
                                <h3>Sharing my endeavors and passions...</h3>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-sm-4 col-md-4 text-center">
                            <div className = "luvtalk-project" ref={(ref) => this.state.projectRefs = ref} style={{ height: projectHeight > 0 ? projectHeight : "auto" }}>
                                <h3 style={{ paddingTop: titlePadding }} ref={ref => this.state.titleRef = ref}>LUV TALK Website</h3>
                                <p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. </p>
                                <div className = "row" ref={ref => this.state.contentRef = ref}>
                                    <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                                        <div className = "project-more-info">
                                            <a className = "btn btn-default btn-border" href = "#">More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "col-sm-4 col-md-4 text-center">
                            <div className = "personal-website-project" style={{ height: projectHeight > 0 ? projectHeight : "auto" }}>
                                <h3 style={{ paddingTop: titlePadding }}>Personal Website</h3>
                                <p>Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.</p>
                                <div className = "row">
                                    <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                                        <div className = "project-more-info">
                                            <a className = "btn btn-default btn-border" href = "#">More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "col-sm-4 col-md-4 text-center">
                            <div className = "strike-zone-project" style={{ height: projectHeight > 0 ? projectHeight : "auto" }}>
                                <h3 style={{ paddingTop: titlePadding }}>Strike Zone Analysis</h3>
                                <p>Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.</p>
                                <div className = "row">
                                    <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                                        <div className = "project-more-info">
                                            <a className = "btn btn-default btn-border" href = "#">More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
                            <div className = "see-more-button">
                                <a className = "btn btn-default btn-border" href = "#">More Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;