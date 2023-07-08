import React, { useState } from 'react'


const Form = () => {

const [FormData, setFormData] = useState({
  firstName:"",
  lastName:"",
  email: "",
  Comment:"",
  checkbox: "",
  radioBtn:"",
  selectCar:""
})

const inputChangeHandler = (event)=>{

  // setFormData(PrevFormData=>{
  //   return{
  //     ...PrevFormData,
  //     [event.target.name] : event.target.value
  //   }
  // }
  // )
  const {name, type, value, checked} = event.target;

    setFormData(PrevFormData => {
      return({
          ...PrevFormData,
          [name] : type === 'checkbox' ? checked : value
      })
    })
}

const onSubmitHandler = ()=>{
  console.log(FormData);
  alert(JSON.stringify(FormData));
}
  return (
    <>
      <form>

      <div className="form-group row">
          <label for="inputLastl3" className="col-sm-2 col-form-label">FirstName</label>
          <div className="col-sm-10">
            <input type="text" name='firstName' className="form-control" id="inputnamel3" placeholder="FirstName" value={FormData.firstName} onChange={inputChangeHandler}/>
          </div>
        </div>

        <div className="form-group row">
          <label for="inputEmail32" className="col-sm-2 col-form-label">LastName</label>
          <div className="col-sm-10">
            <input type="text" name='lastName' className="form-control" id="inputnamel3" placeholder="LastName" onChange={inputChangeHandler}/>
          </div>
        </div>


        <div className="form-group row">
          <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" name='email' className="form-control" id="inputEmail3" placeholder="Email" onChange={inputChangeHandler} />
          </div>
        </div>


        <div class="form-group row">
          <label for="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Comment</label>
          <textarea class="form-control" name='Comment' id="exampleFormControlTextarea1" rows="3" onChange={inputChangeHandler}></textarea>
        </div>


        <div className="form-group row">
          <div className="col-sm-2">Checkbox</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" name='checkbox' type="checkbox" id="gridCheck1" onChange={inputChangeHandler} />
              <label className="form-check-label" for="gridCheck1">
                Am I Visible ?
              </label>
            </div>
          </div>
        </div>


        <fieldset className="form-group">

          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">

              <div className="form-check">
                <input className="form-check-input"  type="radio" name="radioBtn" id="gridRadios1" checked={FormData.radioBtn=== "option1"} value="option1" onChange={inputChangeHandler} />
                <label className="form-check-label" for="gridRadios1">
                  Online
                </label>
              </div>

              <div className="form-check">
                <input className="form-check-input"  type="radio" name="radioBtn" id="gridRadios2" checked={FormData.radioBtn=== "option2"} value="option2" onChange={inputChangeHandler} />
                <label className="form-check-label" for="gridRadios2">
                  Offline
                </label>
              </div>

            </div>
          </div>

        </fieldset>


      <select name='selectCar' class="custom-select" onChange={inputChangeHandler}>
  <option selected>Select Your Favourite Car</option>
  <option value="Fortuner">Fortuner</option>
  <option value="Defender">Defender</option>
  <option value="BMW">BMW</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Audi">Audi</option>
  <option value="Rolls Royce">Rolls Royce</option>

</select>
<br />
<br />
<button type="button" class="btn btn-danger" onClick={onSubmitHandler}>Submit</button>

      </form>
    </>
  )
}

export default Form