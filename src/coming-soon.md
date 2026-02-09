# Coming "Soon"

These are features that Mb2 could support "soon". I have researched
each feature and believe that almost every one could be in a
proof-of-concept alpha state with two weeks of me working full-time on
that feature, although I don't have much time to program when I'm chasing
funding or doing other business related tasks.

I expect a strategic investor or a potential customer will dictate the
priority for each feature.  In the meantime, native apps and then ring
games will be my focus.

At any given time, you can see what I'm working on by looking at the
[list of high priority
issues](https://github.com/ctm/mb2-doc/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22high%20priority%22)
and see what I'm planning on working on by looking at the [list of
medium priority
issues](https://github.com/ctm/mb2-doc/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22medium%20priority%22). In addition to those two labels,
some features have their own labels, which are included in the table below.

I update issues on GitHub multiple times a day. I only update this page when I
think about it, which means it's often out of date.
<br/>
<br/>
|Started|Feature|Label|
|:---:|---|---|
|✅|[Native apps](#native-apps)|[Tauri](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3ATauri)|
|✅|[Ring games](#ring-games)|[ring games](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3A%22ring%20games%22)|
|✅|[Teaching](#teaching)|[teaching](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3Ateaching)|
|✅|[WSOPS compatibility and structures](#wsops-compatibility-and-structures)|[WSOPS](https://github.com/ctm/mb2-doc/issues?q=state%3Aopen%20label%3AWSOPS)|
|✅|[Customization](#customization)||
|✅|[More games](#more-games)||
|✅|[Membership](#membership)||
|✅|[Statistics / Alternate scoring systems](#statistics--alternate-scoring-systems)||
|✅|[White-labeled sites](#white-labeled-sites)||
|❌|[Structure and Series editors](#structure-and-series-editors)||
|❌|[Impossible to rig deck](#impossible-to-rig-deck)||
|❌|[QR-code based pick-up games](#qr-code-based-pick-up-games)||
|❌|[The server running on a phone or tablet](#the-server-running-on-a-phone-or-tablet)||

### Native apps

I've made&mdash;but not yet released&mdash;native Mb2 apps using
[Tauri](https://v2.tauri.app/).  The macOS and Windows
proof-of-concept versions worked well enough that I used one or the
other to play daily, until January 26th, when I switched to the iPhone
app for my daily tournaments.

Once I fix enough of the iPhone app's major pain points, I'll switch
over to an Android build and level it up, too. Once those are working
well enough for me, I'll invite others to start testing native apps.

### Ring games

Internally, Mb2 already has limited support for ring games.  Some
of what is lacking is simply functionality related to players joining,
changing seats, missing blinds, etc.  Those will be easier for me to implement
once I can block out some time with someone who knows the ins-and-outs.

I can't yet commit, but I suspect I'll have native apps working well
enough in February that I'll be able to focus on ring games starting
in March.

### Teaching

Craft Poker Co. has a client who commissioned some modifications to
help them to teach poker to their new traders.  The two major abilities
added were:

* [pausing a
game](https://github.com/ctm/mb2-doc/issues/1563) at the end of a hand
so that the teacher and students can discuss the hand.
* allowing the teacher to [reveal hole cards](https://github.com/ctm/mb2-doc/issues/1566) at the end of the hand

Additional teaching functionality can easily be added, but will not be
done speculatively.  Anyone who is interested in using Mb2 to teach poker,
is encouraged to contact me so we can work together.

### WSOPS compatibility and structures

Each year, [starting in 2022](../series/2022/wsop-style.md),
craftpoker.com has hosted a series of WSOP-Style tournaments, where
the games and structures are patterned after actual World Series of
Poker events that are being held on the same day.

When the official World Series of Poker structure sheets are released
for 2026, I'll generate structures and the WSOP-Style series.  Each
year I have created tools or systems to allow me to do this quicker.

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

### More games

Mb2 is not a poker-engine, but it's not _too far_ removed from one. In
other words, although mb2 doesn't allow other programmers to create
new poker games, doing so isn't particularly hard for anyone with
access to the mb2 source code (which is currently just myself).  As an
example, adding the Crayfish variant [took two days of
work](https://github.com/ctm/mb2-doc/issues/1687#issuecomment-3639517293),
neither of which were particularly close to full time.

Although there are no specific games I plan to implement in the future,
typically I add some in anticipation of the WYWAE Series (for 2026, I
added Dramaha Zero, Dramaha 21 and Dealer's Die) and sometimes for the
WSOP-Style Series (e.g., Double Board Bomb Pot in 2024).

### Membership

Internally, mb2 has tags that can be attached to events (tournaments
and ring games) and to players.  Tags can be used to track series
standings and/or to limit the visibility of events to members with specific
tags.  There is currently no user interface for adjusting tags, instead
tags are rarely used and are created and manipulated in the database.

Adding a user interface to the current tag-based membership
functionality and expanding that functionality are both
straightforward things that I or almost any programmer can do.

### Statistics / Alternate scoring systems

Eventually, craftpoker.com will offer a premium service were people pay
a fixed amount per month (e.g., $5) and get functionality unavailable to
people playing for free. Statistics are easy to calculate and track and
are a logical part of premium membership.

Mb2 uses [Fun Money](fun_money.md) to keep score, which is honest in
that there is no buying of extra chips, and an account's surplus or
deficit is tracked for all time and other periods (i.e., year to date,
month to date, week to date, since a year ago, since a month ago and
since a week ago).  Zero sum scoring can be off-putting for someone
who plays for entertainment value.

All buy-ins and pay-outs are tracked in a database, and the
leaderboard options available are all simple reports generated via
SQL.  Adding new reports is trivial, as is adding a play rake or bad
beat jackpot.  People may be interested in simulating the drop at a
casino they're considering visiting in the future, so an even more
realistic scoring system that includes a rake may be important to them.

On the other hand, people may want the ability to reset their score
(or Fun Money) weekly or change it based on external events (e.g., get
more Fun Money for every 10,000 steps you take) or perhaps not use Fun
Money at all and have a point system.

I do not plan to work on statistics or alternate scoring systems in
the near future, but mb2 already has some rudimentary capabilities
that will be extended fairly quickly when it's appropriate.


### White-labeled sites

Craft Poker Co. currently has two instances of mb2 running, the public
one at https://craftpoker.com, and one that is leased to a financial
firm who uses it to teach their new traders how to play poker.  The
private site is currently a "one-off", in that it is updated by hand
in parallel to (but not as frequently as) craftpoker.com.

Currently, another instance or two can be brought up fairly easily,
but it is an ad hoc process.  It doesn't make sense to automate
white-labeled sites until more [customization](#customization) work
has been done, although with interest and funding, both could be done
in parallel.

### Structure and Series editors

Working alone, it would likely take more than two weeks full time work
for me to come up with an alpha version of a structure or series
editor, because it would be UI intensive work and I'm very slow when
doing UI work.  Click the triangle for additional technical details.

<details>
<summary>Structure and Series info for programmers</summary>

Currently, structure and series creation requires changing the source
code and/or manipulating the database through scripts. In fact,
although series are constructed in the database, there is not yet a
database representation of structures. Instead, each structure is a
separate Rust module.  Doing it this way is very flexible, because it
allows refactoring the representation of a structure to support new
features.

At some point, it makes sense to come up with an SQL representation of
structures and then turn each of the over three hundred sixty
structures into the appropriate database rows. That can, IMO, be
easily done with less than two weeks of me working full time on it,
because there's no UI component. However, I don't think there's
anything to be gained in codifying a db representation of a structure
until there's someone to work on an actual structure editor.

</details>


### Impossible to rig deck

People are good at seeing patterns, unfortunately that includes
patterns that aren't actually there.  Confirmation bias is a thing and
that means that online poker always looks rigged.  Online poker deals
more hands per hour than are dealt in a casino or home game with
physical cards. Consequently improbable things happen more often in
online poker than in manual poker and players' minds will come up with
an explanation for why the various improbable things are happening (e.g.,
the site has a bias toward newbies, to let them win more and hook them).
Additionally, it's obvious that a site _could be_ rigged even if it
isn't actually rigged.  An "impossible to rig deck" can mathematically
show that certain types of rigging aren't being done.

Here's a hand-wavy description:

> Each client has a way to send an encrypted value to be used in the
generation of a random number for any next event that requires
randomness. At that time, everyone in the hand sends their encrypted
values. Once they're all received, all the encrypted values are sent
back to everyone in the hand. After everyone receives the encrypted
values, everyone sends their key to the server which then uses the
keys to recover all the values. It then puts those values into a
pre-defined algorithm that yields a random number given set of values.
The random number is then used.  After the hand is over, all the keys
are sent to everyone who sent values. This allows people to verify
that everyone's values were used in exactly the way that was defined
before the start of the hand.

That's the complicated version where it's clear that everyone's
client participated in the random number choice in a way that can't
favor anyone. A less complicated manner is to simply encrypt the seed
to the hash routine and to send that encrypted message to all the
clients, then send the encryption key after the end of the hand.  The
biggest drawback is that since the provenance of the seed isn't known,
there's no guarantee that the bot isn't sending better (or worse)
starting cards to specific players.  A lesser drawback is that if
anyone can figure out the key, then the deck is effectively
transparent. The more complicated version, above, has multiple keys,
each of which could conceivably be generated in a different manner,
and to see through the deck, someone would need to recover each of the
keys.

Although I've done no coding of the Impossible to rig deck,
implementing the "happy path" is easy.  Dealing with edge cases,
is not something I've thought much about, nor will I until there's a
reason to.

### QR-code based pick-up games

Once the user interface is pleasant to use on mobile devices, especially
after ring games are working well, it makes sense to add an easy way to
create ad hoc tournaments and games, e.g., by displaying a QR code that
can be scanned to join an event.

This is trivial to implement but won't be particularly useful until the
whole user experience is a fun one.

### The server running on a phone or tablet

Although I haven't written any of the relevant code, my research into
[native apps](#native-apps) makes me think it's very likely that
putting the poker server into an app that runs on a phone or tablet is
fairly easy to do. 

I have no plans for doing this soon and perhaps might never want to do
it, but it could be worthwhile from a privacy standpoint. So, if
there is a privacy-conscious potential investor or potential customer
who is interested in this feature, let me know.

