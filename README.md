[hyeon.me](https://hyeon.me)
========
My resume website. See [simnalamburt/nginx.conf] for the sample nginx
configuration.

```bash
ls
# client/       # Client-side codes
# public/       # Files which will be statically served
# dist/         # Webpack build results

cd client/

yarn            # Download dependencies
yarn build      # Build front-end codes in production mode
yarn build:dev  # Build front-end codes in development mode

yarn watch      # Watch for the changes & build front-end
                # codes in development mode

yarn start      # Start webpack-dev-server
                # See http://localhost:8080


./test          # Hyperlink validator
```

<br>

--------

*hyeon.me* is primarily distributed under the terms of the [GNU Affero General
Public License v3.0] or any later version. See [COPYRIGHT] for details.

[simnalamburt/nginx.conf]:https://github.com/simnalamburt/nginx.conf/blob/master/kuma.conf
[GNU Affero General Public License v3.0]: LICENSE
[COPYRIGHT]: COPYRIGHT
