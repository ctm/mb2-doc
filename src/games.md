# Games

Mb2 can deal sixty-four different variations of poker[^1]. This includes
common ones like Texas Hold'em, Omaha and Seven Card Stud as well as
lesser known games like Badugi, Courchevel and Big O.

The [BARGE Rule Book](https://www.barge.org/rulebook/) has
rules to almost all of the games mb2 deals.  The exceptions are
[Sack](./games/sack.html), [Wonky Donkey](./games/wonky-donkey.html),
[Regular Pineapple](./games/regular-pineapple.html),
[Redrum](./games/redrum.html), and [Dealer's Choice](games/dealers-choice.md).

[^1]: At the time of this writing, the precise&mdash;but perhaps inaccurate&mdash;number of games is sixty-seven. That number comes from the source code to mb2:
```
pub static GAMES: LazyLock<[GameInfo; 67]> = LazyLock::new(|| {
    [
        // Hold'ems
        HOLD_EM.done(),
        IRISH.done(),
        HOLD_EM_SHORT.done(),
        CRAZY_PINE.done(),
        CRAZY_PINE_8.done(),
        HOLDEM_8.done(),
        LAZY_PINE.done(),
        LAZY_PINE_8.done(),
        REGULAR_PINE.done(),
        REGULAR_PINE_8.done(),
        RIO_BRAVO.done(),
        // Omahas
        OMAHA.done(),
        OMAHA_8.done(),
        OMAHA_SHORT.done(),
        BIG_O.done(),
        BINGLAHA.done(),
...
```
The 64 shows that we're populating the `GAMES` constant with 64
elements, but it's counting `Hold'em` and `Hold'em High/Low with an
Eight Qualifier` as two separate games.

It's also making the distinction between `Crazy Pineapple` and `Lazy
Pineapple`, yet collectively those _two_ games count as _three_ (and
not four!) because it has a separate entry for Lazy Pineapple with an
eight qualifier and Lazy Pineapple without an eight qualifier, but
does not do the same for Crazy Pineapple.

Internally, games are implemented as core games[^2] which can have a
lot of options applied to them and the `GAMES` constant simply
represents the most popular combinations of core games with
options. There is no requirement for a combination of a core game and
options to be present in `GAMES` for that combination to be used in a
tournament structure or ring game, so mb2 is already dealing well more
than sixty different variants, but some of the differences are so
small that it's hard to argue they're different games.

[^2]
At the time of this writing, here are the core games, with up to three
examples of each.  This table is mostly to represent the current flexibility
of mb2. As such, it's not really that useful to Players, per-se.

|Core Game|Examples|
|-|-|
|Hold'Em|Hold'em, Irish, Rio Bravo|
|Omaha|Omaha, Binglaha, Dramaha 49|
|Scrotum|Scrotum|
|Chowaha|Chowaha, Four Card Chowaha|
|Triple Boards|Oklahoma, Murder, Redrum|
|Courchevel|Courchevel|
|Draw|Five Card Draw, California Lowball, Deuce-to-Seven Lowball|
|Badugi|Badugi, Badacey, Badeucy|
|Triple Draw|Ace-to-Five Triple Draw, Deuce-to-Seven Triple Draw, Archie|
|Mississipi Stud|Mississippi Stud, Mississippi Stud Hi/Lo, Mississippi Razz|
|Seven Card Stud|Seven Card Stud, Razz, Action Razzdugi|
|Five Card Stud|Five Card Stud|
|Mexican|Mexican|
|Simultaneous|SOHE (Simultaneous Omaha and Hold'em)|
|Choice|Paradise Road Pick'em, Wonky Donkey, Dealer's|
