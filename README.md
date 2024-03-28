# [Meme](https://fun.killingtime.workers.dev/)

A free REST API for random Meme Img (Meme as a Service).

Built with [Cloudflare Workers](https://workers.cloudflare.com/).

## Usage

### `GET` [https://fun.killingtime.workers.dev/](https://fun.killingtime.workers.dev/)

```json
{
    "img":"https://res.cloudinary.com/dcxzzkfnu/image/upload/v1693941003/MEME/jjlonkqufn3b4ywwurvx.jpg"
}
```

or

### `GET` [https://fun.killingtime.workers.dev/img](https://fun.killingtime.workers.dev/img)

```text
The world is our office
```

## Development

Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#installation)

```shell
npx wrangler dev
```

## License

MIT
