// ฟังก์ชันสำหรับโหลด Header
function loadHeader() {
  // ใส่ Path (เส้นทาง) ให้ตรงกับที่อยู่ไฟล์จริงของคุณ
  fetch("components/header/header.html")
    .then((response) => {
      if (!response.ok) throw new Error("โหลด Header ไม่สำเร็จ");
      return response.text();
    })
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
}

// ฟังก์ชันสำหรับดึงเนื้อหามาเปลี่ยนในกล่องคอนเทนต์
function loadContent(pagePath) {
  fetch(pagePath)
    .then((response) => {
      if (!response.ok) throw new Error("ไม่สามารถโหลดเนื้อหาหน้านี้ได้");
      return response.text();
    })
    .then((html) => {
      // เอาเนื้อหาใหม่ที่ดึงมา ไปยัดใส่แทนที่เนื้อหาเดิมในกล่อง content-container
      document.getElementById("content-container").innerHTML = html;
      initContactForm();
    })
    .catch((error) => {
      console.error("Error loading content:", error);
      document.getElementById("content-container").innerHTML =
        "<p>เกิดข้อผิดพลาดในการโหลดหน้าเว็บ</p>";
    });
}

// โหลดหน้าแรก (home.html) มาแสดงทันทีเมื่อเปิดหน้าเว็บ index.html ครั้งแรก
document.addEventListener("DOMContentLoaded", function () {
  loadContent("components/pages/home.html");
});

// ฟังก์ชันสำหรับโหลด Footer
function loadFooter() {
  // ใส่ Path (เส้นทาง) ให้ตรงกับที่อยู่ไฟล์จริงของคุณ
  fetch("components/footer/footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("โหลด Footer ไม่สำเร็จ");
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// เรียกใช้งานฟังก์ชันทันทีที่เปิดหน้าเว็บ
loadHeader();
loadFooter();
