import { useForm} from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    //simulate API call
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("Submit the form", data)
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
    <label>First Name: </label>
      <input type="text" 
      {...register('firstName', 
        {
          required: true, 
          minLength: { 
            value: 3, 
            message: "min 3 char" 
          } })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
    <label>Middle Name: </label>
      <input type="text" 
      {...register('middleName',
        {
        required:true,
        maxLength:{
          value:7,
          message:"max 7 character"
      }})}
      />
      {errors.middleName &&<p>{errors.middleName.message}</p>}
      </div>
      <br/>
      <div>
    <label>Last Name: </label>
      <input type="text" 
      {...register('lastName',
        {required:true}
      )}
      />
      </div>
      <br/>

    <input type="submit" disabled={isSubmitting}
    value={isSubmitting?"Submitting":"submit"} />
   </form>
  )
}

export default App
