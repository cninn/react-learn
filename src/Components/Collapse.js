import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/*

constructoru oluşturduktan sonra 
ilk olarak render methodu çalıştı
sonra onclick eventi çalıştığında 
setstate stateyi güncelledi. yani trigger olarak render etti. 
ve yenilenmiş render gösterildi

*/

class Collapse extends React.Component {
  //!the props is inmutable but the states mutable
  //? yani sen mesela card içeriğini bir apiden alıyor olsaydın. propslar ile işlem yapamazdın çünkü props içerikleri inmutabledir. yada mesela bir nesneye özellik atayacak olursan stateleri kullanacaksın.
  constructor() {
    super();

    this.state = {
      showContent: false,
    };
//!eğer arrow function ile showMoreyi çalıştırmıyorsan bind işlemini bu şekilde kullanmalısın.
   /*  this.showMore = this.showMore.bind(this) */
 

  }
  showMore=()=>{
   
    this.setState({showContent:!this.state.showContent}) 

  }


  render() {

    return (
      <div>
        <button onClick={this.showMore} style={{ width: 286 }} className={`btn btn-${this.state.showContent ? 'danger' : 'success'} w-100`}>

          {this.state.showContent ? "Kapat" : "Göster"}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
