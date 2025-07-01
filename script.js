
function startBuying() {
    let product = document.getElementById("selectedProduct").value;
    let size = document.querySelector('input[name="size"]:checked');

    if (!product || !size) {
        alert("กรุณาเลือกสินค้าและขนาดก่อน!");
        return;
    }

    let price = (size.value === "S") ? 100 : 250;

    document.getElementById("summary").innerHTML = `สินค้าที่คุณต้องการซื้อคือ ${product} ขนาด ${size.value} ราคา ${price} บาท`;
    document.getElementById("inputSection").style.display = "block";
    document.getElementById("confirmSection").style.display = "none";

    
}

function resetForm() {
    document.getElementById("summary").innerHTML = "";
    document.getElementById("inputSection").style.display = "none";
    document.getElementById("confirmSection").style.display = "block";
    document.getElementById("currentMoney").innerText = "0";    
    document.getElementById("rewardSection").style.display = "none";
    document.getElementById("rewardImage").style.display = "none";
    document.getElementById("rewardText").innerText = "";
    openbutton.style.display = "none";
    OK.style.display = "none";
}

let selectedProduct = null;

function selectProduct(productName, element) {
    if (selectedProduct) {
        selectedProduct.classList.remove("selected"); // ลบการเลือกจากสินค้าก่อนหน้า
    }

    element.classList.add("selected"); // เพิ่มการเลือกให้สินค้าที่คลิก
    selectedProduct = element;

    document.getElementById("selectedProduct").value = productName;
}

let selectedMoneyValue= 0; // เก็บจำนวนเงินที่เลือกไว้ชั่วคราว

function openMoneyModal(moneyValue) {
    if (moneyValue === "8") {
        if (selectedMoneyValue >0){
            alert(`ทอนเงิน ${document.getElementById("currentMoney").innerText} บาท\nยกเลิกการซื้อสินค้า`);
            resetForm(); // รีเซ็ตแบบฟอร์มกลับไปหน้าแรก
            return;
        }
        alert("ยกเลิกการซื้อสินค้า");
        resetForm(); // รีเซ็ตแบบฟอร์มกลับไปหน้าแรก
        return;
    }
    selectedMoneyValue = inputmoney(moneyValue); // แปลงจำนวนเงินเป็นตัวเลขจริง
    document.getElementById('moneyAmount').innerText = selectedMoneyValue;
    document.getElementById('moneyModal').style.display = 'block'; // แสดง modal
}

function confirmMoney() {
    let currentMoney = parseInt(document.getElementById("currentMoney").innerText);
    currentMoney += selectedMoneyValue;
    document.getElementById("currentMoney").innerText = currentMoney; // อัปเดตจำนวนเงิน
    document.getElementById('moneyModal').style.display = 'none'; // ปิด modal
    checkIfMoneySufficient(currentMoney); // ตรวจสอบว่าจ่ายเงินครบหรือยัง
}

function cancelMoney() { // รีเซ็ตจำนวนเงินที่เลือกไว้ชั่วคราว
    document.getElementById('moneyModal').style.display = 'none'; // ปิด modal หากยกเลิก
}

// ฟังก์ชันแสดงกล่องสุ่ม
function showRewardBox() {
    const rewardSection = document.getElementById("rewardSection");
    rewardSection.style.display = "block"; // แสดงกล่องสุ่ม
    openbutton.style.display = "block"; // แสดงปุ่ม "Open"

    document.getElementById("rewardText").innerText = "คุณได้รับกล่องสุ่ม!";
}


// ฟังก์ชันตรวจสอบว่าเงินที่ใส่เข้ามาเพียงพอหรือไม่
function checkIfMoneySufficient(currentMoney) {
    let price = parseInt(document.getElementById("summary").innerHTML.match(/ราคา (\d+) บาท/)[1]);
    if (currentMoney >= price) {
        let change = currentMoney - price;
        if (change > 0) {
            alert(`ทอนเงิน ${change} บาท\n`);
        }
        alert("รับสินค้าของคุณ\nขอบคุณที่ใช้บริการ");
        document.getElementById('inputSection').style.display = 'none'; // ปิด modal
        showRewardBox(); // แสดงกล่องสุ่ม
    } else {
        alert(`เงินปัจจุบัน ${currentMoney} บาท\nขาดเงินอีก ${price - currentMoney} บาท`);
    }
}

function generateRandomItem() {
    let product = document.getElementById("selectedProduct").value;
    let items;

    if (product === "ALMOST THE MONSTERS HIDDEN") {
        // ใส่ URL รูปภาพใน array
        // เปลี่ยนเป็น URL รูปภาพที่คุณต้องการ
        items = [
            "image/1.png",
            "image/2.png",
            "image/3.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
        ];
    } else if (product === "Dimoo Life University") {
        items = [
            "image/2.1.png",
            "image/2.2.png",
            "image/2.3.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
            "image/nohit.png",
        ];
    } else if (product === "POP MART") {
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
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex]; // คืนค่ารูปภาพที่สุ่มได้
}

// ฟังก์ชันเปิดกล่องสุ่มเพื่อแสดงรูปภาพ
function openBox() {
    rewardText.innerText = "คุณได้รับรางวัล!";
    const randomImage = generateRandomItem();
    const rewardImage = document.getElementById("rewardImage");
    rewardImage.src = randomImage; // ตั้งค่า src ของรูปภาพให้เป็นรูปที่สุ่มได้
    rewardImage.style.display = "block"; // แสดงรูปภาพ
    openbutton.style.display = "none"; // ซ่อนปุ่ม "Open"
    OK.style.display = "block"; // แสดงปุ่ม "Confirm"
}
