import React, { Component } from 'react';

class TagComponent extends Component {
    render() {
        return (
            <span className="tag-card">
            <span className={removeSpaces(this.props.tag)}>{this.props.tag}</span>
            </span> 
        );
    }
}

function removeSpaces(tag){ 
    let str = tag.replaceAll(" ", "-");
    str = str.replaceAll(":", "");
    return str
}

export default TagComponent;