# Vacation

## Turn Based 
Poker is turn-based. All poker games have at least one round of
betting where players with uncommitted chips must act, e.g., fold,
call, bet or raise.  Some poker games also have rounds where cards are
"manipulated" (for want of a better term), e.g. discarded or exchanged
for new cards.

Although action and manipulation is done in a specific order, in most
cases the user interface allows a player to tell the server how that
player wants to act or manipulate in advance. When it is a players
turn to act or manipulate, if that player has a valid advanced request
pending, it is used.


## Being Put On Vacation
If it is a player's turn and that player doesn't have an advanced request,
a timer is started and that player must do whatever is required for
that turn before the timer runs out our that payer is put on vacation.

If a player is put on vacation when it is a player's time to act, that
player will check if checking is an option. If checking is not an option,
that player will fold.

If a player is put on vacation when it is a player's time to manipulate
the player's cards, the minimal manipulation possible will be done.  For
example, if a player has the option of standing pat (i.e. not discarding
or exchanging any cards), that' what the player will do.  However, if a
player must discard a card, the server will choose a card to discard.

### How the Server Decides Which Cards to Manipulate

If the server has to choose a card for manipulation, it will not take
the rank or suit or other cards into consideration. In other words,
the server will not try to make a good choice for you, nor will it try
to make a bad choice for you.

## A Vacationed Player May Win a Hand

It is possible for a player to win a hand on vacation, but only if the
player starts the hand not on vacation.  The act of being put on
vacation doesn't fold a player, so if a player is put on vacation and
can check for the rest of the hand, that player's hand will still be
live at the showdown.


## Starting On Vacation

If, however, a player starts a hand on vacation, that player's hand will
be folded before showdown.

## No Show

In a tournament, if a player goes on vacation before acting or
manipulating, that player is considered a no-show until that player
does act or manipulate.  While a player is considered a no-show, the
player's hand will be folded before the first round of action or
manipulation.
