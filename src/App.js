const tabuleiro = [
  [11, 0, 12, 0, 13],
  [21, 0, 22, 0, 23],
  [31, 0, 32, 0, 33],
];

const listItems = tabuleiro.map((number) => <li key={number}>{number}</li>);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Este será meu jogo da velha</h3>
        <h1>Tabuleiro: </h1>

        <p style={{ color: listItems.number === 2 ? 'white' : 'green' }}>{listItems}</p>
      </header>
    </div>
  );
}

export default App;
