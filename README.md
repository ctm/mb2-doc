# Mb2

Mb2 is a poker server, still in development.


### Closed source

Mb2 is currently closed source.  It's hard to put toothpaste back in
the tube.  I'm to monetizing mb2 and some of the ways I might be able
do so require mb2 remaining closed.

### Public documentation

This repository exists primarily as a place for me to publicly track
issues as friends and family play around with mb2.  Secondarily, it
has a little more documentation than is provided by `p help`.

## IRC

Mb2 currently can only be accessed via IRC.  I plan on adding several
other interfaces, but only after I've finished the minimal set of
features described below.

The only public IRC server that has mb2 attached to it is `devctm.com`.

### Not ready for testing, per-se

Mb2 is demonstrable, in that if you connect to devctm.com and look in
the `#poker` channel or one of the `#table-N` channels, you may see
activity.

Currently, everything is ephemeral; mb2 does not currently store any
info in persistent storage.  So, if you play a tournament the results
are not yet saved for posterity.  There are no passwords and thus
nothing in place to prevent nick stealing.

## Desired Minimal Functionality

I'd like mb2 to be able to deal close analogs to all the [BARGE 2019
tournaments](https://irp-cdn.multiscreensite.com/7fa840da/files/uploaded/2019_BARGE_structures%20v2.pdf)
and well as ring games of all the games in the [BARGE Rule
Book](http://www.ceemeck.org/BARGERuleBook2019/).

## Missing Features

Here are the big things that are missing:

### [Multi-tables](https://github.com/ctm/mb2-doc/issues/10)

Mb2 internally supports multi-table tournaments, but I haven't written
the code that balances and breaks tables down.  I have some questions
about exactly what algorithms I should use, but I don't want to be
distracted by thinking about that until I finish the easier missing
features listed below.

### Most games

Most games are not yet available, even though they could be. `p game`
without an argument will list the games that are at least partially
available:

```
> *mb2* p game
*mb2* Games: archie, big_o, chowaha, deuce_to_seven_triple_draw, duck_flush,
holdem, korean, mississippi_stud, omaha_eight, razz, stud, triple_draw_dramaha
```

Right now I'm only adding new games to test corner cases.

I have already written all the evaluators, that I think I need for all
the BARGE games, except for Short Deck Texas Hold'em.

Adding additional games is usually trivial. For example, once I
implemented drawing and discarding, I had Duck Flush working in
fifteen minutes.  However, I haven't actually written tests for my
obscure evaluators so they might have bugs, especially since they're
for games I've exceedingly rarely played.

### All tourneys

Currently, `monte` is the only tournament structure known.  Others will
be available shortly.

## Commands

Eventually, mb2 will have sign-up lists for tournaments and ring
games, but now there's a single starting pen that is used just for
testing.  There are commands you use to set up what game/tournament is
to be started next and then there are commands that are used while
you're playing.  Multiple games or tournaments can run simultaneously
and it's possible to talk to the starting pen when you're already
playing a game/tournament, but the default is for you to talk to the
pen if you're not in a tournament and to talk to the tournament you're
in if you're in just one.

All commands are preceded by the lower-case letter 'p' and a single command.
As such, to get help, type `p help`.

### Starting Pen Commands

The pen commands are:
```
p help
p status
p join
p quit
p vacation
p back
p game
p tournament
p speed factor
p start
```

Vacation is a state you can be on where you will check whenever
possible but fold to any action. You can voluntarily put yourself on
vacation with `p vacation` and you can take yourself off vacation with
`p back`, although any command will take you off vacation.

`p game` and `p tournament` will list the choices you can have for
games and tournaments.

With `p game` you can supply an additional argument to specify which
game, e.g., `p game holdem`. If you do that, you'll get the default
betting structure for that game (no-limit for Hold'em).  If you want
to specify the betting structure, you can add `potlimit`, `nolimit` or
two integers representing the small-bet and the big-bet in a split
limit (also known as fixed limit) structure.

```
> *mb2* p game holdem 5 10
<mb2:#poker> Game changed to 5 10 Hold 'em by deadhead
```
There are no commands to change the size of the blinds.  The small
blind will be one half of the small bet and the big blind will be the
same size as the small bet.  There are no commands to change the
number of starting chips. You'll get 15,000.

If you want to try the MONTE structure, you'd use `p tournament monte`
MONTE uses 20 minute rounds.  If you'd like to use 2 minute rounds, use
`p speed 10` to play the tournament ten times faster (i.e. the duration
is one tenth normal).

### In Game Commands

When you're in a game, the commands are:

```
p status
p cards
p quit
p vacation
p back
p time
p muck
p reveal
p conceal
p default reveal
p default conceal
p discard cards
p discard none
p undo [action | reveal | discard]
p fold
p check
p jam
p make amount
p call [amount]
p bet [amount | pot | half]
p raise [amount | pot | half]
```

Use `p time` if you need more time to think.  You'll get an extra minute.  There
are currently no limits to how often you can use the time command.

#### What to reveal at showdown

By default, you will only show your cards at the showdown if you have
to.  If there are no all-ins and someone else shows first and you're
beat, you won't be required to show your cards.  You can change that
default by using `p default reveal` in which case any time you make it
to the showdown you'll reveal your cards (which might be helpful if
you're teaching someone the game).  If you want your default to be
back to what it started at `p default conceal` will take it back.

You can override your default revelation strategy for the current
hand, by using `p reveal` or `p conceal`.  That's a one-time change
and after the showdown your default will stay what it was before that
override.  You can also use `p muck` which will cause you to throw
away your hand, _even if it's a winner_.

#### Discards, drawing and undoing

You can use `p discard ac 2d` tell mb2 that when it's your turn to
discard and draw new cards you want to discard your ace of clubs and
your two of diamonds or `p discard none` to stand pat.

If you type an action command before it is your time to act, that
command will be remembered and used instantly when it is your time to
act.  If you realize you don't want that command to be applied, you
can use `p undo` to clear all your advance commands or more narrowly
`p undo action`, `p undo reveal` or `p undo discard` to just undo that
aspect of your advance requests.

#### `p make`

If you use `p raise 2000` as an advanced action, you will bet or raise
2000, if that's an acceptable raise, when it is your turn to ask, so
if it's checked to you, you'll make it 2000, but if someone bets 1,000
and then someone else raises 2,000, then you'll raise 2,000 and the
total bet will be 5,000.  If your desire is to raise however much is
required to make the total bet 2,000, you can uses `p make 2000`.

## IRC clients

It's been so long, I had to poke around and find an IRC client that I
could make work on my development machine, a Macintosh. I chose
[ircII](http://www.eterna.com.au/ircii/), which I installed using
[Homebrew](https://brew.sh/) (which I already had installed).  IrcII
is also available for Linux.


Although I do almost all my testing on my inaccessible-to-the-public
development machine, I put up a publicly available IRC server on
devctm.com (port 6667) and have mb2 running over there, too.  When I want
to use that machine, I start ircII via:

`$ IRCSERVER=devctm.com irc`

I know absolutely nothing about running an IRC server.  In multibot's
time, someone else ran the IRC server.  I'm a horrible sysadmin and I
had to disable various flooding heuristics for mb2 to work.  Please
don't abuse the IRC server on devctm.com (or _anyone's_ IRC server for
that matter).  I'm sure someone will find it eventually and cause me
to have pay more attention, but as you may have guessed, I dislike
distractions and would much rather spend my time getting the minimal
feature set built as well as lining up some investment so I can cook
up some graphical front-ends and turn mb2 into a nice platform for
social poker.

Whee!

## `.ircrc`

I typically make aliases to save on typing.  My `.ircrc` contains:
```
join #poker
alias p msg mb2 p
alias f p fold
alias j p jam
alias miss p game mississippi_stud
alias c p call
alias chow p game chowaha
alias pot p raise pot
alias b p back
alias s p status
alias q p quit
alias t p time
alias m p make
alias tdd p game triple_draw_dramaha
alias razz p game razz
alias monte p tournament monte
alias stud p game stud
alias d27td p game deuce_to_seven_triple_draw
alias arch p game archie
alias kore p game korean
alias duck p game duck_flush
```

## History

Initially this document contained more background and history of mb2,
but it was too wordy, so I took it out.  I haven't rewritten the git
history though, so it's still
[there](https://github.com/ctm/mb2-doc/commits/master) if you want to
poke around.