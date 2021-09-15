import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const Box  = () => {
  
    const [myOptions, setMyOptions] = useState([])
    
    const getDataFromAPI = () => {
      console.log("Options Fetched from API")
    
      fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        return response.json()
      }).then((res) => {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name)
        }
        setMyOptions(myOptions)
      })
    }
    
    return (
      <div style={{ 
        marginLeft: '700px',
        marginRight: '250px',
         marginTop: '40px' }}>
        <h3></h3>
        <Autocomplete
          style={{ width: 700 ,
            backgroundColor: 'white',
            paddingTop: '3px'
          }}
          freeSolo
          autoComplete
          autoHighlight
          options={myOptions}
          renderInput={(params) => (
            <TextField {...params}
              onChange={getDataFromAPI}
              variant="outlined"
              label="Search Box"
            />
          )}
        />
      </div>
    );
  }