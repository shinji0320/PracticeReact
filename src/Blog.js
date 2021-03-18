import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "FaceBook"
    return (
      <>
        <Article title={"Reactの入門"} order={3}/>
        <Article title={"jsxの使い方"} order={2}/>
        <Article title={"環境構築してみよう"} order={3}/>
      </>
    )
  }
}

export default Blog