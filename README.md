# Mb2

Mb2 is Craft Poker Co.'s poker software.

You can go to [https://craftpoker.com](https://craftpoker.com "alpha") and
start playing now.

The [Players' Manual](https://ctm.github.io/docs/players_manual/) has
more info, but it's unneeded and few players have read it.

The info that remains on this page is just obscure stuff that isn't
high enough priority to move there.

### In Game Commands

The graphical user interface is now the default. It's still possible
to get to the text interface, but it will go away.  As such, the text
interface is no longer documented, except for the two features that
aren't available in the graphical interface: putting yourself on
vacation and quitting.

When you're in a game, the long versions (there are one letter
abbreviations for all of the common ones) of the commands that are not
available via UI elements are `vacation` and `quit`, which can be
abbreviated as `v` and `q`.

## Computer Languages, Frameworks and Libraries

I've written mb2 almost entirely in
[Rust](https://www.rust-lang.org/), using
[actix-web](https://actix.rs/), [yew](https://yew.rs/docs/),
[diesel](http://diesel.rs) and
[rust-argon2](https://github.com/sru-systems/rust-argon2).  The
exception is that the web client also uses
[UIKit](https://getuikit.com/).

I get substantial benefits by developing both the back-end and
front-end in Rust.

## Micro Pitch

To be the online poker equivalent of craft beer: fun for everyone,
including the enthusiasts.

### Origin Story

Over twenty years ago, I wrote multibot, which was the first software
to deal multi-table tournaments on the internet.  I did so for two
reasons, I wanted to play multi-table tournaments on the internet and
I wanted to improve my knowledge of Objective-C.  I've written mb2
for two reasons: to make money by degamifying gaming and to improve my
knowledge of Rust.  I've already succeeded in the latter (although I
have a lot more to learn about Rust).
