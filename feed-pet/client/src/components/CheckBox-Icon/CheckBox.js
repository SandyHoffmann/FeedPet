import React from "react";

import { IconCheckbox } from "react-icon-checkbox";
import { FaHeart } from "react-icons/fa";

class Checkbox extends React.Component {

    constructor(props){
       super(props) 
       this.state = {
            checked : false
        }
    }
    
    _onCheckboxClicked = () => {
        this.setState({checked: !this.state.checked});
    }

  render() {
    return (
        <>
        <p>Teste</p>
        <IconCheckbox checked={this.state.checked} 
                    checkedIcon={<FaHeart />} 
                    uncheckedIcon={<FaHeart color="white" />} 
                    onClick={this._onCheckboxClicked}  />
                    
                   </> 
                   
    );
  }
}

export default Checkbox;