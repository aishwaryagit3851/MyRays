import React from 'react';


const ViewBook = () => {
   
  return (
  <>

  <div className="ViewBook"  >
    <h1 className="red p-3">View Book</h1>
    <div>
    <table className="table-1">
      <tr className="heading">
      <th className="th-1">Sr No</th>
      <th className="th-1">Book Id</th>
      <th className="th-1">Author Name</th>
      <th className="th-1">Book Name</th>
      <th className="th-1">Book Category</th>
      <th className="th-1">Book ISBN No</th>
      <th className="th-1">Date Of Puliscation</th>
      <th className="th-1">No Of Pages</th>
      <th className="th-1">Short summary</th>
      <th className="th-1">Book Cover</th>
      <th className="th-1">Status</th>
      </tr>
      <tr><td colSpan={9}><h6>No data to show</h6></td>
      <td><button className="btn">Edit</button></td>
      <td><button className="btn">Delete</button></td></tr>

    </table></div>
  </div>
  </>
  )
}
export default ViewBook