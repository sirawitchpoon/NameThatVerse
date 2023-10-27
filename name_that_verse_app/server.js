// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/myQuestion.json');
const middlewares = jsonServer.defaults();

// กำหนดความละเอียดของ middleware ตามต้องการ
server.use(middlewares);

// กำหนดเส้นทาง (routes) และ middleware ตามความต้องการ
// เช่น, ถ้าคุณต้องการปรับเปลี่ยนข้อมูลก่อนส่งต่อหรือตรวจสอบคำขอที่เข้ามา
server.use('/api', router);

// เริ่มเซิร์ฟเวอร์บนพอร์ตที่กำหนด
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
