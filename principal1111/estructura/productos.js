function callNow() {
  window.location.href = "tel:00201029888849";
}

function whatsappNow() {
  const projectName = "Mountain View iCity October";
  const message = `I want more details about ${projectName}`;
  const phoneNumber = "00201029888849";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
}
