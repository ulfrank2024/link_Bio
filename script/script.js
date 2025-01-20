const qrCodeElement = document.createElement("div");
qrCodeElement.id = "qrcode";
document.querySelector(".container").appendChild(qrCodeElement);

const qrcode = new QRCode("qrcode", {
  text: window.location.href,
  width: 128,
  height: 128,
});
