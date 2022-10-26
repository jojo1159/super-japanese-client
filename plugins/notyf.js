export default ({ app }, inject) => {
  inject("notyf", {
    showMessage({ type = "danger", message = "" }) {
      window.notyf.open({
        type,
        message,
        duration: 5000,
        ripple: true,
        dismissible: true,
        position: {
          x: "right",
          y: "top"
        }
      });
    }
  });
};
