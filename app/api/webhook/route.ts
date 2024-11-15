import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET!);

export async function POST(req: NextRequest) {
  
  const payload = await req.text();

  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    // Use const here as the event variable is not reassigned
    const event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )

    console.log("Event", event.type)

/*   const response: any = await registerPayment(
      res?.data?.object?.billing_details.email,
      res?.data?.object?.amount,
      JSON.stringify(res),
      res?.type,
      String(timeString),
      String(dateTime),
      res?.data?.object?.receipt_email,
      res?.data?.object?.receipt_url,
      JSON.stringify(res?.data?.object?.payment_method_details),
      JSON.stringify(res?.data?.object?.billing_details),
      res?.data?.object?.currency,
    );
*/
    return NextResponse.json({ status: "Success", event: event.type});

  } catch (error) {

    return NextResponse.json({ status: "Failed", event: error});
    
  }
}