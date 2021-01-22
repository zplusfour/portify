# Portify HTTPS CLI Client

Portify is a HTTP Client that helps you get, post, delete, put, patch URLs on the command line.
The idea of Portify came to me, when I posted a post on [Repl.it](https://repl.it/), some people told me to make a HTTPS Client, so here is it.

Download portify from [here](https://github.com/zplusfour/portify/releases).
## Documentation

### 1. GET

Gets a URL.
```sh
$ portify get https://clib-api.zdev1.repl.co/ # { message: "OK!", status: 200 }
```

### 2. POST

You can do a post method in two ways:

1. Post data from a file
```sh
$ portify post https://clib-api.zdev1.repl.co/api/users/new -f myfile.json
```
2. Post data as a string
```sh
$ portify post https://clib-api.zdev1.repl.co/api/users/new "\""username\"": \""ddd\"", \""password\"": \""123\"""
```
###### I don't prefer to use it.

### 3. DELETE

Deletes some data from a URL.
```sh
$ portify delete <some_url>
```

### 4. PUT

Changes data from a URL. In two ways.
```sh
$ portify put <some_url> -f myfile.json
```
or:
```sh
$ portify put <some_url> <data>
```
### 5. PATCH

I think it is the same as PUT. In two ways.
```sh
$ portify patch <some_url> -f myfile.json
```
or:
```sh
$ portify patch <some_url> <data>
```

That's it!

## Built with 💖 and Deno