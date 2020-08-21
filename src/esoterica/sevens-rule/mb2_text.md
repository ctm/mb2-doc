# Mb2 Text

Mb2 automatically awards the right amount of chips to players in a
hand where the Sevens Rule is violated. However, since action is
collected prior to the showdown, the transfer of chips at the showdown
can look like players are winning chips, in a separate pot, when their
own action is returned.

In a simple case where the case where a sevens rule violator wins the
pot, the text output might look something like:

```
deadhead  2s 6c 3d Qc 5c  Queen (Q 6 5 3 2) Qc 6c 5c 3d 2s
tombayz  Mucks
gerdog  7s 3h 4s Ah 6h  Seven (7 6 4 3 A) 7s 6h 4s 3h Ah
1: deadhead wins 300
1: tombayz wins 300
1: gerdog wins 300
M: gerdog wins 900
The above includes penalties:
gerdog didn't bet a Seven (7 6 4 3 A)
So, these adjustments were made:
deadhead took back 300
tombayz took back 300
gerdog took back 300
```

Additionally, the way Mb2 _currently_ works is chips are internally
awarded based on who has the best hand, _before_ the Sevens Rule is
enforced. So, in the rare case where a violator of the Sevens Rule and
a non-violator both tie with the winning hand, in addition to a
"took back" line, there will also be a "recovered misawarded" line
that shows the difference between what would have been awarded when
the pot was split and the amount that was actually returned.

Although the correct amounts are awarded, there's plenty of room for
improvement in terms of what is displayed. Perhaps sometime in the
future it will be improved, although it's low priority.

