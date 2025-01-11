import { Link } from 'react-router'
import { buttonVariants } from '~/features/shared/components/ui/button'

function AppHeader() {
  return (
    <header className="w-full border-b flex justify-center">
      <div className="container flex items-center justify-between">
        <div>Logo</div>
        <nav>
          <Link to="/" className={buttonVariants({ variant: 'link' })}>
            Home
          </Link>
          <Link to="/about" className={buttonVariants({ variant: 'link' })}>
            About
          </Link>
          <Link to="/contact" className={buttonVariants({ variant: 'link' })}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader
