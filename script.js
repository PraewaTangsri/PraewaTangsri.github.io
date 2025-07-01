function generateRandomItem() {
    let items;
    items = [
        "image/3.1.png",
        "image/3.2.png",
        "image/3.3.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
        "image/nohit.png",
    ];
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex]; // คืนค่ารูปภาพที่สุ่มได้
}

// ฟังก์ชันเปิดกล่องสุ่มเพื่อแสดงรูปภาพ
function openBox() {
    rewardText.innerText = "การ์ดที่ได้คือออออ!";
    const randomImage = generateRandomItem();
    const rewardImage = document.getElementById("rewardImage");
    rewardImage.src = randomImage; // ตั้งค่า src ของรูปภาพให้เป็นรูปที่สุ่มได้
    rewardImage.style.display = "block"; // แสดงรูปภาพ
    openbutton.style.display = "none"; // ซ่อนปุ่ม "Open"
    OK.style.display = "block"; // แสดงปุ่ม "Confirm"
}
