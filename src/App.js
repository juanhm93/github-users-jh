import { useState, useEffect } from 'react'
import './App.css';
import UserList from './components/UserList';
import RepoList from './components/RepoList';
import UserCard from './components/UserCard';
import ActivitiesList from './components/ActivitiesList';
import Nav from './components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'



const API = 'https://api.github.com/search/users?q=YOUR_NAME'


function App() {
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({})
  const [showView, setShowView] = useState('listUsers')
  const [maxEvents, setMaxEvents] = useState(4)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API)
  .then(response => response.json())
  .then(data => {
   
    setUsers(data.items)
   
  } 
  )
  .catch(err => console.log(err))
  console.log("users",users)
  }, [])

  const showRepo = (repoUrl) => {
    console.log("showRepo",repoUrl)
    fetch(repoUrl)
    .then(response => response.json())
    .then(data => setRepos(data))
    .catch(err => {
      console.log("error", err)
      setError(err.message)
    })
  } 
  const getUserData = (user) => {
    fetch(user.url)
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(err => {
      console.log("error", err)
      setError(err.message)
    })

    fetch(user.repos_url)
    .then(response => response.json())
    .then(data => setRepos(data))
    .catch(err => {
      
      setError(err.message)
    })

    fetch(user.received_events_url)
    .then(response => response.json())
    .then(data => setEvents(data))
    .catch(err => {
    
      setError(err.message)
    })
    setShowView('user')

  } 
  const getFollowers = (user) => {
    fetch(user.followers_url)
    .then(response => response.json())
    .then(data => setFollowers(data))
    .catch(err => {
      console.log("error", err)
      setError(err.message)
    })
    setShowView('followers')
  }
  const handleView = (view) => {
    setShowView(view)
  } 
  const showMoreActivity = () => {
    setMaxEvents(maxEvents + 4)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const cleanSearch = () => {
    setSearch("")
  }

  const filterRepo = repos.filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase()))

  const popularRepos = repos.filter((repo) => repo.stargazers_count > 0)

  const quantityRepos = repos.length

  const sliceEvents = events.slice(0, maxEvents)

  return (
    <div className="App">
      <nav className="navbar bg-dark mb-3">
        <div className="container-fluid text-light">
          <a>

        <FontAwesomeIcon icon={faGithub} className="me-2" />
          Interesting Users Github
          </a>
        </div>
      </nav>
     
      {
        showView === 'listUsers' && (
        <div className='row justify-content-center'>
          <div className='col-10'>
            <UserList users={users} showRepo={showRepo} getUserData={getUserData} />
          </div>
        </div>  
        )
      }
      {
        showView !== 'listUsers' && (


      <div className='row justify-content-center'>
        <div className='col-11 col-md-4 col-xl-3'>
          {
            Object.keys(user).length > 0 &&  <UserCard user={user} getFollowers={getFollowers} />
          }
        </div>
        <div className='col-11 col-md-7 col-xl-8'>
          <Nav showView={showView} quantityRepos={quantityRepos} handleView={handleView} />
        
          {
           showView === 'user'  && (
            <div>
              <p>Popular Repositories</p>
              <RepoList  repos={popularRepos} type='card' />  
              <p>received events</p>
              <ActivitiesList 
                events={sliceEvents} 
                showMoreActivity={showMoreActivity} 
                maxEvents={maxEvents} 
                eventsLength={events.length} />
            
            </div>
            )
          }
          {
           showView === 'followers'  && (
            <div className='row'>
              {
                followers.length > 0 && followers.map((user) =>  
                (
                 <div className='col-12'>
                    <div className='border-bottom mb-3 pb-3'>
                      <img src={user.avatar_url} className='image-table' alt={'image'} /> {user.login} 
                     </div>
                 </div>
               )
                )
              } 
            </div>
            )
          }
          
          {
           showView === 'repo' &&  (
            <div>
              <div className="hstack gap-3 mb-3">
                <input className="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here..." onChange={handleSearch} value={search} />
             
                <button type="button" className="btn btn-outline-danger" onClick={() => cleanSearch()}>Reset</button>
              </div>
              <hr/>
              <RepoList  repos={filterRepo} type='list' />
            </div> 
           )   
          }


        </div>
      </div>
        )
      }
    </div>
  );
}

export default App;
