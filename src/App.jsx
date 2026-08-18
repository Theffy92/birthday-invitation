import './index.css'
import InvitationPage from './pages/InvitationPage'

function App() {
  const pathParts = window.location.pathname.split('/').filter(Boolean)

  const token = 
    pathParts[0] === 'invite'
      ? pathParts[1]
      : null
      
  return <InvitationPage token={token}/>
}

export default App
