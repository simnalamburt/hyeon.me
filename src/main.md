### Curriculum vitae
- <small>2021 Sep - now</small> [CHAI Corporation]
  - Head of Infrastructure Engineering
- <small>2017 Jul - 2019 Nov</small> [DEVSISTERS]
  - Cloud Infrastructure Team
  - Created & Managed internal Kubernetes infrastructure
  - Created & Managed game production infrastructure
  - Created [Devsisters tech blog](https://tech.devsisters.com/)
  - Created an abusing detection system of Cookie Wars
- <small>2016 Jul - 2016 Nov</small> [PATI Games]
  - DevOps
  - Server administrator of Mobile game, "[아이러브니키]"
  - [K-ISMS] certification preparation team
- <small>2014 Mar - 2014 Nov</small> [Byline]
  - Starting Member
  - Main developer, server administrator
- <small>2013 Mar - 2021 Aug</small> [Seoul National University, Seoul, Korea][snu]
  - Bachelor of Science in [Computer Science and Engineering][cse]
  - [Server administrator of SNU Dept. of CSE][bacchus]
  - Server administrator of [UPnL]

&nbsp;

Experience
--------
> Most of the work is open source, so you can freely look and verify it.

- #### System Programming <small>x86_64, ARMv7, C, C++, Rust *10*</small>
    - Partially ported [flashbench](https://github.com/simnalamburt/flashbench)
      SSD firmware emulator kernel module into Rust
    - [rust-pragmatic-segmenter](https://github.com/simnalamburt/rust-pragmatic-segmenter),
      Performant sentence boundary disambiguation library written in Rust
    - [Implemented wayland frontend of kime](https://github.com/Riey/kime/pulls?q=author%3Asimnalamburt),
      the Korean IME written in Rust
    - Implemented kernel thread, CoW, preemptive priority scheduling to RISCV xv6
    - [tiny-rbtree](https://github.com/simnalamburt/tiny-rbtree),
      C implementation of red-black tree
    - [SoftwareRasterizer][sr], software rasterizer using [Intel TBB]
    - [`mm_malloc()`], hand-made memory allocator
    - [obj-rs], [Wavefront .obj file] parser for the [Rust]
      programming language
    - [xmath], Rust port of Microsoft DirectXMath
    - [rust-kr/rust-kr.org](https://github.com/rust-kr/rust-kr.org),
      Korean Rust user group website made in Rust
    - Contributed to various Rust FOSS projects:
        [texture_packer](https://github.com/PistonDevelopers/texture_packer/pulls?q=author%3Asimnalamburt),
        [awe-lambda-rust-runtime](https://github.com/lamedh-dev/aws-lambda-rust-runtime/pull/8),
        [tar-rs](https://github.com/alexcrichton/tar-rs/pull/28),
        [cocoa-rs](https://github.com/servo/cocoa-rs/pull/76),
        [cgmath](https://github.com/rustgd/cgmath/pulls?q=author%3Asimnalamburt),
        etc

- #### Server Administration <small>*13*</small>
    - Experienced both large-scale cloud and on-prem infrastructure
    - Experienced both Managed Kubernetes and Kubernetes from scratch
    - Windows Kubernetes experience
    - IaaC experience <small>Terraform, Packer, ...</small>
    - Long term of Linux system experience <small>Ubuntu, RHEL, CentOS, Arch, ...</small>
    - Legacy system experience <small>Solaris 10, IBM AIX 6.1</small>
    - Windows server experience

- #### Command-line Utilities <small>bash, zsh, fish, vim, ... *13*</small>
    - [vim-mundo](https://github.com/simnalamburt/vim-mundo),
      vim undo tree visualizer
    - [ctrlf](https://github.com/simnalamburt/ctrlf),
      interactive search for terminal
    - [zsh-expand-all](https://github.com/simnalamburt/zsh-expand-all),
      fish-like abbreviation for zsh
    - [cgitc](https://github.com/simnalamburt/cgitc),
      git abbreviation plugin for bash/zsh/fish
    - [simnalamburt/.dotfiles](https://github.com/simnalamburt/.dotfiles),
      my UNIX-like system configuration files
    - [shellder](https://github.com/simnalamburt/shellder),
      featured zsh/fish shell theme
    - [aws-mfa](https://twitter.com/simnalamburt/status/1343274216645304321),
      virtual MFA CLI for AWS
    - [Implemented](https://github.com/zsh-users/zsh-completions/pull/773) autocompletion for mssh
    - ❤️ packaging ❤️
      - [homebrew-x](https://github.com/simnalamburt/homebrew-x), My homebrew packages including podman and qemu patched for Apple Silicon
      - [awscliv2.appimage](https://github.com/simnalamburt/awscliv2.appimage),
        AWS CLI v2 packaged into a single file using [AppImage](https://appimage.org)
      - [pnpm.appimage](https://github.com/simnalamburt/pnpm.appimage),
        pnpm packaged into a single file using AppImage
      - [less-static](https://github.com/simnalamburt/less-static),
        statically built less binary for amd64
      - [qemu-system-riscv64.deb](https://github.com/simnalamburt/qemu-system-riscv64.deb),
        riscv64 QEMU binary packaged for Debian 10
      - [filebench](https://github.com/simnalamburt/filebench),
        filebench packaged for Debian
      - [simnalamburt/PKGBUILD](https://github.com/simnalamburt/PKGBUILD),
        My arch linux packages
      - [Packaged various windows apps](https://github.com/ScoopInstaller/Extras/pulls?q=author%3Asimnalamburt) using scoop

- #### Web <small>React, Vue, ... *13*</small>
    - Modern web frontend experience <small>ES2021, CSS4, Babel, ...</small>
    - [hyeon.me](https://github.com/simnalamburt/hyeon.me), this resume was
      made with Webpack 5, Sass, and TypeScript
    - [refined-naver-blog](https://github.com/simnalamburt/refined-naver-blog),
      browser plugin to read naver blog articles less distractive
    - [wbwwb-ko](https://github.com/simnalamburt/game.hyeon.me/tree/master/wbwwb), Korean translation
      of a minigame "We Become What We Behold", made by Nicky Case
    - Contributed to
      [Next.js](https://github.com/vercel/next.js/pulls?q=author%3Asimnalamburt),
      [pen](https://github.com/hatashiro/pen/pulls?q=author%3Asimnalamburt),
      etc

- #### Embedded System <small>*20*</small>
    - Implemented a matrix multiplication accelerator powered by FPGA <small>Verilog</small>
    - Microcontroller programming <small>Atmel AVR, ARM</small>

- #### Software Engineering <small>*04*</small>
    - Ruby <small>Rails, sinatra, unicorn</small>
      - [kollus-ruby](https://github.com/simnalamburt/kollus-ruby),
        [Kollus](https://www.catenoid.net/) media API reverse engineering
      - [daumdic-ruby](https://github.com/simnalamburt/daumdic-ruby),
        simple daum dictionary crawler library
      - [svn-explorer](https://github.com/simnalamburt/svn-explorer),
        dead-simple svn repository explorer
    - Python <small>Flask, SQLAlchemy</small>
      - [cloudkeeper], IRCCloud reverse engineering
      - [pipenv](https://github.com/pypa/pipenv) contribution:
        [#228](https://github.com/pypa/pipenv/issues/228)
        [#238](https://github.com/pypa/pipenv/pull/238)
    - Node.js
      - node-kakao, KakaoTalk protocol reverse engineering <i class=private></i>
      - [xsalsa20-csprng](https://github.com/simnalamburt/npm/tree/main/packages),
        CSPRNG and crypto library powered by XSalsa20
      - [hangul-josa](https://github.com/simnalamburt/npm/tree/main/packages/hangul-josa),
        modern Hangul josa handling library
      - [slate/slate-irc](https://github.com/slate/slate-irc), IRC client
        library made to replace
        [node-irc](https://github.com/martynsmith/node-irc) which does not even
        support CJK nickname
    - Go
      - [go-mssqldb](https://github.com/denisenkom/go-mssqldb) contribution:
        [#96](https://github.com/denisenkom/go-mssqldb/issues/96)
        [#250](https://github.com/denisenkom/go-mssqldb/pull/250)
    - Rust
      - [texture_packer](https://github.com/PistonDevelopers/texture_packer) contribution:
        [#41](https://github.com/PistonDevelopers/texture_packer/pull/41)
        [#42](https://github.com/PistonDevelopers/texture_packer/pull/42)
        [#43](https://github.com/PistonDevelopers/texture_packer/pull/43)
        [#46](https://github.com/PistonDevelopers/texture_packer/pull/46)
    - Elm
      - [libreirc/elm-crypto](https://github.com/libreirc/elm-crypto), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html) for Elm
    - Scala, Java, Kotlin, Elixir, PHP, Pascal, etc

- #### Programming Language Theory <small>*14*</small>
    - Functional programming language experience <small>Rust, Scala, OCaml, Haskell, Elm</small>
    - Once contributed to the Rust compiler a little:
      [rust-lang/rust#20460](https://github.com/rust-lang/rust/issues/20460),
      [rust-lang/rust@`9041e6e`](https://github.com/rust-lang/rust/commit/9041e6e0ee)
    - Hand-made [type inferencer for first-order
      logic](https://github.com/simnalamburt/snucse.pl/tree/master/hw4)

- #### Windows Native Programming <small>WinAPI, COM, ATL *11*</small>
    - [simnalamburt/EasyD3D](https://github.com/simnalamburt/EasyD3D),
      toy project to wrap Direct3D11 wrapper with C++14
    - [simnalamburt/BinaryToC](https://github.com/simnalamburt/BinaryToC),
      MS COM sample app
    - ATL, ActiveX programming experience <i class=oh-no></i>

- #### Parallel Computing, Distributed Computing <small>CUDA, OpenCL, OpenMP, MPI *10*</small>
    - Patching [GADGET-2](https://wwwmpa.mpa-garching.mpg.de/gadget/) for
      simulating nonsymmetrical elliptical galaxy <i class=private></i>
    - GPU-accelerated NegaScout algorithm <i class=private></i>
    - [PARSEC Benchmark Swaption](https://github.com/simnalamburt/snucse.swaptions),
      targetting [Chundoong](http://chundoong.snu.ac.kr/) supercomputer
    - PySpark optimization using Rust

- #### .NET Framework <small>C#, C++/CLI *11*</small>
    - [simnalamburt/FateOne][fo], game helper utility

- #### Computer Graphics <small>D3D, OpenGL *12*</small>

- #### Machine Learning <small>TF2, TF.js *20*</small>
    - Basic experience of machine learning

- #### Mobile App Development <small>*11*</small>
    - Android <small>Java, Kotlin</small>
    - iOS <small>Objective-C, Swift</small>
      - [ios-dangerous-webview-practice](https://github.com/simnalamburt/ios-dangerous-webview-practice),
        sample app to practice bypassing iOS App Transport Security

- #### etc
    - Basic competitive programming experience
    - An Infinitely Large Napkin, the math textbook
        [contribution](https://github.com/vEnhance/napkin/pulls?q=author%3Asimnalamburt)

[`mm_malloc()`]: https://github.com/simnalamburt/snucse/tree/main/System%20Programming/malloclab
[Intel TBB]: https://github.com/oneapi-src/oneTBB
[simnalamburt/obj-rs]: https://github.com/simnalamburt/obj-rs
[Wavefront .obj file]: https://en.wikipedia.org/wiki/Wavefront_.obj_file
[xmath]: https://github.com/simnalamburt/xmath
[Rust]: https://www.rust-lang.org

&nbsp;

Featured works
--------
-   #### node-kakao <small>Reverse engineering, Node.js</small> <i class=private></i>

    KakaoTalk Client Library written in [node.js]

    <img class=rounded src="img/kakao.png">

-   #### [hwp2pdf] <small>Reverse engineering, js</small>

    Converts an HWP document into a PDF format using Naver Whale's converter

    [<img style="border:#ccc 1px solid" class=rounded src="https://i.hyeon.me/hwp2pdf/screenshot.png">][hwp2pdf]

-   #### [rust-pragmatic-segmenter]

    Performant sentence boundary disambiguation library

    [<img style="border:#ccc 1px solid" class=rounded src="https://opengraph.githubassets.com/5c87f775a7496dac5a3de177b8feedcd492eacb58178091bfad232799b3dd551/simnalamburt/rust-pragmatic-segmenter">][rust-pragmatic-segmenter]

-   #### [`obj-rs`][obj-rs] <small>Parser, Rust</small>

    Wavefront OBJ parser written in [Rust]

    [<img class=rounded src="img/obj-rs.png">][obj-rs]

-   #### [SoftwareRasterizer][sr] <small>C++, IntelTBB</small>

    Homebrewed 3D scene rasterizer without Hardware Acceleration

    [<img style="border:#ccc 1px solid" class=rounded src="img/rasterizer.png">][sr]

-   #### [FateOne][fo] <small>WinAPI, C#</small>

    Game helper made for my own purpose

    [<img style="border:#ccc 1px solid" class=rounded src="img/fateone.png">][fo]

-   #### [dotfiles] <small>Linux, shell</small>

    My UNIX-like system configuration files

    [<img class=rounded src="img/dotfiles.png">][dotfiles]

-   &nbsp;

    ###### <i class="fab fa-github"></i> Please visit my [GitHub] profile to see more works!

    - [simnalamburt/snucse](https://github.com/simnalamburt/snucse) <small>Note takings</small>
    - [simnalamburt/snippets](https://github.com/simnalamburt/snippets) <small>Small code snippets</small>

&nbsp;

--------

<small style="display: block">[AGPLv3 License]</small>


[cloudkeeper]: https://github.com/simnalamburt/cloudkeeper
[hwp2pdf]: https://github.com/simnalamburt/hwp2pdf
[rust-pragmatic-segmenter]: https://github.com/simnalamburt/rust-pragmatic-segmenter
[CHAI Corporation]: https://chai.finance/
[DEVSISTERS]: https://www.devsisters.com/
[PATI Games]: https://nexturecorp.com/
[K-ISMS]: https://isms.kisa.or.kr/main/
[아이러브니키]: https://nexturecorp.com/games/8
[Byline]: https://byline.com/
[snu]: https://en.snu.ac.kr/
[cse]: http://cse.snu.ac.kr/en
[bacchus]: https://bacchus.snucse.org/about/
[UPnL]: https://upnl.org/
[GitHub]: https://github.com/simnalamburt
[obj-rs]: https://github.com/simnalamburt/obj-rs
[node.js]: https://nodejs.org/
[Rust]: https://www.rust-lang.org/
[sr]: https://github.com/simnalamburt/SoftwareRasterizer
[fo]: https://github.com/simnalamburt/FateOne
[dotfiles]: https://github.com/simnalamburt/.dotfiles
[Jean Anouilh]: https://en.wikipedia.org/wiki/Jean_Anouilh
[AGPLv3 License]: https://github.com/simnalamburt/hyeon.me/blob/main/LICENSE
