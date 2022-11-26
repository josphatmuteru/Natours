// import axios from 'axios';
// import { showAlert } from './alerts';
// const stripe = Stripe(
//   'pk_test_51M7JKnHgSKYGCGPI1boSGVMR91aRRAHJRfHeYqMJ6S8MeCUHAPIxGzzVRDl22alL5dOJy0bQsEx6MKpFpShXvphz0053sJCimj'
// );

// export const bookTour = async (tourId) => {
//   console.log('Heloooooooooooooooooooooooooo');
//   // 1)  Get checkout session from API
//   try {
//     const session = await axios(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
//     );

//     // 2) Create checkout form + charge credit card
//     await stripe.redirectToCheckout({
//       sessionId: session.data.sessionId,
//     });

//     console.log(session);
//   } catch (err) {
//     console.log(err);
//     showAlert('error', err);
//   }
// };
