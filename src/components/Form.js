import { useState } from 'react'


const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    handleSubmit(formData)  // You pass data to parent component
    setFormData({ name: '', url: '' }) // Reset form
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="name" className="block font-medium mb-1">Link Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
       
        />
      </div>
      <div>
        <label htmlFor="url" className="block font-medium mb-1">URL:</label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
         
        />
      </div>
      <button
        type="submit"
       
      >
        Add Link
      </button>
    </form>
  )
}

export default Form
