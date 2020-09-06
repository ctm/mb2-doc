# Table Balancing

When there are three or more tables in a tournament, mb2 will keep the
player counts of each table within two of each other. It will do this
by moving one player at the end of the hand from a table that has more
than two more players than the smallest table.  The player that is
moved will be the player that has the worst position (e.g., about to
take the big blind). That player will be moved into the worst
position.  As such, that player will not move into a worse position
than that player would have been in anyway.

When there are enough empty seats to accommodate all the players in the
smallest table, that table will be broken. The players at the broken
table will be assigned to other tables at random.

When there are two tables, mb2 will keep the player counts of each of the
two tables within one of each other.  It will rebalance the same way
that is done when there are more than two tables.
