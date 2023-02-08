import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.wallscloud.net/uploads/thumb/1229675775/optimus-prime-transformers-KLr-1024x576-MM-80.webp" className="App-logo" alt="logo" />
        <p>
          Click по About US <span className="heart">♥️</span> 
        </p>
        <p className="small">
        <img src="https://cdn-icons-png.flaticon.com/512/86/86477.png" width={100}/>

        </p>
        <p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=9pA5Idnx4SM"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is Megatron ?
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
