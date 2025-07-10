
document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      alert("Contact form was succefully submited");
      window.location.href = "contact.html";
    } else {
      alert(data.error || "Error, please validate your data.");
    }
  } catch (error) {
    console.error("Conection error:", error);
    alert("Couldn't connect with server");
  }
});