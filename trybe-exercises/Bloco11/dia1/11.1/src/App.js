import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const array = ['estudar', 'almoçar', 'dar comida para os gatos', 'ir ao mercado'];
  return (
      <ol>
        {array.map((element) => Task(element))}
      </ol>
  );
}

export default App;
