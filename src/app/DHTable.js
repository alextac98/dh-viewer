import './App.css'
import Button from '@mui/material/Button'
import { Input } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let data = [
    createLink('Base Link', 0, 0, 0, 0)
];

function createLink(name, d, theta, r, alpha, model) {
    return {
        name,                   // Name of link
        d, theta, r, alpha,     // DH Parameters
        model                   // Link Model URI (stl)
    }
}

export function DHTable(){
    return (
        <div className="dhtable">
            {DHTableTitle()}
            <DisplayDHTable/>
            {/* Create Bottom */}
            
        </div>
    );
}

function DHTableTitle(){
    return (
        <span className="dhtabletitle">DH Table</span>
    );
}

function DisplayDHTable(props){
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                <TableRow>
                    <TableCell align="left">Link Name</TableCell>
                    <TableCell align="center">d</TableCell>
                    <TableCell align="center">θ (deg)</TableCell>
                    <TableCell align="center">r</TableCell>
                    <TableCell align="center">α (deg)</TableCell>
                    <TableCell align="right">Link Model</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <DHTableRow link={row}/>
                        
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



function DHTableRow(props){
    return (
        <TableRow key={props.link.name}>
            <TableCell align="left">
                <Input value={props.link.name}/>
            </TableCell>
            <DHCell dhvalue={props.link.d}/>
            <DHCell dhvalue={props.link.theta}/>
            <DHCell dhvalue={props.link.r}/>
            <DHCell dhvalue={props.link.alpha}/>
            <Button variant="contained" disabled>
                Upload
            </Button>
        </TableRow>
    );
}

function DHCell(props) {
    return (
        <TableCell align="center">
            <Input value={props.dhvalue}/>
            {/* Add button in here to select as variable theta */}
        </TableCell>
    );
}

