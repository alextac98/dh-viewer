import './App.css'

// Import Material UI components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
// import FileUploadIcon from '@mui/icons-material/FileUpload';

// Import React components
import React, {useState, Fragment} from 'react';

// Import data management
import { changeDHTable, create_new_dh_row, deleteRow, get_data } from './Database';


// ******************************* //
// ***** Create Table Layout ***** //
// ******************************* //
function DHTableSection(props){
    const [data, setData] = useState(get_data());

    const handleAddRow = (event) => {
        setData((prevData) => [...prevData, create_new_dh_row()]);
    };

    function handleDeleteRow (id) {
        const table = [...data];
        table.splice(deleteRow(id), 1);
        setData(table);
    }

    return (
        <Fragment>
            {DHTableTitle()}
            {/* <DisplayDHTable/> */}
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell id="dhtable-LinkNameColumn" 
                            size='small'
                            align="center" 
                            sx={{ fontWeight: 'bold'}}>
                                Link Name
                        </TableCell>
                        <TableCell id="dhtable-DColumn" 
                            size='small'
                            align="center"
                            sx={{ fontWeight: 'bold'}}>
                                d
                        </TableCell>
                        <TableCell id="dhtable-ThetaColumn" 
                            size='small'
                            align="center"
                            sx={{ fontWeight: 'bold'}}>
                                θ (deg)
                        </TableCell>
                        <TableCell id="dhtable-RColumn"
                            size='small'
                            align="center"
                            sx={{ fontWeight: 'bold'}}>
                                r
                        </TableCell>
                        <TableCell id="dhtable-AlphaColumn"
                            size='small'
                            align="center"
                            sx={{ fontWeight: 'bold'}}>
                                α (deg)
                        </TableCell>
                        <TableCell id="dhtable-ButtonColumn"
                            size='small'
                            align="right"
                            sx={{ fontWeight: 'bold'}}>

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <DHTableRow
                            key={row.id} 
                            id={row.id}
                            name={row.name}
                            dh={row.dh}
                            handleDeleteRow={handleDeleteRow}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            {/* Create Bottom */}
        <AddDHRowButton handleAddRow={handleAddRow}/>
        </Fragment>
    );
}

function DHTableTitle(){
    return (
        <span className="dhtabletitle">DH Table</span>
    );
}

// **************************** //
// ***** Table Components ***** //
// **************************** //

function AddDHRowButton({handleAddRow}){
 
    return (
        <Button variant="contained"
        onClick={handleAddRow}>
            Add DH Row
        </Button>
    );
}

function DHTableRow({id, name, dh, handleDeleteRow}){

    return (
        <TableRow>
            <DHRowName id={id}       defaultName={name}/>
            <DHCell id={id+"_d"}     defaultValue={dh.d}/>
            <DHCell id={id+"_theta"} defaultValue={dh.theta}/>
            <DHCell id={id+"_r"}     defaultValue={dh.r}/>
            <DHCell id={id+"_alpha"} defaultValue={dh.alpha}/>
            <TableCell align="right">
                <RowDeleteButton id={id}
                                 handleDeleteRow={handleDeleteRow}/>
            </TableCell>
        </TableRow>
    );
}

function DHRowName({id, defaultName}) {

    const [name, setName] = React.useState(defaultName);
    // const [isError, setIsError] = React.useState(false);

    function handleOnBlur (event) {
        const splitID = event.target.id.split('_');
        const value = event.target.value.trim();

        if (value === null || value === "") {
            // TODO: make a UX friendly error system #31
            console.error("DH Row must have a name");
            return;
        }
        // Change value in database
        changeDHTable(splitID[0], "name", value);
        }

    function handleOnChange (event) {
        setName(event.target.value);
    }

    return (
        <TableCell align="left">
            <Input  id={id+"_name_input"}
                    value={name}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}/>
        </TableCell>
    );
}

function DHCell({id, defaultValue}) {

    const [value, setValue] = React.useState(defaultValue);
    const [isError, setIsError] = React.useState(false);

    const handleOnBlur = (event) => {
        // TODO: Add in a check to see if value has changed
        const splitID = event.target.id.split("_");
        const value = Number(event.target.value);
        
        // Return error if value is not a number
        if (isNaN(value)) {
            // TODO: make a UX friendly error system #31
            console.error("DH value received not a number");
            return;
        }
        if (event.target.value === ""){
            setValue(0);
        }
        changeDHTable(splitID[0], splitID[1], value);
    };

    const onTextChange = (event) => {
        setValue(event.target.value);
        if (isNaN(Number(event.target.value))){
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    return (
        <TableCell align="center">
            <Input id={id+"_input"}
                error={isError}
                inputProps={{inputMode: 'numeric'}}
                value={value}
                onChange={onTextChange}
                onBlur={handleOnBlur}/>
            {/* Add button in here to select as variable theta */}
        </TableCell>
    );
}

function RowDeleteButton({id, handleDeleteRow}){
    const [anchorButton, setAnchorButton] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorButton(event.currentTarget);
    };

    const handlePopoverClose = (event) => {
        setAnchorButton(null);
    };

    const isHoverMenuOpen = Boolean(anchorButton)

    return (
        <div>
            <IconButton id={id+"_delete_button"}
                aria-label="Delete" 
                onClick={() => handleDeleteRow(id)}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                >
                    <DeleteIcon/>
            </IconButton>
            <Popover id={id+"_delete_popover"}
                sx={{pointerEvents: 'none',}}
                open={isHoverMenuOpen}
                anchorEl={anchorButton}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            
            >
                <Typography sx={{ p: 1 }}>Delete Row</Typography>
            </Popover>
        </div>
    );
}

export default DHTableSection;