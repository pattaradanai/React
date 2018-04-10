import css from '../style.css'
import Link from 'next/link'

export default () => (
  <div className={css.navbar}>
    <Link href="/login">
      <a>Login</a>
    </Link>
  </div>
)
