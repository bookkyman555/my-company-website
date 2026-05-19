function initContactForm() {

  const form = document.getElementById("myContactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = new FormData(this);

    fetch(
      "https://script.google.com/macros/s/AKfycbxFxZjsv46Ij4d6mUtd3QLkhN36hgfmd522yeJ5bx4__wQTJs_WvD0PHLfHC3P5zHY4/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {

        alert("ขอบคุณที่ติดต่อเรา! เราจะรีบติดต่อกลับโดยเร็วที่สุด");

        form.reset();

      })
      .catch((error) => {

        console.error("Error!", error.message);

      });

  });

}