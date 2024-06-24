# Top Line

The upper left portion of a table consists of a row of icons that can be
clicked on. Most of them make temporary changes to the appearance of
your table. They all have associated tooltips that tell you what they'll
do if you click them.

### Players Manual

Like in the lobby, the left-most icon is a circled i.  If you click
that icon, this Players' Manual is opened in a new tab or window.

### Table View

The next icon switches between
* diagonal arrows pointing outward (at the top of the window)
* diagonal arrows pointing inward (at the bottom of the window)
* a landscape picture of mountains (at the bottom of the window)

This icon is telling you what Will happen if you click it. If you're in the Table
view, you'll switch to the Text view.  If you're in the Text view and you
click it, you'll switch into the Compact Text view.

The text views are unsupported and undocumented. If you prefer to use
them, please let Cliff (aka deadhead) know what causes your preference
so that he can improve the graphical view to the point that you'll
prefer that to the text view.

### Rotation

If you click the curved arrow, the table will be rotated clockwise,
unless you have the shift key held down when you click it. If you have
the shift key held down and you click the curved arrow, the table will
rotate counter-clockwise.

### Audio

You can click on the bell icon to adjust whether or not certain sounds
are played at this table. You have more control of which sounds are
played in the [Preferences dialog](../lobby/preferences.html)
available from the Lobby.

### Game Notification

The circled exclamation point is similar to the bell, but it changes
which game and/or level notifications you get.

### Deck Color

The paint bucket allows you to change whether to use a normal two-color
(diamonds and hearts are red, clubs and spades are black) deck or a
four-color deck (clubs are green, diamonds are blue, hearts are red and
spades are black).

If you hold the shift key down when you click on the paint bucket, you
change the color of the back of the cards.

### Messages to Display

Clicking on the "quotation box" icon allows you to adjust what messages show
up in your chat-box (or chat-window if you Pop-out your chat).

### Number of Observers

Clicking on the star icon allows you to see how many people are
watching your table and how many non-players are watching you in
specific. People who are logged in can watch your table by clicking on
the table number in the lobby.  When you're playing, [your URL is
shareable](./shareable-urls.md). If you share your URL and someone
follows that link, that person is watching _you_ play, meaning if you
get sent to another table, they will automatically be switched to
watching that table, too.

After you click on the star, you get something that looks like `T: 0,
P: 0` where the number after the `T:` is the number of people watching
your table and the number after the `P:` is the number of people
watching you, the player.

Observers are only counted while they have a table window open.  So if
you share your URL with ten people and three of them start watching at
the same time, you'll get `P: 3`, which will increase if anyone else
follows that link before any of the original three close their window.

Although it hasn't been properly load-tested yet, mb2 is designed to
support tens of thousands and eventually hundreds of players and/or
observers efficiently.  During pre-alpha testing it is unlikely that
we'll overload the server, although it could happen if someone with a
huge social network shares a URL.  If that happens, I'll make
load-testing and bandwidth limiting an exceedingly high priority.
Otherwise, I'll try to get it done before it's needed.

### _Optional_ Scroll to the Bottom

When there are too many lines to display in the chat-box or
chat-window, a scroll-bar is presented. If you scroll backward, a
down-arrow appears.  The down-arrow is black when it's not your turn
to act and red when it is.  If you click on the down-arrow it
immediately scrolls forward so that the bottom (most recent) message
is visible.

### _Optional_ Hands Remaining

Which games are played in a tournament are determined by the
tournament's [structure](../tournaments/structures.md).

Some
tournament structures only have a single game in them (e.g. a No-Limit
Hold'em tournament). Others are mixes, like **HORSE** (**H**old'em,
**O**maha, **R**azz, **S**tud, Stud/**E**ight).

However, tournament structures have two different ways to determine when
to change game
* by a count (**HORSE** is by count)
* by level (TOC-style is by level)

If you are playing on a table where the game is going to change via a
count, the last button on the top-line can tell you how many times
more the current game will be played after the current hand completes.
If you don't want to see that that information (perhaps you're teaching
yourself how to count to six), you can click it and the button will
remain, but the number won't be shown.
