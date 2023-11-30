document.getElementById("submit-button").addEventListener("click", function(event) {
    // Prevent the default button click behavior
    event.preventDefault();

    // You can simulate a successful payment here (e.g., check payment details).
    const isPaymentSuccessful = true; // Change this based on your logic

    if (isPaymentSuccessful) {
        // Show the payment success modal
        const modal = document.getElementById("paymentSuccessModal");
        modal.style.display = "block";

        // Close the modal when the "Close" button is clicked
        modal.querySelector(".close").addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
});