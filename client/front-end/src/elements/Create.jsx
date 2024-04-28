import  { useState } from 'react'

export const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        
        axios.post('/add_user', values)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <div className='row'>
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' className='form-control'  required onChange={(e)=> setValues({...values, name: e.target.value})} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' className='form-control' required onChange={(e)=> setValues({...values, name: e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='gender'>Gender: </label>
                    <input type='text'  name='gender' className='form-control' required onChange={(e)=> setValues({...values, name: e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age: </label>
                    <input type='number' name='age' className='form-control' required onChange={(e)=> setValues({...values, name: e.target.value})}/>
                </div>
            </form>
        </div>
    </div>
  )
}
