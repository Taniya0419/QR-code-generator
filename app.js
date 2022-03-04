
 let qr;
 (function () {
   qr = new QRious({
     element: document.querySelector("#canvas"),
     size: 200,
     value: "Code now",
     
   });
 })();
 
 const generateQRCode = () => {
   const qrText = document.querySelector("#qrText").value;
   qr.set({
     value: qrText,
   });
 };

 
 const printBtn = document.getElementById("print-button");

 printBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "qrcode_" + Date.now();
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
  link.remove();
 });
 