"use client";

export default function LogoutButton() {
  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = "admin_auth=; path=/; max-age=0";
    window.location.replace("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "black",
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: 10,
        padding: "8px 18px",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "background 0.2s",
      }}
    
    >
      Logout
    </button>
  );
}
