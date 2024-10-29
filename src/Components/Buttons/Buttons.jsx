import "./Buttons.css";
import SearchIcon from '@mui/icons-material/Search';
import { Button as MUIButton } from '@mui/material';  

export default function Button() {  
  return (
    <MUIButton variant="contained">
       <SearchIcon />
    </MUIButton>
  );
}
