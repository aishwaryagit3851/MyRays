import React from 'react';


const AddBook = () => {
   
  return (
  <>

  <div className="addBook">
    <h1 className="red p-2">Add Books</h1>
    <div>
    <form className="form-addbook">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Author Name:</label>
    <input type="text"  id="exampleInputEmail1" className="addbook-input"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Name:</label>
    <input type="text"  id="exampleInputEmail1" className="addbook-input"/>
  
  </div>
  <div className="mb-3">
 
  <label htmlFor="bookcategory" className="form-label">Book Category:</label>

 <select name="pets"  id="cat-select" className="addbook-input">
    <option value="">--Select any cateogy--</option>
    <option value="Educational">Educational</option>
    <option value="Art">Art</option>
    <option value="Technology">Technology</option>
    <option value="Religious">Religious</option>
  
</select>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book ISBN No:</label>
    <input type="number"id="exampleInputEmail1" className="addbook-input"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Date Of Publication:</label>
    <input type="date" id="exampleInputEmail1" className="addbook-input"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">No Of Pages:</label>
    <input type="number" id="exampleInputEmail1" className="addbook-input"/>
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Short Summary:</label>
    <textarea type="text" id="exampleInputEmail1" className="addbook-input"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Book Cover Image:</label>
    <input type="image"  id="exampleInputEmail1" className="addbook-input"/>

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  </div>
  </>
  )
}
export default AddBook 