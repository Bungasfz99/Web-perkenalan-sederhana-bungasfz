"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi sementara: Username harus "admin" dan Password harus "admin123"
    if (username === "admin" && password === "admin123") {
      setErrorMsg(""); 
      router.push("/"); 
    } else {
      setErrorMsg("Username atau password salah, Gan!"); 
    }
  };

  return (
    <div className="login-container">
      {/* BAGIAN KIRI: AREA FOTO UTAMA */}
      <div className="wallpaper-bg">
        <Image
          src="/loginpict.png" 
          alt="Floristry Aesthetic Background"
          fill 
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Ornamen Bulatan Latar Belakang */}
      <div className="circle-decor top-left"></div>
      <div className="circle-decor bottom-right"></div>

      {/* CARD LOGIN */}
      <div className="login-card-glass">
        
        {/* LOGO AREA */}
        <div className="logo-area">
          <Image
            src="/LogoCretivox.svg"
            width={120}
            height={35}
            alt="Cretivox Logo"
            priority
          />
          <p className="subtitle">Sign In to Account</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="login-form">
          
          {/* GABUNGAN BOX 1: USERNAME */}
          <div className="input-group-box">
            <span className="input-icon">
              <User size={18} />
            </span>
            <div className="input-inner">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* GABUNGAN BOX 2: PASSWORD */}
          <div className="input-group-box">
            <span className="input-icon">
              <Lock size={18} />
            </span>
            <div className="input-inner">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="eye-button"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* REMEMBER & FORGOT */}
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot?</a>
          </div>

          {/* KUNCI REAKSI: Memunculkan tulisan eror merah tepat di atas tombol */}
          {errorMsg && (
            <p style={{ color: "#ef4444", fontSize: "13px", textAlign: "center", fontWeight: "600", margin: "5px 0" }}>
              {errorMsg}
            </p>
          )}

          {/* TOMBOL MASUK */}
          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        {/* MINI FOOTER */}
        <div className="card-footer">
          <p>
            Don't have an account? <a href="#">Contact Admin</a>
          </p>
        </div>

      </div>
    </div>
  );
}