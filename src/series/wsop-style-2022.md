# WSOP-Style 2022

## June 13th Update

Physical prizes will be awarded to the winner of each of the tourneys
(retroactively to the beginning of the series start). The prize will
be an [Engraved Rectangular Glass
Paperweight](https://www.trophies2go.com/engraved-rettangolo-glass-paperweight.html)
unless they run out or other unforeseen circumstances intervene.

There will _probably_ also be nicer prizes for the top three
leaderboard at the end of the series.

## Overview

The WSOP-Style 2022 Series consists of a tournament a day from
Saturday, June 11th through Sunday, June 3rd, 2002.  Each tournament starts
at 3pm Pacific time (6pm Eastern).

Currently, there is [no late
entry](https://github.com/ctm/mb2-doc/issues/183) and none of the
tournaments support rebuys[^1]. Either limitation _may_ be removed
during the series, depending on how much time I can devote to
technical issues.  For now, I'm preoccupied with the business side
of Craft Poker Co.

This series is open to the public.  Tell others.  Although there's
still a lot of room for improvement, the user interface should be
usable by anyone who already has some online or cardroom poker
experience .

## This page is likely to be updated

As the series progresses, I am likely to update this page.  My changes
should only make things better, not worse, but if you're curious about
exact changes, [the changes to this page are available on
GitHub](https://github.com/ctm/mb2-doc/commits/master/src/series/wsop-style-2022.md).

## Tournament Length

Each of the WSOPS tournaments starts with the same five minute round
duration parameter that is used for mb2's evening and night
tournament.  With a dozen players the evening and night tournaments
have typically finished in an hour and a half.

I'm [adding the ability to put a soft two-hour
limit](https://github.com/ctm/mb2-doc/issues/969) on the tournaments.
It works by looking at the number of players that are signed up when
the tournament starts, estimating how long it will take to finish with
five minute rounds and if that estimate is over two hours, it makes
the rounds shorter so that the estimate is two hours.  As such, even
if this series grows larger than the evening and nightly tournaments,
the overall tournament duration for the winner shouldn't ever be much
more than two hours.

## Prize for first place

Craft Poker Co. will provide a physical prize to the winner of each
tournament in the series. The prize will be an [Engraved Rectangular
Glass
Paperweight](https://www.trophies2go.com/engraved-rettangolo-glass-paperweight.html)
unless they run out or other unforseen circumstances.

## Leaderboard

Mb2 knows which tournaments belong to this series and there is a
"WSOPS Leaderboard" available from the lobby. Craft Poker Co. will
_probably_ have nicer prices for the top three leaderboard winners at
the end of the series, but nothing has been finalized.

The leaderboard tracks [Fun Money](../fun_money.md).  Each of the tournaments
has an FM 200 buy-in and Fun Money is awarded using the [BARGE Unified Payout
Schedule](../barge/payouts.md).

## Synchronized Breaks

Each tournament will be run with synchronized breaks, meaning when the time
of day is fifty-five minutes past the hour, at the end of the hand the table
will pause. Once all tables are paused, there will be a five minute break
after which all the tables will resume simultaneously.

## Compromise antes in mixed games

Currently, mb2 supports per-level antes, but does not support
per-game-within-a-level antes.  With this limitation, the eight game
mix, nine game mix and Poker Players Championship structures will need
to have a single ante value per round.  I'm hoping to be able to
[remove this restriction](https://github.com/ctm/mb2-doc/issues/189)
before June 22nd, which is when the first of those three structures
(the eight game mix) is to be dealt.

## Scheduled Tournaments

|Date|Event|
|--|--|
|June, 11th|[6-handed Limit Hold 'em](https://www.wsop.com/pdfs/structuresheets/structure_4943_20323.pdf)|
|June, 12th|[NLHE Deep Stack](https://www.wsop.com/pdfs/structuresheets/structure_4943_20325.pdf)|
|June, 13th|[No Limit 2-7 Lowball](https://www.wsop.com/pdfs/structuresheets/structure_4943_20329.pdf)|
|June, 14th|[PLO 8-handed](https://www.wsop.com/pdfs/structuresheets/structure_4943_20330.pdf)|
|June, 15th|[HORSE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20332.pdf)|
|June, 16th|[Stud High/Low 8 or better](https://www.wsop.com/pdfs/structuresheets/structure_4943_20336.pdf)|
|June, 17th|[NLHE (Millionaire Maker)](https://www.wsop.com/pdfs/structuresheets/structure_4943_20337.pdf)|
|June, 18th|[6-handed PLO](https://www.wsop.com/pdfs/structuresheets/structure_4943_20339.pdf)|
|June, 19th|[Super Turbo Bounty NLHE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20341.pdf)|
|June, 20th|[NLHE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20343.pdf)|
|June, 21st|[PLO 8-handed](https://www.wsop.com/pdfs/structuresheets/structure_4943_20345.pdf)|
|June, 22nd|[6-handed 8-Game Mix](https://www.wsop.com/pdfs/structuresheets/structure_4943_20348.pdf)|
|June, 23th|[NLHE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20349.pdf)|
|June, 24th|[6-handed 9-Game Mix](https://www.wsop.com/pdfs/structuresheets/structure_4943_20352.pdf)|
|June, 25th|[8-handed Mixed NLHE-PLO](https://www.wsop.com/pdfs/structuresheets/structure_4943_20353.pdf)|
|June, 26th|[Poker Players Championship](https://www.wsop.com/pdfs/structuresheets/structure_4943_20356.pdf)|
|June, 27th|[Deepstack Championship](https://www.wsop.com/pdfs/structuresheets/structure_4943_20357.pdf)|
|June, 28th|[Short Deck NLHE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20360.pdf)|
|June, 29th|[PLO/8 Championship](https://www.wsop.com/pdfs/structuresheets/structure_4943_20363.pdf)|
|June, 30th|[PLO Deep Stack](https://www.wsop.com/pdfs/structuresheets/structure_4943_20364.pdf)|
|July 1st|[Super Turbo Bounty NLHE](https://www.wsop.com/pdfs/structuresheets/structure_4943_20367.pdf)|
|July 2nd|[8-handed PLO Championship](https://www.wsop.com/pdfs/structuresheets/structure_4943_20369.pdf)|
|Jul 3rd|[Main Event](https://www.wsop.com/pdfs/structuresheets/structure_4943_20370.pdf)|

[^1]: Although mb2 has minimal rebuy support, three issues preclude its use in this series:
 1. [lack of proper announcements](https://github.com/ctm/mb2-doc/issues/703)
 2. [no tracking of rebuys in the database](https://github.com/ctm/mb2-doc/issues/662)
 3. [the lobby not showing rebuy info](https://github.com/ctm/mb2-doc/issues/203)
