export const GET = (url: string) => {
  (() => {
    fetch(url, {
      method: "GET"
    }).then((res) => res.text())
      .then((body) => {
        try {
          console.log(JSON.parse(body))
        } catch (err) {
          console.log(body);
        }
      })
      .catch((err) => {throw err});
  })();
}