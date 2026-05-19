function initContactForm() {
  const form = document.getElementById("myContactForm");

  if (!form) return;

  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // กันกดรัว
    submitBtn.disabled = true;

    // เปลี่ยนข้อความ
    submitBtn.innerHTML = `
  <span class="spinner"></span>
  Sending...
`;

    const formData = new FormData(this);

    fetch(
      "https://script.google.com/macros/s/AKfycbwAVcIJPLdAu6jD_puwT5YENbTV05ItYkmgAC7TPXCyU3xdzf6_YuRXfSiTYDwQXxuo/exec",
      {
        method: "POST",
        body: formData,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        alert("ขอบคุณที่ติดต่อเรา! เราจะรีบติดต่อกลับโดยเร็วที่สุด");

        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);

        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      })
      .finally(() => {
        // เปิดปุ่มกลับ
        submitBtn.disabled = false;

        // คืนข้อความเดิม
        submitBtn.innerHTML = "Submit";
      });
  });
}
