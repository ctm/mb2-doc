# Security

Some of mb2's [privacy](./privacy.md) features also provide a modicum
of security. Specifically, your password and all of your actions are
encrypted by your web browser and decrypted only inside mb2.
Similarly, your hole cards are encrypted by mb2 and only decrypted by
your browser.

Although mb2 logs your actions and your hole (or other down) cards,
those logs remain in mb2's memory until the hand is over. Only after
the hand has finished is that information logged to mb2's database.
Mb2 uses an Amazon RDS PostgreSQL Database instance that is encrypted
at rest.  Mb2 communicates with its database using SSL.

Your password is never stored.  Instead, a hash of your password is
stored.  That is sufficient for mb2 to be able to tell if you have
provided your password when you sign in. However, your password can
never be recovered, although it can be reset.

During development, mb2 uses
[`thread_rng`](https://rust-random.github.io/book/guide-rngs.html?highlight=thread_rng#our-rngs)
from the [rand crate](https://docs.rs/rand/0.8.3/rand/) (crates are
essentially Rust libraries. Rust is the language mb2 is written
in). The authors of `thread_rng` believe it to be [cryptographically
secure](https://rust-random.github.io/book/guide-gen.html#cryptographically-secure-pseudo-random-number-generator).