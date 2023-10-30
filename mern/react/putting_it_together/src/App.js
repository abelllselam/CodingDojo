import "./App.css";
import Create from "./components/Create";

function App() {
  const person = [
    { fName: "Jane", lName: "Doe", age: 45, hairColor: "Black" },
    { fName: "John", lName: "Smith", age: 88, hairColor: "Brown" },
    { fName: "Millard", lName: "Fillmore", age: 50, hairColor: "Brown" },
    { fName: "Maria", lName: "Smith", age: 62, hairColor: "Brown" },
  ];

  return (
    <div className="App">
      <fieldset>
        {person.map((onePerson) => {
          return (
            <Create
              fName={onePerson.fName}
              lName={onePerson.lName}
              age={onePerson.age}
              hairColor={onePerson.hairColor}
            />
          );
        })}
      </fieldset>
    </div>
  );
}

export default App;
