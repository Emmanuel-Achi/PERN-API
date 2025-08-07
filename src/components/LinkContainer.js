import { useState } from 'react'
import Table from './Table'
import Form from './Form'


const LinkContainer = () => {
  //  State should be declared at the top level
  const [favLinks, setFavLinks] = useState([])

  //  Remove link by index
  const handleRemove = (index) => {
    setFavLinks((prev) => prev.filter((_, i) => i !== index))
  }

  //  Add new link to state
  const handleSubmit = (favLink) => {
    setFavLinks((prev) => [...prev, favLink])
  }

  return (
    <div className="container">
      <h1 >My Favorite Links</h1>
      <p>Add a new URL with a name to the table.</p>

      {/* Table displaying the links */}
      <Table linkData={favLinks} removeLink={handleRemove} />

      <br />

      <h3>Add New</h3>

      {/* Form for adding a new link */}
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
