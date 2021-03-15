import React, { Component } from "react";
import TagComponent from "./TagComponent";

class IssueComponent extends Component {
  render() {
    return (
      <div className="issue-container">
        <div className="issue-card">
          <p className="title">{this.props.title}</p>
          <div className="tag-div">
            {this.props.Tags.map((tag, i) => (
              <TagComponent tag={tag} key={`tagKey-${i}`} />
            ))}
          </div>
          <p className="info">{`${this.props.id} ${whenOpend(
            this.props.timeCreated
          )} by ${this.props.userName}`}</p>
        </div>
        <p className="comments">
          {this.props.numOfComments === 0 ? "" : this.props.numOfComments+"🗨️"}
        </p>
      </div>
    );
  }
}

function whenOpend(date) {
  const nowDate = new Date();
  const diffTime = Math.abs(nowDate - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
}

export default IssueComponent;
