
import React,{useState,useMemo} from 'react';
  import { Table } from "react-bootstrap";
import Example from "./Modal";
import Pagination from './pagination';
  import JsonData from 'c:/project/my-project/src/list.json'

  let PageSize = 10;
  const Tablee = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return JsonData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
   
        // const DisplayData=JsonData.map(
        //     (info)=>{
        //         return(
        //             <tr>
        //                 <td><input type="checkbox"/></td>
        //                 <td>{info.name}</td>
        //                 <td>{info.email}</td>
        //                 <td>{info.role}</td>
        //                 <td>
        //                 <Example/>
        // <button type="button" class="btn btn-default btn-sm">
        //                     <span class="glyphicon glyphicon-trash"></span>
        //                     </button>
        //                 </td>
        //             </tr>
        //         )
        //     }
        // )
    return (
    <div>
      <div  className="table-wrapper  table-responsive{-sm|-md|-lg|-xl}overflow-x:auto;  " >
		{/* //table-responsive size="sm" */}
        {/*table-wrapper  table-responsive{-sm|-md|-lg|-xl}overflow-x:auto;  */}
        
	<Table className="table table-sm table-condensed"  hover table responsive  table-wrapper w-auto>
          <thead>
            <tr>
            <th><input type="checkbox"/></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {/* {DisplayData} */}
            {currentTableData.map(item => {
            return (
              <tr>
                  <td><input type="checkbox"/></td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                        <Example/>
        <button type="button" class="btn btn-default btn-sm">
                            <span class="glyphicon glyphicon-trash"></span>
                            </button>
                        </td>
                    
              </tr>
            );
          })}
          </tbody>
       </Table>
       </div>
    
       <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={JsonData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </div>
    );
  }

  export default Tablee;
  