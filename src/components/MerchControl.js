import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm"
import MerchDetail from "./MerchDetail";
import EditMerchForm from "./EditMerchForm"

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageView: false,
      mainMerchList: [],
      selectedItem: null,
      editItemForm: false
    };
  }

  handleClick = () => {
   if (this.state.selectedItem !== null){
    this.setState({
      pageView: false,
      selectedItem: null,
      editItemForm: false
    });
   } else {
     this.setState(prevState => ({
       pageView: !prevState.pageView
     }));
   } 
  }

  handleEditClick = () => {
    this.setState({editItemForm: true});
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainMerchList = this.state.mainMerchList.concat(newItem);
    this.setState({mainMerchList: newMainMerchList, pageView: false});
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainMerchList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingSelectedItem = (id) => {
    const deletedItemMerchList = this.state.mainMerchList.filter(item => item.id !== id);
    this.setState({
      mainMerchList: deletedItemMerchList,
      selectedItem: null
    });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
                        .filter(item => item.id !== this.state.selectedItem.id)
                        .concat(itemToEdit);
    this.setState({
      mainMerchList: editedMainMerchList,
      editItemForm: false, 
      selectedItem: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
      if(this.state.editItemForm !== false) {
        currentlyVisibleState = <EditMerchForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList}/>
        buttonText= "Return to List"
      } else if (this.state.selectedItem !== null) {
      currentlyVisibleState = <MerchDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingSelectedItem} editClick = {this.handleEditClick}/>
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