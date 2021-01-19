import {decode} from './decode.ts';

export const POSTd = (url: string, data: string) => {
  (() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    }).then((res) => res.text())
      .then((body) => {
        try{
          console.log(JSON.parse(body));
        } catch (err) {
          console.log(body);
        }
      })
      .catch((err) => {throw err});
  })();
};

export const POSTf = (url: string, file: string | URL) => {
  (() => {
    const b = decode(file);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: b
    }).then((res) => res.text())
      .then((body) => {
        try{
          console.log(JSON.parse(body));
        } catch (err) {
          console.log(body);
        }
      })
      .catch((err) => {throw err});
  })();
}