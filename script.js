document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
  
      if (response.ok) {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("message").innerText = data.message;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
  