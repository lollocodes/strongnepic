import { User } from './../types/User';

type PageBannerProps = {
  user: User,
}

function Banner(props: PageBannerProps): JSX.Element {
  
  return (
    <header>
      <h2>My awesome website</h2>
      <p>Welcome {props.user.role} {props.user.name}</p>
    </header>
  )
}

export default Banner;