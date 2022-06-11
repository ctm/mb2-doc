# WSOP-Style 2022

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

As the series progresses, I am likely to update this page.

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

## No Physical Prizes

Mb2 knows which tournaments belong to this series and [a "WSOPS 2022"
entry will be added to the leaderboard
menu](https://github.com/ctm/mb2-doc/issues/973).

Craft Poker Co. will not be able to provide prizes to the winners. I
haven't yet sent anything to the winners of WYWAE (Wish You Were At
EMBARGO), but that will change. The company that I used to order
trophies from no longer has their [poker chip
trophy](https://www.trophies2go.com/crystal-chip-poker-award.html).
So, my plan is to query the BARGE organizers about their source of
trophies, and once I know the price, get something to the WYWAE
winners. If I can also swing something for at least some of the top
participants in WSOPS, I'll do so, but I would prefer the players to
assume they'll get nothing physical and be pleasantly surprised if
that changes.

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
