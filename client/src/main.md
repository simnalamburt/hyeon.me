<div align=center><a href="https://github.com/simnalamburt"><img src="img/streak.png"></a></div>

> Open source contributions: **2,919 total** in year 2016

### Curriculum vitae
- <small>2016</small> [PATI Games]
  - DevOps
  - Server administrator of [아이러브니키]
  - [ISMS](https://isms.kisa.or.kr/main/) 심사 대응팀
- <small>2014</small> [Byline]
  - Starting Member
  - Main developer, server administrator
- <small>2013 - now</small> [Seoul National University, Seoul, Korea][snu]
  - B.S. Student
  - Major in [Computer Science and Engineering][cse]
  - [Server administrator of SNU Dept. of CSE][bacchus]
  - Server administrator of [UPnL]
- <small>2010 - 2013</small> 경기과학고등학교
  - <small>2011</small> 한국정보올림피아드 공모대회 동상

<br>

Skills
--------
> Most of the work is open source, so you can freely look and verify it.

- #### System Programming <small>x86_64, ARMv7, C, C++, Rust *10*</small>
    - [simnalamburt/tiny-rbtree](https://github.com/simnalamburt/tiny-rbtree),
      C implementation of red-black tree, checked by valgrind
    - [simnalamburt/SoftwareRasterizer][sr], software rasterizer using [Intel TBB]
    - [`mm_malloc()`], hand-made memory allocator
    - [simnalamburt/obj-rs], [Wavefront .obj file] parser for the [Rust]
      programming language
    - [simnalamburt/xmath], Rust port of Microsoft DirectXMath
    - [rust-kr/rust-kr.org](https://github.com/rust-kr/rust-kr.org),
      Korean Rust user group website made in Rust

- #### Server Administrator <small>Ubuntu, CentOS, Arch, Windows, ... *13*</small>
    - Experience of large-scale server admin <small>AWS, CCU ~50,000</small>
    - Container orchestration <small>docker, rkt, CoreOS, Kubernetes</small>
    - Currently managing 6 physical servers:
      - [hyeon.me](https://hyeon.me)
      - [kuma.hyeon.me](https://kuma.hyeon.me)
      - [uriel.upnl.org](https://uriel.upnl.org) <i class=private></i>
      - [sodrak.upnl.org](http://sodrak.upnl.org)
      - [gemini.upnl.org](http://gemini.upnl.org)
      - [edhelbroy.upnl.org](http://edhelbroy.upnl.org)
    - Legacy system experience <small>Solaris 10, IBM AIX 6.1</small>

- #### Linux Experience <small>bash, zsh, fish, vim, ... *13*</small>
    - [simnalamburt/vim-mundo](https://github.com/simnalamburt/vim-mundo),
      vim undo tree visualizer
    - [simnalamburt/shellder](https://github.com/simnalamburt/shellder),
      featured zsh/fish shell theme
    - [simnalamburt/cgitc](https://github.com/simnalamburt/cgitc),
      git abbreviation plugin for bash/zsh/fish
    - [simnalamburt/.dotfiles](https://github.com/simnalamburt/.dotfiles),
      My UNIX-like system configuration files

- #### Web <small>Ruby, Go, node.js, ECMAScript, ... *04*</small>
    - Backend
      - Ruby <small>Rails, sinatra, unicorn</small>
      - Python <small>Flask, SQLAlchemy</small>
      - Node.js <small>koa, express</small>
      - Go, Rust, Elixir
    - Frontend
      - Various frameworks experience <small>Elm, React, Redux, Angular 1</small>
      - Modern frontend stack <small>ES2017, CSS4, Webpack 2, TypeScript, Babel, Flow</small>
      - [simnalamburt/hyeon.me](https://github.com/simnalamburt/hyeon.me)
      - [simnalamburt/web-practice](https://github.com/simnalamburt/web-practice)
    - PHP <i class=oh-no></i>

- #### Programming Language <small>*14*</small>
    - Functional programming language experience <small>Rust, OCaml, Haskell, Elm</small>
    - Once contributed to the Rust compiler a little:
      [rust-lang/rust#20460](https://github.com/rust-lang/rust/issues/20460),
      [rust-lang/rust@`9041e6e`](https://github.com/rust-lang/rust/commit/9041e6e0ee)

- #### Windows Native Programming <small>WinAPI, COM, ATL *11*</small>
    > I was once a hardcore Windows developer, but I'm not anymore.

    - [simnalamburt/EasyD3D](https://github.com/simnalamburt/EasyD3D),
      Toy project to wrap Direct3D11 wrapper with C++14
    - [simnalamburt/BinaryToC](https://github.com/simnalamburt/BinaryToC),
      MS COM sample app
    - ActiveX Experience <i class=oh-no></i>

- #### .NET <small>C#, C++/CLI *11*</small>
    - [simnalamburt/FateOne][fo], game helper utility

- #### Multi-core Programming <small>CUDA, OpenCL, OpenMP, MPI *12*</small>
    - GPU-accelerated NegaScout algorithm <i class=private></i>
    - [PARSEC Benchmark Swaption](https://github.com/simnalamburt/snucse.swaptions),
      targetting [Chundoong](http://chundoong.snu.ac.kr/) supercomputer

- #### Computer Graphics <small>D3D, OpenGL *12*</small>

- #### Mobile App Development <small>*11*</small>
    - Android <small>Java, Kotlin</small>
    - iOS <small>Objective-C, Swift</small>

[`mm_malloc()`]:https://github.com/simnalamburt/snucse/tree/master/System%20Programming/malloclab
[Intel TBB]:https://www.threadingbuildingblocks.org/
[simnalamburt/obj-rs]:https://github.com/simnalamburt/obj-rs
[Wavefront .obj file]:https://en.wikipedia.org/wiki/Wavefront_.obj_file
[simnalamburt/xmath]:https://github.com/simnalamburt/xmath
[Rust]: https://www.rust-lang.org

<br>

Featured works
--------
-   #### node-kakao <i class=private></i>

    KakaoTalk Client Library written in [node.js]

    <img class=rounded src="img/kakao.png">

-   #### [`obj-rs`][obj-rs]

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

-   <br>

    ###### <i class="fa fa-github"></i> Please visit my [GitHub] profile to see more works!

    - [simnalamburt/snucse](https://github.com/simnalamburt/snucse) <small>Note takings</small>
    - [simnalamburt/snippets](https://github.com/simnalamburt/snippets) <small>Small code snippets</small>

<br>

--------

<small style="display: block">
  <span id=license>[AGPLv3 License][li]</span>
  <span id=quote>Things are beautiful if you love them. ― *[Jean Anouilh][jean]*</span>
</small>

[PATI Games]: https://patigames.com/
[아이러브니키]: https://patigames.com/games/8
[Byline]: https://www.byline.com/
[snu]: http://en.snu.ac.kr/
[cse]: http://cse.snu.ac.kr/en
[bacchus]: https://bacchus.snucse.org/about/
[UPnL]: http://upnl.org/
[GitHub]: https://github.com/simnalamburt
[obj-rs]: https://github.com/simnalamburt/obj-rs
[node.js]: https://nodejs.org/
[Rust]: https://www.rust-lang.org/
[sr]: https://github.com/simnalamburt/SoftwareRasterizer
[fo]: https://github.com/simnalamburt/FateOne
[dotfiles]: https://github.com/simnalamburt/.dotfiles
[Othello AI]: https://en.wikipedia.org/wiki/Computer_Othello
[jean]: https://en.wikipedia.org/wiki/Jean_Anouilh
[li]: https://github.com/simnalamburt/hyeon.me/blob/master/LICENSE
