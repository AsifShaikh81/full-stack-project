import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51S7wPk5QLgQ2BHi1fWACqgiyJ0BoVGpo4Y3RdizPxvAQFkOqvJvbKVQeUSqAO41XbCrrXIINsmrBMO0XA0zNiUwk00fnwKscvY"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
    // window.location.assign(session.data.session.url);
    //  window.location.replace(session.data.session.url);
  } catch (error) {
    showAlert("error", error);
  }
};
