"use client";

import { useRouter } from "next/navigation";

export default function WonPage() {
  const router = useRouter();

  const back = () => router.push("/");

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh",
      color:"white",
      textAlign:"center",
      backgroundColor:'beige',
      color:'black',
      padding:"20px"
    }}>
      
      <h1 style={{fontSize:"50px", marginBottom:"20px"}}>🎉 YOU WON 🎉</h1>

      <p style={{fontSize:"22px", maxWidth:"600px"}}>
        Hope you had fun in this little website where you tried to play.<br/>
        Sorry that there are only 5 levels.<br/><br/>
        This is only beta mode for now 😄
      </p>

      <button 
        style={{
          marginTop:"40px",
          padding:"12px 30px",
          borderRadius:"12px",
          fontSize:"22px",
          border:"none",
          cursor:"pointer",
        }}
        onClick={back}
      >
        Return Home
      </button>
    </div>
  );
}
