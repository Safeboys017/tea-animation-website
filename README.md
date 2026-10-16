# 🍵 CHAGEE & MIST TEA - The Art of Modern Tea
### Interactive 3D JavaScript Animation Website & Vercel Deployment

เว็บไซต์แสดงผลผลิตภัณฑ์ชาพรีเมียม **CHAGEE (霸王茶姬)** และ **MIST TEA (มิสต์ที)** ในรูปแบบ **Interactive 3D JavaScript Animation** ด้วยเทคนิค WebGL/Canvas, 3D Parallax Tilt, Harmonic Levitation, Dynamic Light Sheen และ Web Audio API Sound Effects

---

## ✨ ไฮไลท์ฟีเจอร์และแอนิเมชัน (Features & Animations)

1. **3D Interactive Parallax & Tilt Engine (`js/tilt.js`)**
   - คำนวณองศาการเอียงตามตำแหน่งเมาส์และ Gyroscope บนสมาร์ทโฟนแบบ 60/120fps ด้วย LERP (Linear Interpolation)
   - แสงสะท้อนประกาย (Specular Sheen) และเงาตกกระทบบนพื้น (Dynamic Ground Shadow) ขยับตอบสนองตามองศา 3 มิติอย่างสมจริง
2. **Atmospheric Canvas Particle Engine (`js/particles.js`)**
   - ใบชาสีทองและมรกตหมุนลอยตามแรงลม (Wind Turbulence)
   - ละอองไอหมอก (Ethereal Mist) ลอยฟุ้งกระจาย และแสงประกาย (Sparkles) ที่ตอบสนองการเคลื่อนไหวของเคอร์เซอร์
3. **Interactive 4-Product Switcher (`js/app.js`)**
   - สลับดูสินค้าทั้ง 4 ชนิด:
     - 🍊 **CHAGEE Imperial Da Hong Pao** (ถ้วยกระดาษสีส้ม ลายงิ้วปักกิ่งและม้าสายไหม)
     - ❄️ **CHAGEE Snow Mountain Jasmine** (ถ้วยกระดาษสีฟ้า ลายเทือกเขาหิมะและเมฆา)
     - 🌊 **MIST TEA Classic Oolong** (ขวดสลิมสีเงินฟ้า สกัดเย็น 16 ชม.)
     - 🍯 **MIST TEA Caramel Roasted Oolong** (ขวดสลิมสีบรอนซ์ทอง ชานมคั่วเข้ม)
   - เปลี่ยนโทนสี Ambient Light และอนุภาคตามเอกลักษณ์ของแต่ละรสชาติแบบ Seamless Transition
4. **Interactive Hotspots & Aroma Breakdown**
   - จุดพินตรวจสอบรายละเอียดบรรจุภัณฑ์ (Aromalock Lid, โลโก้โบราณ, ลวดลายศิลปะ)
   - ปรับแต่งระดับความหวานและระดับน้ำแข็งแบบเรียลไทม์
5. **Interactive Audio Experience (`js/sound.js`)**
   - สังเคราะห์เสียงระฆังแก้วและหยดน้ำ (Harmonic Droplet Chime) ผ่าน **Web Audio API** โดยตรง ไม่ต้องโหลดไฟล์เสียงภายนอก
6. **Flying Cart Animation**
   - เมื่อกดปุ่ม "เพิ่มลงตะกร้า" แก้วหรือขวดชาจะสร้างร่างโคลนลอยโค้งเข้าสู่ตะกร้าด้านบนพร้อมเอฟเฟกต์ประกายไฟระเบิด (Blossom Burst)
7. **Original Source Magnifier Lens**
   - แว่นขยายแบบอินเตอร์แอคทีฟให้ผู้ใช้สามารถซูมดูรูปต้นฉบับเปรียบเทียบกับภาพที่ตัดต่อเป็น 3D ได้อย่างคมชัด

---

## 🚀 วิธีการทดสอบบนเครื่องตัวเอง (Local Preview)

คุณสามารถเปิดไฟล์ `index.html` บนเว็บเบราว์เซอร์ได้ทันที หรือรัน Local Server ด้วยคำสั่ง:

```bash
# 1. ติดตั้ง serve (หากยังไม่มี) หรือใช้ npx
npx serve .

# หรือเปิดด้วยเบราว์เซอร์โดยตรง:
# ดับเบิลคลิกไฟล์ index.html
```

---

## 🌐 วิธีนำขึ้น Vercel (How to Deploy to Vercel)

คุณสามารถนำเว็บไซต์นี้ขึ้นออนไลน์บน Vercel ได้ฟรีภายในไม่กี่คลิก โดยเลือก 1 ใน 3 วิธีนี้:

### วิธีที่ 1: ผ่าน GitHub + Vercel Dashboard (แนะนำ ง่ายที่สุด ⭐)
1. นำโฟลเดอร์นี้อัปโหลดขึ้น **GitHub** (สร้างเป็น Public หรือ Private Repository)
2. เข้าไปที่เว็บไซต์ [https://vercel.com](https://vercel.com) แล้วล็อกอินด้วยบัญชี GitHub ของคุณ
3. คลิกปุ่ม **"Add New..."** มุมบนขวา แล้วเลือก **"Project"**
4. กด **"Import"** หน้า Repository ที่เพิ่งอัปโหลด
5. ในหน้าตั้งค่าโปรเจกต์:
   - **Framework Preset**: เลือก `Other`
   - **Root Directory**: `./` (ไม่ต้องแก้ไข)
6. คลิกปุ่ม **"Deploy"**
7. รอประมาณ 15-30 วินาที ระบบจะให้ลิงก์เว็บไซต์ เช่น `https://your-project.vercel.app` เปิดใช้งานได้ทั่วโลกทันที!

---

### วิธีที่ 2: ผ่าน Vercel CLI (เร็วที่สุดผ่าน Terminal ⚡)
หากคุณชอบใช้งาน Command Line:
```bash
# 1. ติดตั้ง Vercel CLI ทั่วระบบ
npm install -g vercel

# 2. ยืนยันและสั่ง Deploy ขึ้น Production ทันที
vercel --prod
```
- ในครั้งแรก ระบบจะถามให้อนุมัติล็อกอินผ่านเว็บเบราว์เซอร์
- ตอบ `Y` เพื่อยืนยันการ Deploy
- ระบบจะอัปโหลดและส่งคืน URL สำหรับเปิดใช้งานทันที

---

### วิธีที่ 3: ลากโฟลเดอร์วาง (Vercel Drag & Drop 🖱️)
1. ไปที่หน้า [https://vercel.com/new](https://vercel.com/new)
2. เลื่อนลงมาด้านล่างที่ส่วน Drag & Drop หรือเข้าไปที่ [https://vercel.com/drop](https://vercel.com/drop)
3. ลากทั้งโฟลเดอร์ `tea-animation-website` ไปวางในหน้าเว็บ
4. Vercel จะทำการ Deploy และสร้าง URL ให้คุณทันทีโดยไม่ต้องผูก Git!

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
tea-animation-website/
├── index.html            # โครงสร้างหน้าเว็บหลักและส่วนประกอบ 3D
├── css/
│   └── style.css         # ดีไซน์หรูหรา Glassmorphism, Responsive และ Keyframe Animations
├── js/
│   ├── app.js            # ตัวควบคุมหลัก, ข้อมูลสินค้า, Sweetness/Ice Selector, Cart Animation
│   ├── tilt.js           # ระบบฟิสิกส์ 3D Parallax & LERP Tilt Engine
│   ├── particles.js      # Canvas Particle Engine (ใบชาหมุน, ไอหมอก, ประกายไฟ)
│   └── sound.js          # ระบบสังเคราะห์เสียงระฆังแก้ว Web Audio API
├── assets/
│   ├── original.jpg           # รูปถ่ายต้นฉบับ 4 บรรจุภัณฑ์
│   ├── cup_orange_cutout.png  # ถ้วยชาจีสีส้ม (โปร่งแสง ไร้พื้นหลัง)
│   ├── cup_blue_cutout.png    # ถ้วยชาจีสีฟ้า (โปร่งแสง ไร้พื้นหลัง)
│   ├── bottle_blue_cutout.png # ขวดมิสต์ทีสีฟ้า (โปร่งแสง ไร้พื้นหลัง)
│   └── bottle_amber_cutout.png# ขวดมิสต์ทีสีทอง (โปร่งแสง ไร้พื้นหลัง)
├── vercel.json           # ไฟล์ตั้งค่า Caching และ Security Headers บน Vercel
├── package.json          # ข้อมูลโปรเจกต์และ Scripts
└── README.md             # คู่มือการใช้งานและวิธี Deploy
```
