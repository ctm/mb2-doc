# Mb2

Mb2 is a poker server. Eventually it will have slick skinnable clients
for a variety of platforms, but it's being developed from the inside
out, so although it has excellent game mechanics, its UI is currently
bordering on unusable.

### Closed source

Mb2 is closed source, because it's hard to put toothpaste back in the
tube.  I'm monetizing mb2 and some of the ways I might be able do so
successfully require mb2 remaining closed.  I'm also investigating
ways in which I can make the source open, but it's trivial to go from
closed to open and impossible to do the reverse.

### Public documentation

The GitHub repository that hosts this document exists primarily as a
place for me to publicly [track
issues](https://github.com/ctm/mb2-doc/issues) as friends and family
use mb2.  Secondarily, it has a little more documentation than is
provided by the help commands from the clients.

## Web-only (an amazingly bad text-only interface using pop-ups)

Mb2 is accessed via an amazingly painful text-only web interface.  The
pain should diminish fairly soon as I add UI elements to the web
interface.  However, I'm not a visual person, so after I have all the
infrastructure in place, I'll bring in professionals to make the
graphical interfaces elegant.

### Pop-ups used for tables

When you first log in, you're in the starting pen, a place where people
can crudely set up and start tournaments.  Once a tournament is started,
everyone who has registered for that tournament will get a pop-up window
for the table that they're assigned to.  Most browsers block pop-ups until
told otherwise.  You will probably need to enable pop-ups for devctm.com
for the web client to work.

Using a pop-up for the table allows people to be on multiple tables at
once, which currently isn't particularly important, especially since
there's not yet a way to choose to observer tables that you weren't
assigned to, nor are there ring games.  However, observing tables will
be [coming soon](https://github.com/ctm/mb2-doc/issues/70). Ring games
are a relatively low priority, but the infrastructure to support them
is largely already written.

### No database keeping score

Currently, everything is ephemeral; mb2 does not currently use
persistent storage.  So, if you play a tournament the results are not
yet saved for posterity.

The web interface requires you to supply a password, but that password
is only kept in memory, so anytime the server is restarted, all
passwords are forgotten.

### No encryption yet, use a throw-away password, please

The temporary web site (devctm.com) is not using encryption, so not
only should you use a throwaway account, it's conceivable that someone
could even observe your face-down cards.  Encryption will be mandatory
before "too long", but it's a much lower priority than most of the
other issues that still remain.

### Example

If you want to play a TESLA tournament at ten times the speed it was played
at BARGE in 2019, you'd use these commands in the pen/lobby.  You won't,
however, be allowed to start until there are at least two players.  If you
want to see it running, just use two tabs and create two players.

```
tournament tesla
speed 10
join
start
```

## Desired Minimal Functionality

I'd like mb2 to be able to deal close analogs to all the [BARGE 2019
tournaments](https://irp-cdn.multiscreensite.com/7fa840da/files/uploaded/2019_BARGE_structures%20v2.pdf) as well as the [EMBARGO 2020 tournaments](https://www.barge.org/schedule1).

Albeit with a few nits, mb2 already deals all the games in the [BARGE
2019 Rule Book](http://www.ceemeck.org/BARGERuleBook2019/).

`game`
without an argument lists the games that are at available:

```
Games: ace_to_five_3d, archie, badacey, badeucy, badugi, big_o, binglaha, ca_lowball, chowaha, chowaha_four_8,
courchevel, crazy_pine_8, deuce_to_seven, deuce_to_seven_3d, dramaha, dramaha_3d, duck_flush, five_card_draw,
five_card_stud, hold_em, hold_em_8, hold_em_short, irish, korean, lazy_pine, lazy_pine_8, london_lowball, miss_8,
miss_razz, miss_stud, murder, oklahoma, omaha, omaha_8, omaha_short, omaha_two_or_five_8, razz, razz_deuce_to_seven,
razzdugi, scrotum, stud, stud_8, stud_high_low
```

A couple of the games that are available have missing functionality
(e.g., mb2 doesn't yet enforce the "sevens rule" in California
Lowball). Known deficiencies show up on the [issues
page](https://github.com/ctm/mb2-doc/issues).



## Temporarily [Single Table Only](https://github.com/ctm/mb2-doc/issues/10)

Mb2 internally supports multi-table tournaments, but I haven't written
the code that balances and breaks tables down, however, that's my next
item to implement after adding the UI for observing tables.

## Tourneys

All of the EMBARGO 2020 tournament structures and all but three of the
BARGE 2019 tournament structures are implemented.  The three that
aren't require some additional functionality.

`tournament` without an argument lists the tournament structures that
are available.

```
Tournaments: barge_nlhe, chowaha, f_cancer, hoe, irish, jof_short_nlo, korean, limit_6, monte, oklahoma, pl_horse,
plo, six_handed_nlhe, so_mixed_hold_em, tesla, toc
```

## Commands

Eventually, mb2 will have sign-up lists for tournaments and ring
games, but now there's a single starting pen that is used just for
testing.  There are commands you use to set up what game/tournament is
to be started next and then there are commands that are used while
you're playing.  Multiple games and tournaments can run simultaneously.

### Starting Pen Commands

The pen commands are:
```
help
status
join
quit
vacation
back
game
tournament
speed factor
secs-to-act seconds
timeout-secs seconds
start
redeem n_lammers_to_redeem
```

Vacation is a state you can be on where you will check whenever
possible but fold to any action. You can voluntarily put yourself on
vacation with `vacation` and you can take yourself off vacation with
`back`, although any command will take you off vacation.

`game` and `tournament` will list the choices you can have for
games and tournaments.

With `game` you can supply an additional argument to specify which
game, e.g., `game holdem`. If you do that, you'll get the default
betting structure for that game (no-limit for Hold'em).  If you want
to specify the betting structure, you can add `potlimit`, `nolimit` or
two integers representing the small-bet and the big-bet in a split
limit (also known as fixed limit) structure.

```
game holdem 5 10
Game changed to 5 10 Hold 'em by deadhead
```
There are no commands to change the size of the blinds.  The small
blind will be one half of the small bet and the big blind will be the
same size as the small bet.  There are no commands to change the
number of starting chips. You'll get 15,000.

By default, when it's your time to act, you get 30 seconds before
you're put on vacation. If you use the `time` command, by default you
get an additional 60 seconds.  Those two values can be changed in the
starting pen (but can not be changed once the tournament has started)
by the `secs-to-act` and the `timeout-secs` commands, respectively.
Both of those commands take a single positive integer argument
specifying how many seconds.

If you want to try the TESLA structure, you'd use `tournament tesla`
TESLA uses 20 minute rounds.  If you'd like to use 2 minute rounds, use
`speed 10` to play the tournament ten times faster (i.e. the duration
is one tenth normal).

### In Game Commands

I will be adding UI elements for everything mentioned here, but until
those UI elements appear, you have to type your commands in the
command box.

When you're in a game, the long versions (there are one letter abbreviations for
all of the common ones) of the commands are:

```
status
cards
quit
vacation
back
time
muck
reveal
conceal
default reveal
default conceal
discard cards
discard none
undo [action | reveal | discard]
fold
check
jam
make amount
call [amount]
bet [amount | pot | half]
raise [amount | pot | half]
rebuy
rebuy_on_bust
done_on_bust
redeem n_lammers_to_redeem
```

Use `time` if you need more time to think.  You'll get an extra minute.  There
is currently no limit to how often you can use the time command.

#### What to reveal at showdown

By default, you will only show your cards at the showdown if you have
to.  If there are no all-ins and someone else shows first and you're
beat, you won't be required to show your cards.  You can change that
default by using `default reveal` in which case any time you make it
to the showdown you'll reveal your cards (which might be helpful if
you're teaching someone the game).  If you want your default to be
back to what it started at `default conceal` will take it back.

You can override your default revelation strategy for the current
hand, by using `reveal` or `conceal`.  That's a one-time change
and after the showdown your default will stay what it was before that
override.  You can also use `muck` which will cause you to throw
away your hand, _even if it's a winner_.

#### Discards, drawing and undoing

You can use `discard ac 2d` tell mb2 that when it's your turn to
discard and draw new cards you want to discard your ace of clubs and
your two of diamonds or `discard none` to stand pat.

If you type an action command before it is your time to act, that
command will be remembered and used instantly when it is your time to
act.  If you realize you don't want that command to be applied, you
can use `undo` to clear all your advance commands or more narrowly
`undo action`, `undo reveal` or `undo discard` to just undo that
aspect of your advance requests.

#### `make`

If you use `raise 2000` as an advanced action, you will bet or raise
2000, if that's an acceptable raise, when it is your turn to ask, so
if it's checked to you, you'll make it 2000, but if someone bets 1,000
and then someone else raises 2,000, then you'll raise 2,000 and the
total bet will be 5,000.  If your desire is to raise however much is
required to make the total bet 2,000, you can uses `make 2000`.

#### Rebuy Tournaments

If a tournament is a rebuy tournament, mb2 will assume you want to rebuy
each time you bust. If that's not the case, use the `done_on_bust` command
when you want your next bust to be permanent.  If you change your mind, you
can use `rebuy_on_bust` to tell the tournament that when you bust you want
to rebuy, but you must do that before you bust.

When you are playing in a rebuy tournament you can use the `rebuy`
command to ask for chips during the rebuy period.  If you are below
the starting stack size and out of the hand, you'll get them
immediately. If you're in the hand, your request will be remembered at
the end of the hand and if you're below the starting stack size,
you'll get your additional chips before the next hand is dealt.

## Abbreviations

Instead of typing the entire command, you can usually abbreviate:

|Abbreviation|Command|
|------------|-------|
|b|back|
|c|call|
|d|discard|
|f|fold|
|j|jam|
|m|make|
|r|raise|
|s|status|
|t|time|
|q|quit|
|pat|discard none|
|pot|raise pot|

## Playtesting

In theory, mb2 runs 24x7, but I'm not yet paying attention to what
goes on there (nor do I have a crash monitor installed).  I do most of
my play-testing on my development machine, but I'd be happy to play with
others on devctm.com anytime I'm available.

After the UI is a little better (it'll still be horrible!), I'll
schedule some tournaments.  Once I add a database to persist info,
I'll _probably_ introduce payout structures for tournaments, and add
ring games with a rake and allow people to be the house as long as
they're willing to hang out at their table and help people explore
mb2.

In the meantime, if you want to help out by play-testing, you can do
so on your own, it's just that you need at least two participants.
So, either dragoon a friend or relative into playing or fire up two
windows and drive both of them yourself.

Until I add the table balancing and table breakdown code, tourneys
will be limited to single tables, although multiple tourneys can run
concurrently.  I _still_ expect mb2 will be dealing multi-table
tourneys "soon", but I've been saying that for a while.  So far there
haven't been enough play testers for that to matter, but I think that
will change before too long.


