import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51M5vA4J6tg2Ie3VP67yvdEcappnpii9Ump9S2hhGJYcnYqrhYZEEEN2QgGdpLjkOECc7b5iwbDvJzOs4nq7TCEnM00g0SvhkhX";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
