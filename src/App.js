// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(()=> {
//     console.log(`It's ${emotion} right now`)
//   }, [emotion])

//   useEffect(()=> {
//     console.log(`It's ${secondary} right now`)
//   }, [secondary])

//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={() => setEmotion("sad")}>Sad</button>
//       <button onClick={() => setEmotion("excited")}>Excited</button>
//       <h2>Current secondary emtion is {secondary}</h2>
//       <button onClick={()=>setSecondary("grateful")}>Grateful</button>
//     </div>
//   );
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

// import "./App.css";
// import { useReducer } from "react";

// function App() {
//   const [checked, setChecked] = useReducer(
//     (checked) => !checked,
//     false
//     );

//   return (
//     <div className="App">
//       <input type="checkbox" value={checked} onChange={setChecked} />
//       <label>{checked ? "checked" : "not checked"}</label>
//     </div>
//   );
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

// import "./App.css";
// import { useRef } from "react";

// function App() {
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     console.log(title)
//     alert(`${title}, ${color}`)
//     //returns form to empty string
//     txtTitle.current.value = "";
//     hexColor.current.value = "";

//   };
//   return (
//     <form onSubmit={submit}>
//       <input type="text" placeholder="color title..." ref={txtTitle} />
//       <input type="color" ref={hexColor} />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [title, setTitle] = useState("");
//   const [color, setColor] = useState("#000000");
//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${title}, ${color}`);
//     //resets form
//     setTitle("");
//     setColor("#000000");
//   };
//   return (
//     <form onSubmit={submit}>
//       <input
//         type="text"
//         placeholder="color title..."
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//       <input
//         type="color"
//         value={color}
//         onChange={(event) => setColor(event.target.value)}
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

// import "./App.css";
// import { useState } from "react";

// function useInput(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   return [
//     { value, onChange: (e) => setValue(e.target.value) },
//     () => setValue(initialValue),
//   ];
// }

// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] = useState("#000000"); //this doesnt work but colorProps undefinded useinput below works
//   // const [colorProps, resetColor] = useInput("#000000");
//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${titleProps.value}, ${colorProps.value}`);
//     //resets form
//     resetTitle();
//     resetColor();
//   };
//   return (
//     <form onSubmit={submit}>
//       <input {...titleProps} type="text" placeholder="color title..."/>
//       <input {...colorProps} type="color"/>
//       <button>ADD</button>
//     </form>
//   );
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

// import "./App.css";
// import { useState, useEffect } from "react";

// function GithubUser({name, repo, avatar}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>Current Public Repo count: {repo}</p>
//       <img src={avatar} height={150} alt={name}/>
//     </div>
//   )
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     fetch(`https://api.github.com/users/slmulti`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(()=>setLoading(false))
//       .catch(setError)
//   }, []);
//   if (loading) return <h1>Loading...</h1> 
//   if (error) return <pre>{JSON.stringify(error)}</pre>
//   if (!data) return null;
//   return (
//     <GithubUser name={data.login} repo={data.public_repos} avatar={data.avatar_url}/>
//   )
// }

// export default App;

//=======================================================================================================================
//=======================================================================================================================

import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({name, repo, avatar}){
  return (
    <div>
      <h1>{name}</h1>
      <p>Current Public Repo count: {repo}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/slmulti`)
      .then((response) => response.json())
      .then(setData)
      .then(()=>setLoading(false))
      .catch(setError)
  }, []);
  if (loading) return <h1>Loading...</h1> 
  if (error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null;
  return (
    <GithubUser name={data.login} repo={data.public_repos} avatar={data.avatar_url}/>
  )
}

export default App;