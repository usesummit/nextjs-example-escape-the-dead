import { Bannerbear } from "bannerbear";

const bannerbear =
  process.env.BANNERBEAR_API_KEY && process.env.BANNERBEAR_SIGNED_URL_ID
    ? new Bannerbear(process.env.BANNERBEAR_API_KEY)
    : null;

const FALLBACK_IMAGE =
  "https://ondemand.bannerbear.com/signedurl/aq5KOPveZ8QyJ2Xbo4/image.jpg?modifications=W3sibmFtZSI6InJ1bndheSIsInRleHQiOiJUaGUgc3RhcnR1cHMgb2YgdGhlIGdyYXZleWFyZCBoYXZlIGF3YWtlbmVkIOKApiBhbmQgdGhleSdyZSBodW5ncnkgZm9yIGNvbXBhbnkuIn1d&s=812e2055b9f0ebc7dc3eb994f2db96050cff4de7244452f545403b9cb71a3630";

export default async function generateSharingImage(runway: number | null) {
  if (typeof runway !== "number") {
    return FALLBACK_IMAGE;
  }

  if (bannerbear) {
    const text =
      runway === -1
        ? "I'll be making it to the next All Hallow's Eve."
        : runway === 0
        ? "I'm the treat! It appears it's my last month among the living."
        : runway === 1
        ? "My capture is imminent and the startup zombies are so very hungry."
        : `Oh no! The startup zombies are catching up to me *in ${runway} months*!`;

    const modifications = [{ name: "runway", text: text }];

    return await bannerbear.generate_signed_url(
      process.env.BANNERBEAR_SIGNED_URL_ID as string,
      modifications
    );
  }

  return FALLBACK_IMAGE;
}
