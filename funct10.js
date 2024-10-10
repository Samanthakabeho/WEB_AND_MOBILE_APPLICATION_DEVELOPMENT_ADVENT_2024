//number 10 Higher_Order functions(with a callback)
function processPayment(amount, paymentCallback) {
    console.log(`Processing payment of UGX ${amount}`);
    paymentCallback();
    }
    function onPaymentSuccess() {
    console.log("Payment successful!");
    }
    processPayment(70000, onPaymentSuccess);
    //task a higher order function fetchData
    function fetchData(callback) {
        // Simulate fetching data from a server (replace with actual asynchronous operation)
        setTimeout(() => {
          const data = { message: "Data successfully retrieved from the server" };
          callback(data);
        }, 2000); // Adjust the delay as needed
        }