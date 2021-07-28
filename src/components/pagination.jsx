import React, { Component } from 'react';
import _ from "lodash";

class Pagination extends Component {
    
    render() { 
    const {itemsCount,pageSize,currentPage,onPageChange} = this.props;
    
    const pageNo = Math.ceil(itemsCount/pageSize);
    
    if(pageNo === 1) return null;
    const pages = _.range(1,pageNo+1);
      

    return ( 
    <React.Fragment>
        <nav >
            <ul className="pagination">
                {pages.map( page => (
                    <li key={page} className={page===currentPage?"page-item active":"page-item"}>
                        <a className="page-link" href="#" onClick={()=>onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </React.Fragment> );
    }
}
 
export default Pagination;