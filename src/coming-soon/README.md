# Coming "Soon"

These are some of the features that Mb2 is likely to support "soon", where
the definition of soon depends on what resources can be used for development.
At minimum, I have researched each feature and believe that each feature could
be in a proof-of-concept alpha state with two weeks of me working full-time on
that feature.

Most likely either a strategic investor or a potential customer will
dictate the priority for each feature.  In the absence of such an
external prioritization, native apps and ring games will get what
little development time I can spare.

At any given time, you can see what I'm working on by looking at the
[list of high priority
isses](https://github.com/ctm/mb2-doc/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22high%20priority%22)
and see what I'm planning on working on by looking at the [list of
medium priority
issues](https://github.com/ctm/mb2-doc/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22medium%20priority%22). In addition to those two labels,
some features have their own labels, which are included in the table below.

I update issues multiple times a day. I only update this page when I
think about it, which means it's likely to be weeks if not months out
of date.
<br/>
<br/>
|Started|Feature|Label|
|:---:|---|---|
|✅|Native apps|[Tauri](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3ATauri)|
|✅|Ring games|[ring games](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3A%22ring%20games%22)|
|✅|Teaching|[teaching](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3Ateaching)|
|✅|WSOPS compatibility and structures|[WSOPS](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3AWSOPS)|
|✅|Customization||
|✅|More games||
|✅|Membership||
|✅|Statistics / Alternate scoring systems||
|✅|White-labeled sites||
|❌|Impossible to rig deck||
|❌|The server running on a phone or tablet||
|❌|QR-code based pick-up games||

### Native apps

The first native Mb2 apps will be made using
[Tauri](https://v2.tauri.app/), a framework that works well with the
existing mb2 codebase.  The macOS and Windows proof-of-concept
versions work well enough that I use one or the other to play daily.
The iOS and Android versions need me to integrate "Single Page
Application" functionality before they can be playable.  All the Tauri
versions will need more responsive WebSocket support.

Most of what needs to be done to release native apps is work that is in
my wheelhouse, but there's a lot to do.

### Ring games

Internally, Mb2 already has quite a bit of support for ring games.  Some
of what is lacking is simply functionality related to players joining,
changing seats, missing blinds, etc.  Those will be easier for me to implement
once I can block out some time with someone who knows the ins-and-outs.

All else equal, I'd prefer to work on ring games in one large block of
time, since it will take me a while to get up to speed on what needs
to be done and since I'll also want to bring in testers ASAP and be
able to respond to each bug or suggestion immediately.  As such, barring
investor or customer boosting, I'll won't work on ring games until after
I'm playing daily&mdash;and enjoying the experience&mdash;using my iPhone
(i.e., after Native apps are further along).

### Customization 

It should be possible for anyone to easily "skin" mb2, and give it a custom
look-and-feel.  It should be possible to share skins either through the server
or "behind the server's back", where the customization only happens on the
client side.  Client-side only customization is a privacy feature.

I have been experimenting with client-side customization and have
exposed primitive functionality that people can use today to customize
the [dealer button](../tables/customizable-buttons.md), the
[background](../tables/customizable-backgrounds.md) and the
[styles](../tables/customizable-styles.md) of a table. Eventually, rather
than customizing each of those aspects individually, it'll be possible
to create a single "asset pack" that customizes those aspects and more
(e.g., a custom deck).

I would prefer to work on further customization when I can pay a
contractor to work with me.  I have both concrete and abstract ideas
of how to proceed.

### Teaching

Craft Poker Co. has a client who commissioned some modifications to
help them to teach poker to their new traders.  The two major abilities
added were:

* [pausing a
game](https://github.com/ctm/mb2-doc/issues/1563) at the end of a hand
so that the teacher and students can discuss the hand.
* allowing the teacher to [reveal hole cards](https://github.com/ctm/mb2-doc/issues/1566) at the end of the hand

In the absence of teaching-specific funding, adding additional
teaching funcitonality will be relatively low priority.

### WSOPS compatibility and structures

Each year, starting in 2022, craftpoker.com has hosted a series of WSOP-Style
tournaments, where the games and structures are patterned after actual World
Series of Poker events that are being held on the same day.

TODO: mention the WSOP-Style series, some differences between what we've
done and the actual WSOP as well as structure representation and a structure
editor

### More games

TODO: Mention that Mb2 is not a poker-engine, but it's not _too far_ removed
from one.  Use Crayfish poker as an example of a new game that was added
in less than two deadhead days.

### Membership

TODO: Mention that membership exists, but has no Admin UI. Also mention a
few bugs

### Statistics / Alternate scoring systems

### White-labeled sites

### Impossible to rig deck

TODO: write something better than the following:

The idea is that each client has a way to send an encrypted value to be used in the generation of a random number for any next event that requires randomness. Everyone in the hand sends the encrypted values, then--once they're all received--all the encrypted values are sent back to everyone in the hand, then everyone sends their key. The server uses the keys to retrieve all the values and uses all the values--and only all the values--to generate the number that is used. After the hand is over, all the keys are sent to everyone who sent values. This allows people to verify that everyone's values were used. This is a hand-wavy presentation (and also leaves out that the server is considered being in the hand and generates a value that is used and is encrypted with the encrypted version sent to everyone else)

### The server running on a phone or tablet

### QR-code based pick-up games


