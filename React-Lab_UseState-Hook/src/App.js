import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Irtaza",
    lastName: "Zafar",
    text: "Free Free",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard(pervState=>{
      return {
        ...pervState,
        text: "Your coupon has been used.",
        valid:false,
        instructions:"Please visit our restaurant to renew your gift card"
      }

    });
  }

  return (
    <div style={{ padding: "250px",paddingLeft:'600px'}}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
