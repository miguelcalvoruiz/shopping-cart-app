import './App.css'


const Header = () => {

  return (
    <header style={styles.header}>
      <div style={styles.logo}>🛒</div>
      <div style={styles.total}>Total:</div>
    </header>
  )
}

const App = () => {

  return (
    <div>
      <Header />
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#D82E63',
    color: '#FFF',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem'
  },
  total: {
    fontSize: '1.5rem'
  }
}

export default App
