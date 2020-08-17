# Lammers

Some of the tournament structures (typically limited to big-bet)
include lammers in addition to starting chips.  Each lammer is worth a
fixed amount and can be used in four different ways:

### Redemption Before the First Hand

If you want to redeem any of your lammers before the first hand, you
must use the "extra options" menu from the lobby that's the rightmost
column in the upcoming tournaments area.  The leftmost column is the
check-box that you use to join.  The rightmost column is a down
chevron that has a drop-down menu associated with it.  When a
tournament uses lammers, that drop-down allows you to specify how many
of the lammers you want to redeem before the start of the first hand.

### Manual Redemption During The Game

The redeem command (requires use of the command text box) takes a
single numeric argument that specifies how many lammers you wish to
redeem (e.g., `redeem 2`).

If you are in a hand, the redemption will happen at the end of that
hand.  If you have a redemption scheduled for the end of the hand and
you change your mind you can use `redeem 0`.

If you're not in a hand, the redemption will happen immediately and can
not be reverted.

### Resurrection

If you bust and you have one or more lammers left, exactly one lammer
will be cashed in and you'll be back in the game with the amount of
chips that lammer is worth.

### Forced Redemption

Typically there's a final level where lammers are allowed and if you
finish that level, all lammers you have are redeemed for you (and all
your opponents) automatically.
