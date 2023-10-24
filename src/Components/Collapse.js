import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class Collapse extends React.Component {
  state = { showContent: true };

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {

    
    return (
      <div>
        <button
          onClick={this.showMore}
          style={{ width: 286 }}
          className={`btn btn-${this.state.showContent 
            ? "danger" 
            : "success"}
            w-100`}
        >
        {this.state.showContent 
        ? "Kapat" 
        :React.Children.map(this.props.children ,children => children.props.cardTitle)}
        </button>
        {this.state.showContent 
        ? 
        (
          <div className="collapse show">
            {React.Children.map(this.props.children ,children => children)}
          </div>
        ) 
        : null}
      </div>
    );
  }
}

export default Collapse;
