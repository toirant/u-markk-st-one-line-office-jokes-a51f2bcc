# One-Line Office Jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/toirant/u-markk-st-one-line-office-jokes-a51f2bcc/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/toirant/u-markk-st-one-line-office-jokes-a51f2bcc/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [One-Line Office Jokes](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on make.fun.

## The entry

`main.ts` writes a single one-line office joke to `/output/entry.txt` — no trailing newline, one line, 119 characters, inside the competition's 1–199 character gate. The program validates the line in code before writing (length, single line, not whitespace-only, valid UTF-8) and then re-reads the file from disk and validates what actually landed there.

> The printer only ever jams when I am already late, which is how I know it is the most punctual employee in this office.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (TypeScript runs natively).

## License

MIT — see [LICENSE](LICENSE).
