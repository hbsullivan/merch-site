import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm"
import MerchDetail from "./MerchDetail";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainMerchList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
   if (this.state.selectedItem !== null){
    this.setState({
      pageView: false,
      selectedItem: null
    });
   } else {
     this.setState(prevState => ({
       pageView: !prevState.pageView
     }));
   } 
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainMerchList = this.state.mainMerchList.concat(newItem);
    this.setState({mainMerchList: newMainMerchList, pageView: false});
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainMerchList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem !== null) {
      currentlyVisibleState = <MerchDetail item = {this.state.selectedItem}/>
      buttonText = "Return to List"
    } else if(this.state.pageView) {
      currentlyVisibleState = <NewMerchForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to List"
    } else {    
      currentlyVisibleState = <MerchList merchList = {this.state.mainMerchList} onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MerchControl;