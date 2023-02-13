import './App.css';

function App() {
  function func1()
  {
    let a = document.querySelector('.App-header');
    a.style.backgroundColor = "blue";
  }

  function func2()
  {
    let a = document.querySelector('.App-header');
    a.style.backgroundColor = "red";
  }

  function func3()
  {
    let a = document.querySelector('.App-header');
    a.style.backgroundColor = "green";
  }
  return (
    <div className="App">
      <header className="App-header" id='elem'>
        <p>


          <button onClick={func1} className="btnApp" id='btn1'>Синий</button>
          <button onClick={func2} className="btnApp" id='btn2'>Красный</button>
          <button onClick={func3} className="btnApp" id='btn3'>Зеленый</button>

        </p>
        <p className="small">
        <img className='img1' src="https://cdn-icons-png.flaticon.com/512/86/86477.png" width={100}/>

        </p>
        <p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=9pA5Idnx4SM"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </p>
      </header>
    </div>
  );
  
}



export default App;
