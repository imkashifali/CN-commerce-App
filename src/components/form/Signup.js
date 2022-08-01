import React from 'react'
import './styles.css'


const Signup = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: false
  })
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData(preformData => ({
      ...preformData,
      [name]: type === "checkbox" ? checked :value
    }))
  }



  function handleSubmit(e) {
    e.preventDefault()
    if(formData.password === formData.passwordConfirm){
      console.log("LOgged Succesfully")
    }else{
      console.log("Wrong INfoo ")
      return

    }
    if(formData.joinedNewsletter){
      console.log("thianks for signup ")
    }
  }
  console.log(formData)
  return (
    <div className="form-container">
     <p>test</p>
      <p>test</p>
       


      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name='passwordConfirm'
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name='joinedNewsletter'
            onChange={handleChange}
            checked={formData.joinedNewsletter}

          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Signup