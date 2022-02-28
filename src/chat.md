# Chat

The lobby and the table windows allow you to type messages.

Messages typed in the lobby can be seen by anyone logged in or anyone
who logs in in the next twenty-four hours.

Messages typed in tables can be seen by anyone playing at or
observing those tables.  Observers can be logged in or anonymous.

All chat is preceded by the nickname of the author of the chat. Normal
messages then have a colon before the message. Action messages do not
have the colon.

## Special Formatting

### Action Messages

If you preface your message with "/me ", your message will be
displayed in italics.  E.g., if I type 
> /me applauds

the output will be 

> _deadhead applauds_

### Links

You can create a link that other people can click on by surrounding the
label for the link in `[]` and then, with no space after the closing `]`,
putting the complete URL within `()`.  E.g., if I type
> \[DuckDuckGo]\(https://duckduckgo.com/) is my search engine.

the output will be

[DuckDuckGo](https://duckduckgo.com/) is my search engine.

### Emojis

You can either type (or paste) emojis in as utf-8 or you can use [GitHub
emoji shortcodes](https://emojipedia.org/github/), but only for the GitHub
emojis that have a Unicode representation[^1].  E.g., if I
type
> Yup! I hit my two outer. :grinning:

the output will be

> Yup! I hit my two outer. 😀

[^1] Unfortunately, I know of no nicely structured list of that GitHub
emoji subset and the [gist that shows _all_ GitHub emoji
shortcodes](https://gist.github.com/rxaviers/7360908) leads with
:bowtie: which _does not_ have a Unicode representation. Luckily,
the vast majority of the emojis in that list are indeed represented
by Unicode.

Additionally, if you want to use that list, you might be able to tell
whether a particular emoji has a Unicode representation by hovering
your mouse over the emoji. Try doing that with the bowtie emoji and
almost any other emoji on that page and you may see that your cursor
turns to an I-beam for emojis with a Unicode representation (e.g.,
:smile:) but remains an arrow for one of the ones that doesn't work
(e.g., :bowtie:).
