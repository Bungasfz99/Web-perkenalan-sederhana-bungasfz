"use client";

import Image from 'next/image';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  User,
  Briefcase,
  Target,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  // GSAP REF
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP ANIMATION (Sudah Diperbaiki Agar Teks Tidak Hilang Saat Pindah Halaman)
  useEffect(() => {
    // KUNCI UTAMA 1: Membuat konteks GSAP agar animasi terikat dengan siklus hidup komponen Next.js
    let ctx = gsap.context(() => {
      
      // judul turun dari atas
      gsap.from(titleRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // text dari kiri
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      // photo dari kanan
      gsap.from(photoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.4,
        delay: 0.5,
        ease: "power3.out"
      });

      // button zoom
      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "back.out(1.7)",
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#fffafa] overflow-hidden text-black">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center p-10 gap-10">
        {/* LEFT */}
        <div className="flex-1 hero-left w-full">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold leading-tight mb-4 text-gray-800"
          >
           Siti Fatimatuz Zahro
          </h1>
          <div ref={textRef}>
            <p
              style={{ textAlign: "justify", textIndent: "30px" }}            
              className="text-sm text-gray-600 leading-relaxed mb-4"
            >
              Hello, let me introduce myself. My name is Siti Fatimatuz Zahro. I am a student/graduate majoring in Information Systems with a strong interest in technology and creative arts. I am a person who enjoys learning new things, adapts easily, and has a strong motivation to continuously grow both in technical skills and creativity.
            </p>
            <p 
              style={{ textAlign: "justify", textIndent: "30px" }}            
              className="text-sm text-gray-600 leading-relaxed mb-4"
            >
              During my studies in Information Systems, I learned the fundamentals of technology, data management, and simple system and website development. I am also interested in user interface design and front-end development because I enjoy combining technology with visual creativity to create attractive and user-friendly designs.
            </p>
            <p 
              style={{ textAlign: "justify", textIndent: "30px" }}            
              className="text-sm text-gray-600 leading-relaxed mb-6"
            >
              In addition to technology, I am also actively involved in creative and artistic activities, especially in floristry, design, and visual content editing. I have experience in arranging flower bouquets, assisting with simple decorations, working as a florist assistant at events, and teaching flower arrangement workshops. Through these experiences, I developed creativity, communication skills, teamwork, and attention to detail in my work.
            </p>
          </div>

          <button 
            ref={buttonRef} 
            className="px-6 py-2 bg-[#e5bcbc] text-white rounded-full hover:bg-[#d4a9a9] transition duration-300 font-medium shadow-sm"
            onClick={() => window.open("https://www.linkedin.com/in/siti-fatimatuz-zahro-2b1562223/", "_blank")}
          >
            LinkedIn
          </button>
        </div>

        {/* RIGHT */}
        <div ref={photoRef} className="hero-right flex flex-col items-center gap-4">
          {/* FOTO BESAR */}
          <div className="photo-container shadow-md rounded-xl overflow-hidden">
            <Image
              src="/depan.png" 
              alt="Siti Fatimatuz Zahro"
              width={400}
              height={550}
              priority
              className="hero-image object-cover"
            />
          </div>
          
          {/* FOTO KECIL */}
          <div className="foto-side flex gap-4">
            <div className="foto-kecil shadow-sm rounded-lg overflow-hidden">
              <Image
                src="/kanan.png"
                alt="Foto Kecil 1"
                width={120}
                height={160}
                className="photo-image object-cover"
              />
            </div>
            <div className="foto-kecil shadow-sm rounded-lg overflow-hidden">
              <Image
                src="/kiri.png"
                alt="Foto Kecil 2"
                width={120}
                height={160}
                className="photo-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>
 {/* ABOUT PREVIEW (Kliping Info Singkat Aquarius & Bahlil) */}
      <section className="mt-32 px-10 pb-20 flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-serif mt-5">About Me</h1>
        </div>

        <div className="flex flex-col items-center gap-3 w-full">
          <div className="box-container w-full max-w-[600px]">
            <div className="who-box">
              <div className="icon-circle">
                <User size={20} />
              </div>
              <h2>Who I Am</h2>
              <div className="line-box" />
              <p>"I’m an Aquarius girl who keeps it real. I’m deeply loyal, straightforward, and naturally stay away from unnecessary drama. Outside of designing and coding, I love listening to music, sleeping, and embracing my random, unique traits."</p>
            </div>
          </div>

          <div className="box-container w-full max-w-[600px]">
            <div className="who-box">
              <div className="icon-circle">
                <Briefcase size={20} />
              </div>
              <h2>What I Do</h2>
              <div className="line-box" />
              <p>"My daily routine is a mix of staying active and embracing my passions. Freelance florist business, creating TikTok content, hosting lives, and editing videos. Apa aja yang penting halal dapet cuan."</p>
            </div>
          </div>

          <div className="box-container w-full max-w-[600px]">
            <div className="who-box">
              <div className="icon-circle">
                <Target size={20} />
              </div>
              <h2>My Goal</h2>
              <div className="line-box" />
              <p>"My goal is to secure a stable career while expanding my creative passions. I aim to grow my online florist business and reach a wider audience."</p>
            </div>
          </div>

          <div className="box-container w-full max-w-[600px]">
            <div className="who-box">
              <div className="icon-circle">
                <Sparkles size={20} />
              </div>
              <h2>Fun Fact</h2>
              <div className="line-box" />
              <p>"Plot twist: I randomly find myself wanting to be like Bahlil. Am I fascinated by him? Who knows! Just a glimpse of my unpredictable, Aquarius energy."</p>
            </div>
          </div>
        </div>   
      </section>
    </main>
  );
}