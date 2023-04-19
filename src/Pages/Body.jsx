import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {IoIosPeople} from 'react-icons/io';
import {BsFillPersonFill} from 'react-icons/bs';
import{GiChecklist} from 'react-icons/gi';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open); 
  }; 

  return (
    <List>
      <ListSubheader component="div" id="nested-list-subheader">
        Nuestros Servicios: 
      </ListSubheader>


      <ListItemButton onClick={()=>{navigate("/personalized")}}>
      <BsFillPersonFill/>
      <ListItemText primary="Terapias Personalizadas" />
      </ListItemButton> 

      <ListItemButton>
      <IoIosPeople />
      <ListItemText primary="Terapias Grupales" />
      </ListItemButton>

      <ListItemButton>
        <GiChecklist/>
      <ListItemText primary="Evaluaciones" />
      </ListItemButton>

    </List>
  );
}