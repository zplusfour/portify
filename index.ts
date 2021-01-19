/**
 * Portify HTTP Client
 */

import {
  GET,
  POSTd,
  POSTf,
  DELETE,
  PUTd,
  PUTf,
  PATCHd,
  PATCHf
} from './tools/index.ts';

(async () => {
  const args = Deno.args;

  if(args.length < 2) {
    console.log("No HTTP client command");
  }else {
    switch (args[0].toLowerCase()) {
      case "get":
        GET(args[1]);
      case "post":
        if(args[2] === "-f") {
          POSTf(args[1], args[3]);
        } else {
          POSTd(args[1], args[2]);
        }
      case "delete":
        DELETE(args[1]);
      case "put":
        if(args[2] === "-f") {
          PUTf(args[1], args[3]);
        } else {
          PUTd(args[1], args[2]);
        }
      case "patch":
        if(args[2] === "-f") {
          PATCHf(args[1], args[3]);
        } else {
          PATCHd(args[1], args[2]);
        }
    }
  }
})();

export {};