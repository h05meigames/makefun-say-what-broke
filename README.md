# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/h05meigames/makefun-say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/h05meigames/makefun-say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy, at most 200 characters, that tells the user
the brutal truth about what went wrong and makes them laugh.

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> We deployed on a Friday and broke the site. The server did exactly what we told it to. We're rolling it back — try again in a few minutes.

## How it works

`main.ts` (Node 22+, standard library only) writes the line above to
`/output/entry.txt`, after a genuine length guard: it throws unless the line
is 1–200 characters, not only whitespace, and on a single line. No trailing
newline — the file holds exactly the line, nothing else.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
