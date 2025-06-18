import axios from "axios";
import { toast } from 'react-hot-toast';

export const placeOrder = async ({ planId, getToken, onSuccess, backendUrl }) => {
  try {
    const token = await getToken();
    const response = await axios.post(
      `${backendUrl}/orders?planId=${planId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 201 || response.status === 200) {
      initializePayment({ order: response.data.data, getToken, onSuccess, backendUrl });
    } else {
      throw new Error("Failed to create order");
    }
  } catch (error) {
    toast.error("You already purchased this plan.");
  }
};

const initializePayment = async ({ order, getToken, onSuccess, backendUrl }) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Credit Payment",
    description: "Payment for subscription",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (paymentDetails) => {
      // const paymentDetails = {
      //   razorpay_order_id: response.razorpay_order_id,
      //   razorpay_payment_id: response.razorpay_payment_id,
      //   razorpay_signature: response.razorpay_signature,
      // };
      try {
        const token = await getToken();
        const verifyResponse = await axios.post(
          `${backendUrl}/orders/verify`,
          paymentDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (verifyResponse.status === 200) {
          toast.success("Credits added successfully");
          onSuccess?.();
        } else {
          throw new Error("Payment verification failed");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
