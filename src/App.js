import React, { Component } from 'react'
class App extends Component {
  constructor(){
    super();
    this.state={
      "formInputData":"",
      "storeData":[]
    }
  }
  storeInputData=(event1)=>{
    this.setState({
      formInputData:event1.target.value
    })
  }
  storeFinalData=()=>{
    this.setState({
      storeData:[...this.state.storeData,this.state.formInputData]
    })
  }
  //Deleting an item from array//
  deleteStoreData=(event2)=>{
    var tempData=this.state.storeData;
    if(window.confirm("Are you sure ?")==true){
      tempData.splice(Number(event2.target.id),1)
      this.setState({
        storeData:tempData
      })
    }
  }

  render() {
    return (
      <div className="row">
        {/* First Column*/}
        <div className="col-lg-5 col-md-10">
          <div className="card mt-3">
            <div className="card-body">
              <form>
                 <input type="text"
                 className="form-control"
                 placeholder="Add data..." onKeyUp=
                 {(inputEvent)=>{this.
                  storeInputData(inputEvent)}}/>
                 <br/>
                 <button type="button" className="btn
                 btn-primary" onClick={this.storeFinalData}> Add data </button>
              </form>
            </div>
          </div>
        </div>
        {/* Second Column*/}
        <div className="col-lg-5 col-md-10">
          <div className="card mt-3">
            <div className="card-body">
              <ul className="list-group">
                {this.state.storeData.map((item,index)=>(
                  <li className="list-group-item" key={index}> {item} <button className="btn btn-danger" id = {index} onClick={(deleteEvent)=>{this.deleteStoreData(deleteEvent)}}> delete </button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
