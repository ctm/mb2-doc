# Mb2

Mb2 is a poker server. Eventually it will have slick skinnable clients
for a variety of platforms, but it's being developed from the inside
out, so although it has excellent game mechanics, its UI is currently
bordering on unusable. It can, however, be used either via IRC (primarily
for nostalgia) or a web interface.

Please be aware that all of the pain points documented herein will be
addressed.


### Closed source

Mb2 is closed source, because it's hard to put toothpaste back in the
tube.  I'm monetizing mb2 and some of the ways I might be able do so
successfully require mb2 remaining closed.  I am also investigating
ways in which I can make the source open, but it's trivial to go from
closed to open and impossible to do the reverse.

### Public documentation

The GitHub repository that hosts this document exists primarily as a
place for me to publicly [track
issues](https://github.com/ctm/mb2-doc/issues) as friends and family
use mb2.  Secondarily, it has a little more documentation than is
provided by the help commands from the clients.

## IRC or Web (two amazingly bad text-only clients)

Mb2 can only be accessed via IRC or a text-only web interface that's
amazingly painful to use.  That will change fairly soon after the long
Thanksgiving weekend as I add UI elements to the web interface.
However, I'm not a visual person, so after we have all the
infrastructure in place, we'll bring in professionals to make the
graphical interfaces elegant.

The only public IRC server that has mb2 attached to it is `devctm.com`
on port 6667 with no encryption.  The web interface is at
http://devctm.com:8080

IRC support came first for historical reasons. However, my knowledge
of IRC borders on non-existent.  I've found that using the
[ircII](https://en.wikipedia.org/wiki/IrcII) client, the public and
private messages mb2 sends are integrated into a single window, which
is how I envision it working.  Other irc clients, at least with their
default configuration, put private and public messages in separate
windows and that is frustrating.  As such, the text-only web interface
is the logical choice for most people, especially since it will only
get better with time.

### No database keeping score

Mb2 is playable, in that if you connect to `devctm.com` and join the
`#poker` channel you can set up a tournament, join and (assuming there
are at least two players) start it.

Currently, everything is ephemeral; mb2 does not currently use
persistent storage.  So, if you play a tournament the results are not
yet saved for posterity.

The web interface requires you to supply a password, but that password
is only kept in memory, so anytime the server is restarted, all
passwords are forgotten.

### No encryption, use a throw-away password, please

Neither the IRC interface nor the web interface are using encryption,
so not only should you use a throwaway account, it's conceivable that
someone could even observe your face-down cards.  Encryption will be
mandatory before "too long", but it's a much lower priority than most
of the other issues that still remain.

### IRC example

```
/join #poker
/alias p msg mb2 p
/p tournament tesla
/p speed 10
/p join
/p start
```
The reason IRC requires a leading "p " is because anything that
doesn't have that prefix is considered a public message to the other
people on that IRC channel.  The web interface has a separate input
box for chat, so not only is there no need to add the "p " prefix,
doing so is an error.

### Web example
```
tournament tesla
speed 10
join
start
```

## Desired Minimal Functionality

I'd like mb2 to be able to deal close analogs to all the [BARGE 2019
tournaments](https://irp-cdn.multiscreensite.com/7fa840da/files/uploaded/2019_BARGE_structures%20v2.pdf) as well as the EMBARGO 2020 tournaments.

Albeit with a few nits, mb2 already deals all the games in the [BARGE
2019 Rule Book](http://www.ceemeck.org/BARGERuleBook2019/).

###### The seven missing games

Oops.  There are no missing games.  The heading still says "The seven
missing games", because I foolishly made a link to this section
without thinking about how quickly I could implement the (then seven)
remaining games.

So, although they haven't been tested much, mb2 supports all of the games in
the BARGE 2019 Rule Book.

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



## Missing Features

Here are the big non-UI things that are missing:

### [Multi-tables](https://github.com/ctm/mb2-doc/issues/10)

Mb2 internally supports multi-table tournaments, but I haven't written
the code that balances and breaks tables down.  I have some questions
about exactly what algorithms I should use, but I don't want to be
distracted by thinking about that until I finish my horrible text-only
web client.

### Most tourneys

Only a handful of tournament structures are implemented.  Others will
be available "soon".  `tournament` without an argument lists the
tournament structures that are available.  I won't necessarily be
updating this document each time I add a new one, so this may be out
of date:

```
Tournaments: barge_nlhe, chowaha, limit_6, monte, tesla
```

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

When using IRC, all commands are preceded by the lower-case letter 'p'
and a single space.  As such, to get help, type `p help`.  For the
web interface, adding the leading "p " is an error.

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
> *mb2* p game holdem 5 10
<mb2:#poker> Game changed to 5 10 Hold 'em by deadhead
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

When you're in a game, the commands are:

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
```

Use `time` if you need more time to think.  You'll get an extra minute.  There
are currently no limits to how often you can use the time command.

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

I know absolutely nothing about running an IRC server.  I'm a horrible
sysadmin and I had to disable various flooding heuristics for mb2 to
work.  Please don't abuse the IRC server on devctm.com (or _anyone's_
IRC server for that matter).

## Aliases

### IRC

On IRC, I use aliases to avoid typing.  My `.ircrc` contains:
```
join #poker

alias p msg mb2 p

alias b p back
alias c p call
alias d p discard
alias f p fold
alias j p jam
alias m p make
alias r p raise
alias s p status
alias t p time
alias q p quit

alias pat p discard none
alias pot p raise pot

alias miss p game mississippi_stud
alias chow p game chowaha
alias tdd p game triple_draw_dramaha
alias razz p game razz
alias stud p game stud
alias d27td p game deuce_to_seven_triple_draw
alias arch p game archie
alias kore p game korean
alias duck p game duck_flush

alias monte p tournament monte
alias tesla p tournament tesla
```

### Abbreviations in the web interface

All the one letter aliases as well as "pat" and "pot" are now
recognized directly by `mb2`, so if you want to raise the default
amount, all you need to do is type `r` and a carriage return.  If you
want to raise 500, `r 500` will suffice.

## Sunday Playtesting

mb2 runs 24x7, but I am not yet paying attention to what goes on there
(nor do I have a crash monitor installed). The exception is Sundays at
1pm Pacific.  For the next several weeks, I'll be there for a minimum
of one hour and perhaps several, depending on interest.

If you want to help out by play-testing, but can't make Sunday
afternoon, you can do so on your own, it's just that you need at least
two participants.  So, either dragoon a friend or relative into
playing or fire up two windows and drive both of them yourself.

Until I add the table balancing and table breakdown code, tourneys
will be limited to single tables, although multiple tourneys can run
concurrently.  I expect mb2 will be dealing multi-table tourneys
"soon", but it has slipped due to my work on the web front-end.
