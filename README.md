# Mb2

Mb2 is a poker server I'm writing.  It knows how to deal various poker
games, keeping track of chips, cards, winning hands, etc.

Mb2 is vaguely a successor to multibot (born October 31st, 1998),
which was the first software to deal multi-table poker tournaments on
the internet.  I also wrote multibot, but mb2 has a much better
architecture and does not contain any of the multibot source code,
which I haven't had access to in well over a decade.

I wrote multibot for many reasons, but one was that I wanted to learn
more Objective-C, a language whose basics I learned when I ported my
Macintosh emulator from the Sun computers to NeXT computers.  For the
last few years I've been eyeing Rust as a language to learn and after
writing a few toy Rust programs here and there I started on mb2 in mid
April, 2019.

### Closed source :-(

Mb2 is currently closed source.  It's hard to put toothpaste back in
the tube.  I am trying to monetize mb2 and some of the ways I might be
able do so require mb2 remaining closed.  Personally, I'd prefer to
open the source, but I have a wife and kids.  Ironically, my kids were
all born via in-vitro fertilization that I paid for with proceeds from
selling multibot.

### Public documentation

This repository exists primarily as a place for me to publicly track
issues as friends and family play around with mb2.  Secondarily, it
has a little more documentation than is provided by `p help`.


## IRC

Mb2 currently can only be accessed via IRC, although internally there's
fewer than 100 lines of IRC specific code.  As of October 14th, [tokei](https://github.com/XAMPPRocky/tokei) lists:
```
-------------------------------------------------------------------------------
 Dockerfile              1           19           13            0            6
 Rust                   51        12479        10438          765         1276
 TOML                    1           19           17            0            2
-------------------------------------------------------------------------------
 Total                  53        12517        10468          765         1284
------------------------------------------------------------------------------
```
I plan on adding several other interfaces, but only after a minimal
set of features of mb2 have been completed.  The only public IRC
server that has mb2 attached to it is `devctm.com`.

### Not ready for testing, per-se

Mb2 is demonstrable, in that if you connect to devctm.com and look in
the `#poker` channel or one of the `#table-N` channels, you may see
activity.  Be aware: everything is ephemeral; mb2 does not currently store
any info in persistent storage, so if you play a tournament and win or lose
(or quit), nothing will yet be saved for posterity.  There are no passwords
and thus nothing in place to prevent nick stealing.

In fact, mb2 is not really at a state where I would even bother making
this GitHub repository public, except ... the [Albuquerque
International Balloon Fiesta](https://balloonfiesta.com/) has begun
and I'm going to spend October 5th through 13th crewing in the morning
and then working on some of the non-coding aspects of mb2 during the
day rather than simply keeping my head down and coding up remaining
features and games.

## Desired Minimal Functionality

Basically, I'd like mb2 to be able to deal close analogs to all the
[BARGE 2019
tournaments](https://irp-cdn.multiscreensite.com/7fa840da/files/uploaded/2019_BARGE_structures%20v2.pdf)
and well as deal ring games of all the games in the [BARGE
Rule Book](http://www.ceemeck.org/BARGERuleBook2019/).

## Missing Features

When I coded up multibot, I supported multi table no-limit tournaments
soon after I began.  I then added features while people were already
playing NLHE tournaments.  Having feedback from day one was both a
blessing and a curse.  It was nice to have someone using what I wrote,
but it was a distraction.

This time I sort-of succumbed to [second-system
effect](https://en.wikipedia.org/wiki/Second-system_effect), although
I don't really think that mb2 is either bloated or over-engineered.
Actually, the surface area of Rust is much larger than that of
Objective-C and so I skipped around a bit trying to work on the parts
that required me to learn more Rust, rather than simply get a minimal
viable product going.  Additionally, with Rust's strong type-system,
refactoring is straightforward and as I've learned more Rust, I've
gone back and refactored perfectly working sections of mb2 to make the
code more idiomatic and hence a stronger foundation.

The downside to how I've chosen what to work on is that I have a bunch
of half-finished features, which didn't really bother me much since I
wasn't planning on decloaking until they were fully-finished.
However, my decision to partially decloak during Balloon Fiesta was
only recently made and now the half-finished state of my features is
annoying to document and presumably even more annoying for people who
want to kick the tires.

So, here are the big things that are missing:

### Multi-tables

Mb2 internally supports multi-table tournaments, but I haven't written
the code that balances and breaks tables down.  I have some questions
about exactly what algorithms I should use, but I don't want to be
distracted by thinking about that until I finish the easier missing
features listed below.

### Discarding and Drawing

Mb2 has a discard command, but it doesn't work. Additionally, there's
error checking, so you can `p discard ac 2d` and be told that you'll
discard `Ac` and `2d` even if you don't currently hold those card and
even if you are playing a game that doesn't involve drawing. 

### Most games

Most games are not yet available, even though they could be. `p game`
without an argument will list the games that are at least partially
available.

Although I may add (perhaps partial) support for other games when I
have a small block of time (it's pretty simple), in general I'd rather
work on the above issues first. I have already written all the
evaluators, that I think I need for all the BARGE games, so, for
example, once I've implemented drawing and discarding, Duck Flush
should be implementable in less than an hour, although I haven't
actually written tests for my obscure evaluators so they might
have bugs, especially since they're for games I've exceedingly rarely
played.

### Increasing Levels

Internally mb2 has a way to represent the levels of a tournament
structure, and it even has one complete structure coded up (MONTE
2019). What's lacking is the code that actually tells the table to use
a level beyond the first level in the structure.  For the time being,
if you choose the MONTE tournament, you start out playing pot-limit
oMaha and you never stop.

### All tourneys

Since I haven't yet written the code to increase levels, I haven't
filled out the tournament structures for the other BARGE 2019
tourneys.

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

Although limits don't yet increase, if you want to try the MONTE structure,
you'd use `p tournament monte`

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

Although they don't currently do anything, you can use `p discard ac 2d`
tell mb2 that when it's your turn to discard and draw new cards you want
to discard your ace of clubs and your two of diamonds or `p discard none`
to stand pat.

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