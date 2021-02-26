import React from "react";

class Image extends React.Component {
  // references allow us to access a component directly without DOM access
  // this way we can get details about that component easily such as its height and width
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  // the properties aren't available to us right at the start, it takes time to load the images so we need to access the clientHeight prop after the images have been loaded and not at the start
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default Image;
