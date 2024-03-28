var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type"
};
var worker_default = {
  fetch(request) {
    try {
      const random_quote = memes_default[Math.floor(Math.random() * memes_default.length)];
      const url = new URL(request.url);
      switch (url.pathname) {
        case "/array":
          return new Response(JSON.stringify(memes_default.map((s) => s.slice(9, -1))), {
            headers: { ...headers, "content-type": "application/json" }
          });
        case "/img":
          return new Response(random_quote, {
            headers: { ...headers, "content-type":   "text/html" }
          });
          case "/json":
            return new Response(random_quote.slice(9, -1), {
              headers: { ...headers, "content-type":   "application/json" }
            });
        default:
          return new Response(JSON.stringify({ img: random_quote.slice(9, -1) }), {
            headers: { ...headers, "content-type": "application/json" }
          });
      }
    } catch (error) {
      return new Response(error.toString(), {
        status: 500,
        headers: { ...headers }
      });
    }
  }
};
export {
  worker_default as default
};
