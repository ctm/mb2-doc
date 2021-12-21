# Lobby

After you sign in, you'll be in the lobby, where you can see the active
tables, a list of upcoming tournaments and recent chat.

![Lobby](./lobby.png "Lobby")


The [top line](./lobby/top_line.html) in the lobby starts with the
nickname you've logged in as. After that are four icons.  You may have
more than one nickname, but please don't use multiple nicknames to
mislead, collude or dump chips.

The second line lists the others logged in.

If any tables are active, each gets a row with the table id and a list
of the players at that table.  The table id itself is a link.  If you
click on it, you'll get a new window that allows you to observe that table.

Any upcoming tournaments that you're allowed to join are listed below.
To join, click the check-box.  If you change your mind before
the tournament starts, click the check-box again and your buy-in will
be refunded and you won't be in the tournament when it starts.

When you join a tournament there may be esoteric options that you can
choose via a pull-down in the right most column.  They should be
self-explanatory.  Above that column is the little white plus sign
that brings up the tournament creation modal dialog (see below).

The column labeled `#` is the number of players currently signed up.  If
you want to see which players are signed up, bring your cursor over that
number and the entrants' nicknames will be revealed.

The starting time is in the timezone that your browser is configured
to display.  That's normally the timezone you're in, but check the
three letter timezone abbreviation to be sure.

A synopsis of the tournament structure is in the `Tournament` column.
If you bring your cursor over the synopsis, more details will drop
down.

The rest of the lobby is chat and a box for you to type your own chat.
All chat is logged, but only the chat from the last twenty-four hours
is displayed when you log in.



### Creation of a new tournament

If you click on the white plus small icon, you get the following dialog:

![Create Tournament](./create-tournament.png "Create Tournament")

The Structure attribute is a pull-down menu from one of approximately
50 pre-existing tournament structures.  Currently you can not create your
own structure, although traditionally the winner of the 5pm PDT tournament
gets to pick the following day's tournaments and may request a new
structure.

Tournaments that are created for testing or demo purposes should be
Free, since free tournaments don't affect anyone's standings.
Tournaments where people are expected to play well should probably
have a 100 buy-in if for no other reason than to make it clear that
the participants will be taking the tournament seriously.

Adding a comment is optional.  If you add a comment, it will show up
when people hover over the tournament structure in the listing of
upcoming tournaments.

Start At is in the same timezone as upcoming tournaments are displayed in.
That's whatever your browser thinks your timezone is.  The first time
you bring up the "Add a Tournament" dialog, "Start At" is pre-populated
with a value that is ten minutes into the future.  However, after that,
the dialog simply remembers whatever value was in that field previously.

Round Duration (Minutes) is in essence a scaling factor.  In most
tournaments, all rounds are the same length.  When create a new tournament
and specify the round duration, what you're _really_ doing is saying how
long you want the first round to be.  If any rounds have a different duration
from the duration of the first round, they'll be scaled.

So, if there's a structure where the odd numbered rounds are 20 minutes
and the even numbered rounds are 30 minutes, if you specify Round
Duration as 5 minutes, then you'll have a tournament where the odd
numbered rounds are 5 minutes and the even ones are 7.5 minutes.

The TOC (Tournament of Champions) style format has a 15 minute Hold'em
first round, an 18 minute Stud second round and a 22 minute Omaha/8
third round.  So, if "Round Duration (Minutes)" is set to 5, then the
second round will be 6 minutes and the third round will be seven
minutes, twenty seconds long.

For a dozen or so players, five minute rounds for most structures results
in a tournament that finishes in about an hour and a half.

Seconds to Act is how much time a player gets to act before being sent
to vacation.  No, 999 is not a reasonable number of "Seconds to Act".
Typically we use 45 there and that's the default when this dialog comes
up.

A player may call time to get more time to act.  There currently is no
limit on how many times a player can call time.  Calling time resets
the number of seconds to act (it does _not_ add to the number of
seconds to act).  So, if "Seconds to Act after calling Time" is set to
60, calling time will mean that the player must act within 60 seconds
regardless of how much time to act the player had remaining.

Schedules have breaks built into them, and like Round Duration, they
scale based on the same ration of the "Round Duration (Minutes)"
setting to the duration of the first level in the structure.  That can
result in breaks that would be too short were it not for the "Minimum
Break Duration in Minutes" setting.  However, the duration of a break
is like the duration of a round in that it can start in the middle of
a hand. The players who are still in the hand still need to finish the
hand.
