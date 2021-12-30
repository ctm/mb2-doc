# Programming Poker on the internet

I do not remember whether I found IRC poker before or after I found Roy's
C library for evaluating poker hands, but they both were a pleasant
distraction from the Macintosh emulation and reverse engineering that
occupied the vast majority of my time in the early nineties.

## Hand Evaluators

### Roy Hashimoto

Roy wrote C software to evaluate poker hands and to iterate through a deck
to compute various odds.  I, and others, found various ways to speed up
Roy's code.

### Mat Hostetter

Mat observed that there was a lot of information to be gained by
viewing a hand as four 13-bit numbers (each 13-bit number
representing the ranks present for each of the four suits) and then
doing a bitwise-or of those four numbers. With Hostetter's Observation
he was able to code up what was the fastest hand evaluator at the
time.  I did some of the grunt work.

### Steve Brecher

Steve also did some poker programming and it was always a delight to bounce
idead off of him.

### Michael Maurer and Brian Goetz

Michael and Brian created what was at the time the most elaborate library
of hand evaluators and related software.

### Andrew Prock

Andrew took on and conquered some of the combinatorical explosions
that crop up when doing enumerations.  He used techniques that
generated perfect odds but called the enumerators far fewer times.
His pokerstove was (and presumably still is) the fastest calculator of
such odds.
