import './App.css';
import carreerpic from "./undrawimage.svg"

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-5 imagewidth">
            <img class="sathish" src={carreerpic} alt="imagedarw"></img>
          </div>

          <div class="col formwidth">
          <form class="row g-3 newone">
            <h1>Order Form</h1>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Order_Id</label>
            <input type="email" class="form-control" id="inputEmail4"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Order_Date</label>
            <input type="date" class="form-control" id="inputPassword4"/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address Line-1</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address Line-2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Requested_by</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">Delivery_place</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Chennai</option>
              <option>Madurai</option>
              <option>Trichy</option>
              <option>Coimbatore</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Deliver Date</label>
            <input type="date" class="form-control" id="inputZip"/>
          </div>
          <div class="col-12 formcheckbox">
            <p class="align palign">Item Status   :</p>
            <div class="form-check align">
              <input class="form-check-input" type="radio" name="type" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Work-in-Progress
              </label>
            </div>
            <div class="form-check align">
              <input class="form-check-input" type="radio" name="type" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Completed
              </label>
            </div>
            <div class="form-check align">
              <input class="form-check-input" type="radio" name="type" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Pending
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Mobile Number</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">Scaffold Type</label>
            <select id="inputState" class="form-select">
              <option selected>...Choose...</option>
              <option>Scafold_long</option>
              <option>Scafold_Medium</option>
              <option>Scafold_Short</option>
              <option>Scafold_Join</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Material_Count</label>
            <input type="text" class="form-control" id="inputZip"/>
          </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button class="btn btn-primary me-md-2 but1" type="button">SUBIT</button>
            <button class="btn btn-primary but2" type="button">GET DATA</button>
            <button class="btn btn-primary but3" type="button">RESET</button>
        </div>
        </form>
          </div>
        </div>

    </div>
        
        
    </div>
  );
}

export default App;
