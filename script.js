// กำหนดพาธไปยังไฟล์ JSON ของคุณ
const jsonFilePath = 'imagelist.json';

// สร้างตัวแปร global หรือตัวแปรที่คุณต้องการเก็บข้อมูล
var imagePaths = [];

// ฟังก์ชัน async สำหรับดึงข้อมูลและเก็บในตัวแปร
async function loadImages() {
    try {
        const response = await fetch(jsonFilePath);

        // ตรวจสอบว่าการร้องขอสำเร็จหรือไม่
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // แปลง Response เป็น JSON object และเก็บในตัวแปร imagePaths
        imagePaths = await response.json();
        console.log("Images loaded:", imagePaths);

        // imagePaths.forEach(item => {
        //     console.log(`Image path after load: ${item}`);
        // });

    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

// เรียกใช้ฟังก์ชัน loadImages ทันทีที่ DOMContentLoaded (โครงสร้าง HTML) โหลดเสร็จ
// นี่คือวิธีการที่แนะนำเพื่อให้แน่ใจว่า DOM พร้อมใช้งาน
document.addEventListener('DOMContentLoaded', loadImages);

function generateRandomItem() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex]; // คืนค่ารูปภาพที่สุ่มได้
}

// ฟังก์ชันเปิดกล่องสุ่มเพื่อแสดงรูปภาพ
function openBox() {
    rewardText.innerText = "การ์ดที่ได้คือออออ!";
    const randomImage = generateRandomItem();
    const rewardImage = document.getElementById("rewardImage");
    rewardImage.src = randomImage; // ตั้งค่า src ของรูปภาพให้เป็นรูปที่สุ่มได้
    rewardImage.style.display = "block"; // แสดงรูปภาพ
   }

