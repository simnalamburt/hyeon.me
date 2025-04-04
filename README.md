[hyeon.me]
========
My personal webpage.

```bash
# NOTE: Even though it's using bun, it still requires Node.js
#
# References:
#   https://bun.sh/docs/runtime/nodejs-apis#node-worker-threads
#   https://github.com/oven-sh/bun/issues/18022
#
# TODO: Migrate to rsbuild or others

bun install
bun run build
bun dev

bun run test
bun fix

node util/check_links.mjs
```

&nbsp;

--------

*hyeon.me* is primarily distributed under the terms of the [GNU Affero General
Public License v3.0] or any later version. See [COPYRIGHT] for details.

[hyeon.me]: https://hyeon.me
[GNU Affero General Public License v3.0]: LICENSE
[COPYRIGHT]: COPYRIGHT
