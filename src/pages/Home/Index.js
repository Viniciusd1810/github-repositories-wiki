import { useState } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList'
import './styles.css'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState(null);

  const handleGetData = async() => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });
    }

    const repositoriesData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepositories = await repositoriesData.json();
  
    if (newRepositories.length) {
      setRepositories(newRepositories)
    }

    console.log({newRepositories})
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <div>
            <input name='user' value={user} onChange={event => setUser(event.target.value)} placeholder='@username' />
            <button onClick={handleGetData}>Search</button>
          </div>
          {currentUser?.name ? (
          <div className='perfil'>
            <img src={currentUser.avatar_url} className='profile' alt='profile' />
            <div>
              <h3>{ currentUser.name }</h3>
              <span>@{currentUser.login}</span>
              <p>{ currentUser.bio}</p>
            </div>
          </div>
          ) : null}
          <hr/>
          {repositories?.length ? (
            <div>
              <h4 className='repositories'>Repositories</h4>
              {repositories.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
