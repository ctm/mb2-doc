# Mb2

Mb2 is my successor to multibot. The thought of creating a new poker ecosystem
rumbled around in my brain for a while. In 2019, three days after running
the Boston Marathon, I pulled the trigger:
```
commit 7f1967bef45762774fcee34e24e2afa8a4215ddb
Author: Clifford T. Matthews <ctm@devctm.com>
Date:   Thu Apr 18 15:51:25 2019 -0600

    output of cargo new poker
```

### BARGE deadheads

On May 7th, I shared my thoughts, concerns and need for play-testers
with the BARGE deadheads. I sent out an email with "return, maybe, of
IRC poker, sort of" as the subject and I got great feedback.

### [WRGPT](http://wrgpt.org/)

Although I knew how to play poker and have written a poker server
before, I knew that my mind might forget various edge cases, so one of
the first things I did was write a parser to allow me to read all the
hand histories from the most recent WRGPT.

I had wanted to do the same using IRC poker histories, but I couldn't
find any.  I wasn't even successful at finding documentation for the
IRC poker commands, so I leaned on the WRGPT advanced action documentation
when my memory was insufficient as I created mb2's underlying protocol.

### LFromHell

The earliest version of mb2 used IRC as an interface and LFromHell was
essentially my only play-tester.  Others stepped in and tried it here and
there, but she came out regularly and even brought a friend or two.  Her
early support was critical to me getting mb2 off the ground.

### C. Meck and the [BARGE Rule Book](https://www.ceemeck.org/BARGERuleBook2021/)

Multibot only dealt a few games. I wanted mb2 to be more flexible, so
I implemented all of the games in the BARGE Rule Book, maintained by
Christoper J. Mecklin.

### Rich Bremer

Similarly, I wanted mb2 to be able to support a variety of tournament
structures, so I implemented the most recent tournament structures
dealt at BARGE and EMBARGO. They were created by Rich Bremer.

### Patrick Milligan

Patrick created mb2's deck.

### gerdog

Back when mb2 was still text only, gerdog started playing in our daily
tournaments. There have been other players who have played quite a
bit, but gerdog has been a constant presence and has provided many
good suggestions.

### Dave Tall

As I added a little bit of sound, here and there, to mb2, I poked
around and found various CC0 files to use. However, Dave Tall, a
fellow Albuquerquean played his trumpet and recorded the game-change
fanfare and donated it to mb2.

### CC0 creators

Although mb2 is not currently stylized and most of the assets are
place-holders, I am thankful that people create "CC0" works that are I
can add to mb2.


|Name|Link|Asset|
|----|----|-----|
|[JensZygar](https://freesound.org/people/JensZygar/)|[Gong Brilliant Paiste 32"](https://freesound.org/people/JensZygar/sounds/486629/)|New Tournament sound|
|[s-cheremisinov](https://freesound.org/people/s-cheremisinov/)|[Click_06.wav](https://freesound.org/people/s-cheremisinov/sounds/401084/)|Running Late sound|
|[s-cheremisinov](https://freesound.org/people/s-cheremisinov/)|[Click_07.wav](https://freesound.org/people/s-cheremisinov/sounds/401085/)|Your Turn sound|
|[deathpie](https://freesound.org/people/deathpie/)|[shuffle.wav](https://freesound.org/people/deathpie/sounds/19245/)|Shuffle sound|
|_unknown_|sound-effects-library-applauding.mp3|Player Bust sound|
|[Siddharth Parmar](https://github.com/Siddharth11)|[CSS3 Loaders](https://codepen.io/Siddharth11/pen/xbGrpG)|Loading spinner|

### Ed Baker

Although I'm currently the sole programmer working on mb2, I use
GitHub's issue tracker to log what I need to do and what I've done.
Although mb2 itself is closed-source, I have a public
[mb2-doc](https://github.com/ctm/mb2-doc) GitHub repository and that's
where I track mb2 issues.

For whatever reason, Ed has chosen to watch that repository and every
once in a while he comments on an issue, typically in commiseration.
To a large extent I try to live my life as though someone were
watching me, in other words, I behave well even when nobody can see
that I'm doing so. However, knowing that Ed may be following my
commentary gives me a mental boost that I wouldn't have anticipated.