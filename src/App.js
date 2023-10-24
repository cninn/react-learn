import Card from "./Components/Card";
import Collapse from "./Components/Collapse";

function App() {
  return (
    <div className="container">


      {/*//TODO : COLLAPSE CARD  */}

      <div className="row">
        <div className="App d-flex gap-2 pt-2">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
              //!As you can see these are props objects.
                cardTitle="Gizemli Savaş"
                cardText="merhaba dünya"
                image="https://picsum.photos/id/180/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Gizemli Savaş"
                cardText="merhaba dünya"
                image="https://picsum.photos/id/40/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Gizemli Savaş"
                cardText="merhaba dünya"
                image="https://picsum.photos/id/40/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>

       {/*//! COLLAPSE CARD END  */}

    </div>
  );
}

export default App;
