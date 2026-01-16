# Games

Mb2 can deal seventy-four named variations of poker and a ridiculous
number of variants thereof. This includes common ones like Texas
Hold'em, Omaha and Seven Card Stud as well as lesser known games like
Badugi, Courchevel and Big O.

The [BARGE Rule Book](https://www.barge.org/rulebook/) has rules to
almost all of the named poker games mb2 deals.  The exceptions are
[Sack](./games/sack.html), [Regular
Pineapple](./games/regular-pineapple.html),
[Redrum](./games/redrum.html), [Dealer's
Choice](games/dealers-choice.md) and [Dealer's
Die](games/dealers-die.md).

At the time of this writing, the precise number of _named_ games is
seventy-four. That number comes from the source code to mb2:
```
pub static GAMES: LazyLock<[GameInfo; 74]> = LazyLock::new(|| {
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
        HOLD_EM_CRAYFISH.done(),
        GREEK_HOLD_EM.done(),
        // Omahas
        OMAHA.done(),
        OMAHA_8.done(),
        OMAHA_SHORT.done(),
        BIG_O.done(),
        BINGLAHA.done(),
        DRAMADUGI.done(),
        DRAMAHA.done(),
        DRAMAHA_49.done(),
        DRAMAHA_ZERO.done(),
        DRAMAHA_21.done(),
        DRAMAHA_3D.done(),
...
```

The 74 shows that we're populating the `GAMES` constant with
seventy-four elements, but it's counting&mdash;for
example&mdash;`Hold'em` and `Hold'em High/Low with an Eight Qualifier`
as two separate games.

It's also making the distinction between `Crazy Pineapple` and `Lazy
Pineapple`, yet collectively those _two_ games count as _three_ (and
not four!) because it has a separate entry for Lazy Pineapple with an
eight qualifier and Lazy Pineapple without an eight qualifier, but
does not do the same for Crazy Pineapple.

Click the triangle to see the entire list of the games mb2 has
internal names for.

<details>
<summary>Code that initializes the GAMES constant</summary>
<pre>
pub static GAMES: LazyLock<[GameInfo; 74]> = LazyLock::new(|| {
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
        HOLD_EM_CRAYFISH.done(),
        GREEK_HOLD_EM.done(),
        // Omahas
        OMAHA.done(),
        OMAHA_8.done(),
        OMAHA_SHORT.done(),
        BIG_O.done(),
        BINGLAHA.done(),
        DRAMADUGI.done(),
        DRAMAHA.done(),
        DRAMAHA_49.done(),
        DRAMAHA_ZERO.done(),
        DRAMAHA_21.done(),
        DRAMAHA_3D.done(),
        TWO_OR_FIVE_O8.done(),
        OMAHA_X_OR_BETTER.done(),
        DOUBLE_PLO.done(),
        FIVE_CARD_OMAHA.done(),
        OMAHA_CRAYFISH.done(),
        // Scrotum
        SCROTUM.done(),
        // Chowahas
        CHOWAHA.done(),
        CHOWAHA_FOUR_8.done(),
        // Triple Boards
        OKLAHOMA.done(),
        MURDER.done(),
        REDRUM.done(),
        // Courchevel
        COURCHEVEL.done(),
        // Draws
        DRAW.done(),
        LIMIT_CA_LOWBALL.done(),
        LIMIT_VANILLA_CA_LOWBALL.done(),
        NL_CA_LOWBALL.done(),
        DEUCE_TO_SEVEN.done(),
        QUICK_QUADS.done(),
        // Badugis
        BADUGI.done(),
        BADACEY.done(),
        BADEUCY.done(),
        // Triple Draws
        ACE_TO_FIVE_3D.done(),
        DEUCE_TO_SEVEN_3D.done(),
        ARCHIE.done(),
        KOREAN.done(),
        DUCK_FLUSH.done(),
        QUICK_QUADS_3D.done(),
        DEUCE_TO_SEVEN_2D.done(),
        // Mississippi Studs
        MISS_STUD.done(),
        MISS_8.done(),
        MISS_RAZZ.done(),
        // 7-card Studs
        STUD.done(),
        RAZZ.done(),
        STUD_8.done(),
        STUD_HIGH_LOW.done(),
        DEUCE_TO_SEVEN_RAZZ.done(),
        LONDON_LOWBALL.done(),
        RAZZDUGI.done(),
        ACTION_RAZZ.done(),
        ACTION_RAZZDUGI.done(),
        SUPER_STUD.done(),
        SUPER_STUD_8.done(),
        // 5-card studs
        FIVE_CARD_STUD.done(),
        // Mexicans
        MEXICAN.done(),
        // Simultaneous
        SOHE.done(),
        SHESHE.done(),
        // Choice
        PARADISE_PICK_EM.done(),
        WONKY_DONKEY.done(),
        DEALERS_CHOICE.done(),
        DEALERS_DIE.done(),
    ]
});
</pre>
</details>

Internally, games are implemented as core games which can have a
lot of options applied to them and the `GAMES` constant simply
represents the most popular combinations of core games with
options. There is no requirement for a combination of a core game and
options to be present in `GAMES` for that combination to be used in a
tournament structure or ring game, so mb2 is already dealing well more
than seventy-four different variants, but some of the differences are so
small that it's hard to argue they're different games.

Here are the core games, with up to three
examples of each.  This table demonstrates the flexibility
of mb2; it's not really that useful to players.
<br/>
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
