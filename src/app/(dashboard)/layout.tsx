"use client";
import {useRouter} from 'next/navigation';
import Header from "../../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const router = useRouter();
    const handleLogout = () => {
        router.push('/login');
    };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER / NAVBAR KAMU */}
      <Header onLogout={handleLogout} />    

      {/* KUNCI UTAMA: Tag main harus membungkus {children} */}
      <main>
        {children} 
      </main>

      {/* FOOTER KAMU */}
      <footer className="footer">
        <p>© 2026 Siti Fatimatuz Zahro. Magang Cretivox </p>
      </footer>
    </div>
  );
}