import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';//!proptypes importing

//! if not use functional style. you must put this props before.
class Card extends React.Component {
  render() {
    return (
      <div className="card w-100" style={{ width: "18rem" }}>
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <a href="./" className="btn btn-success">
            Ürüne git
          </a>
        </div>
      </div>
    );
  }
}
//! assing default propstype
Card.defaultProps = {
  cardTitle :'Başlık',
  cardText:'İçerik',
  image:'https://picsum.photos/id/180/200/300'
}

//! proptypes checking and required fetch
Card.propTypes = {
  cardText: PropTypes.string.isRequired
}


export default Card;
