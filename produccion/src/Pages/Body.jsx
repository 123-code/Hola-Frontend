import React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IoIosPeople } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiChecklist } from 'react-icons/gi';

const NestedList = () => {
  const navigate = useNavigate();



  const listSubheaderStyle = {
    backgroundColor: '#3b5998', // Add your cool color code here
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    width: '300px',
  };
  
  

  const listItemButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '5px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    transition: 'background-color 0.3s ease',
  };

  const listItemIconStyle = {
    marginRight: '10px',
    fontSize: '1.2rem',
  };

  const listItemTextStyle = {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
  };
  

  return (
    <List>
     <ListSubheader
  component="div"
  id="nested-list-subheader"
  sx={{ ...listSubheaderStyle, mx: 'auto' }}
>
  Nuestros Servicios:
</ListSubheader>


      <ListItemButton onClick={() => navigate("/personalized")} style={listItemButtonStyle}>
        <BsFillPersonFill style={listItemIconStyle} />
        <ListItemText primary="Terapias Personalizadas" style={listItemTextStyle} />
      </ListItemButton>

      <ListItemButton onClick={() => navigate("/grupales")} style={listItemButtonStyle}>
        <IoIosPeople style={listItemIconStyle} />
        <ListItemText primary="Terapias Grupales" style={listItemTextStyle} />
      </ListItemButton>

      <ListItemButton onClick={() => navigate("/evaluaciones")} style={listItemButtonStyle}>
        <GiChecklist style={listItemIconStyle} />
        <ListItemText primary="Evaluaciones" style={listItemTextStyle} />
      </ListItemButton>
    </List>
  );
};

export default NestedList;
