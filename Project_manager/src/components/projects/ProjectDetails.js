import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

function ProjectDetails(props) {
  const { project, auth } = props;
  console.log(project);
  const createdAt = project.createdAt
    ? moment(project.createdAt.toDate()).calendar()
    : "2 sep";

  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div class="card-action grey lighten-4 grey-text">
            <div>{project.authorFirstName}</div>
            <div>{createdAt}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p> project is loading </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(state);
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
