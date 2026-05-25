import Link from "next/link"
import Image from "next/image"

// 1. Tambahkan { onLogout } di dalam kurung ini
function Header({ onLogout }) {
  return (
    <header className="header">
      <nav>
        <div className="Logo">
          <Link href="/">
            <Image
              src="/LogoCretivox.svg"
              width={100}
              height={30}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="nav-links"> 
          <Link href="/">Home</Link>

          <Link href="/About">About</Link>
          
          {/* 2. Selipkan Tombol Keluar di sini */}
          <button onClick={onLogout} 
          className="btn-logout">
            Keluar
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header