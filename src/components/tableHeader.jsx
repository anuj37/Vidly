import React, { Component } from 'react';
import {BsFillCaretUpFill,BsFillCaretDownFill} from "react-icons/bs";

class TableHeader extends Component {

    raisesort = path => {
        let sortColumn ={...this.props.sortColumn};
        if(sortColumn.path===path)
            sortColumn.order=(sortColumn.order==="asc")?"desc":"asc";
        else{
            sortColumn.path=path;
            sortColumn.order="asc";
        }
        this.props.onSort(sortColumn);  
    };

    renderSortIcon = column => {
        const {sortColumn} =this.props;
        if(column.path!==sortColumn.path) return null;
        if(sortColumn.order==="asc")
            return <BsFillCaretUpFill />;
        if(sortColumn.order==="desc")    
            return <BsFillCaretDownFill />;
    };

    render() {
        const {columns}= this.props; 
        return ( 
            <thead>
                <tr>
                {
                 columns.map(column => (
                    <th 
                    key={column.path||column.key}
                    onClick={()=>this.raisesort(column.path)} 
                    scope="col">
                    {column.label}{this.renderSortIcon(column)}
                    </th>
                 ))   
                }
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;