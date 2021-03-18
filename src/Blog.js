import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };
  render() {
    const authorName = "FaceBook"
    return (
      <>
        <Article title={"Reactの入門"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()}/>
      </>
    )
  }
}

export default Blog