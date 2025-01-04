// npm install @vonage/server-sdk
/*
const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "ca4a2105",
  apiSecret: "VdGy6kwLgh9RRUyI",
});

const from = "Vonage APIs";
const to = "201061656112";
const text = "A text message sent using the Vonage SMS API";

async function sendSMS() {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

sendSMS();


/*

    API_key="ca4a2105";
    API_Secret="VdGy6kwLgh9RRUyI";
    Signature Secret="fGFqO4m1YSf2SFH1pKeSFPgYy1Cx1ta3EDm1uCFWAwUmck8ymn";
*/
/*

    curl -X "POST" "https://rest.nexmo.com/sms/json" \
    -d "from=Vonage APIs" \
    -d "text=A text message sent using the Vonage SMS API" \
    -d "to=201061656112" \
    -d "api_key=ca4a2105" \
    -d "api_secret=VdGy6kwLgh9RRUyI"

  */
