;(function () {
  const toastOptions = { delay: 2000 }

  function createToast(message) {
    sweetToast(message.message, message.tags, 8000, "center");
  }

  htmx.on("messages", (event) => {
    event.detail.value.forEach(createToast)
  })
})()
