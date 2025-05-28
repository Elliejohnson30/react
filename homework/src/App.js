import logo from './logo.svg';
import './App.css';
import ImgComponent from './ImgComponent';
import InfoComponent from './InfoComponent';
import Skills from './Skills';

const skills = [
// add two more

  { id: 1,
    name: "Javascript",
    backgroundColor: "yellow"

  }
  ,
  { id: 2,
    name: "CSS",
    backgroundColor: "blue"
  }
  ,
  {id: 3,
    name: "HTML",
    backgroundColor:"green"
  }
  ,
  {id:4,
    name: "JAVA",
    backgroundColor:"orange"
  }
  ,
  {id: 5,
    name: "Python",
    backgroundColor:"purple"
  }
  

];
function App() {
  return (
    <div className="App">
      <ImgComponent
        src="https://nwscdn.com/media/catalog/product/cache/h700xw700/f/o/forza_size_5_competition_standard_volleyball_for_all_volleyball_tournaments_and_matches.jpg" />
      <InfoComponent
        name="Ellie Johnson"
        description="I play Volleyball!" />



      {/* step one */}
      {/* array.map; arrow func inside map */}
{/* step two arrow function inside map
step 3 skills.map carry down the information in props to create a skills component*/}
      {/* {[1, 2, 3, 4, 5].map()} */}

      {/* {
        [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }].map((props) => {
          return (
            <p>{props.name}</p>
          )
        })
      } */}

      {skills.map(
        (props)=>{
          return(
            <Skills
          name={props.name}
          backgroundColor={props.backgroundColor}/>
          )
        }
      )}




      
      


      
    </div>
  );

}

export default App;
