import { decode } from "./decode.ts";

export const PATCHd = (url: string, data: string) => {
  (() => {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    }).then((res) => res.text())
      .then((body) => {
        try {
          console.log(JSON.parse(body));
        } catch (err) {
          console.log(body);
        }
      })
      .catch((err) => {throw err});
  })();
};

export const PATCHf = (url: string, file: string | URL) => {
  (() => {
    const b = decode(file);
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: b
    }).then((res) => res.text())
      .then((body) => {
        try {
          console.log(JSON.parse(body));
        } catch (err) {
          console.log(body);
        }
      })
      .catch((err) => {throw err});
  })();
};