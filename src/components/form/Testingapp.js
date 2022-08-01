import { Button } from '@material-ui/core';
import React from 'react'

const Testingapp = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor:""
  })


  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(preformData => {
      return {
        ...preformData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const handleSubmite = (e) =>{
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmite}>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>

      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="lastName "
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}

      />
      <input
        type="email"
        placeholder="Email "
        onChange={handleChange}
        name="email"
        value={formData.email}

      />

      <textarea
        placeholder="Comments "
        onChange={handleChange}
        name="comment"
        value={formData.comment}

      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"

      />
      <label htmlFor='isFriendly'> are you friendly user</label>

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name='employment'
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}

        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name='employment'
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}


        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name='employment'
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}


        />
        <label htmlFor="full-time">Full-time</label>
        <br />

      </fieldset>

      <select id="favColor"
      value={formData.favColor}
      onChange={handleChange}
      name="favColor"
      >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <br/>

            <Button type="submit">submit</Button>
    </form>
  )
}

export default Testingapp