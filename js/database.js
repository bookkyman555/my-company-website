const contactForm = document.getElementById("myContactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const formData = new FormData(contactForm);

    try {
      // Disable button ระหว่างส่ง
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxFxZjsv46Ij4d6mUtd3QLkhN36hgfmd522yeJ5bx4__wQTJs_WvD0PHLfHC3P5zHY4/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.result === "success") {
        alert("ขอบคุณที่ติดต่อเรา! เราจะรีบติดต่อกลับโดยเร็วที่สุด");
        contactForm.reset();
      } else {
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }

    } catch (error) {
      console.error("Submit Error:", error);
      alert("ไม่สามารถส่งข้อมูลได้");
    } finally {
      // Enable button กลับ
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit";
      }
    }
  });
}