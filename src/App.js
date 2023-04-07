import './App.css';
import { useState } from 'react';
function App() {

  // username
  const [userName, setUserName] = useState('')
  //  data
  const [data, setData] = useState({})
  // on submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((result) => {
        return result.json()
      })
      .then((value) => {
        console.log(value) // fetching the data through api 
        setData(value)
      })
  }

  return (
    <>
      <h1 className='text-center text-bold mt-4'>Github user profile with React js</h1>
      <hr />
      {/* search bar */}
      <form action="" onSubmit={onSubmitHandler}>
        <div className='form_container'>
          <input type="text"
            placeholder='Search User'
            className='form_input'
            value={userName}
            onChange={ e => setUserName(e.target.value) }
          />
          <div>
            <button className='btn btn-success mt-2'>Search</button>
          </div>
        </div>
      </form>

      {/* data display */}
      <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={data.avatar_url} alt="Card image cap" />
      <div className="card-body">
      <h5 className="card-title">{data.name}</h5>
      <p className="card-text">{data.bio}</p>
    <a href={data.html_url} target="_blank"  className="btn btn-success outline">Gitub Account</a>
    </div>
  </div>

    </>
  );
}

export default App;
