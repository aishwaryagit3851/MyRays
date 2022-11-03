import React from 'react';

const Enquiry = () => {
   
  return (
  <>

  <div className="Enquiry">
    <h1 className="red p-3">View Enquiry</h1>
    <table className="table-2">
      <tr className="heading">
      <th className="th-2">Sr No</th>
      <th className="th-2">Name</th>
      <th className="th-2">Email Id</th>
      <th className="th-2">Mobile Number</th>
      <th className="th-2">Message</th>
      <th className="th-2">Sattus</th>
      </tr>
      <tr><td colSpan={5}><h6>No data to show</h6></td>
      <td><button className="btn">Delete</button></td></tr>
    </table>
  </div>
  </>
  )
}
export default Enquiry 