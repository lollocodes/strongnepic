import { User } from './../types/User';
import './../App.css';



type PageBannerProps = {
  user: User,
  onLogout: () => void; 
}

const Banner: React.FC<PageBannerProps> = ({ user, onLogout }) => {
  
  const handleLogout = () => {
    onLogout();
  }

  return (
    <div className='banner'> 
      <h1 className='header'>Strong n' Epic</h1>
      <p>Welcome {user.role} {user.email}</p>
      <button className='submitBtn' onClick={handleLogout}>Logga ut</button>
      
    </div>
      
  )
}

export default Banner;