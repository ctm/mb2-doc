# Privacy

At the time this page was written, every detail was correct.  However,
while mb2 is still under rapid development, there's a chance that some
of the information on this page may inadvertently become outdated.
So, don't bet your life&mdash;or anyone else's&mdash;that the
information here is correct.

Everyone's privacy is important to the developers of mb2. As such, mb2
does not use cookies.  Mb2 does, however, use your browser's session
storage and local storage to keep track of your being logged in and
connected to tables.  So, were your computer to be forensically
examined, it would be possible to tell that you've been connected to
mb2.

In addition to session storage and local storage, a proof-of-concept
feature allows players to [load images to be used as their buttons](tables/customizable-buttons.md).
These images are never sent to the mb2 server, instead the loading is
client-side only.  Each button image that is loaded is stored on in
the
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
of the browser where it is loaded.  If no buttons are loaded,
nothing is stored in the IndexedDB.

Mb2 logs almost all traffic between the client and the server.  The
exception is that your login credentials are not logged. These logs
are used for debugging and are currently retained forever.

Mb2 uses Cloudflare as a content delivery network, but the WebSockets
that connect your lobby and table pages to the server do not run
through Cloudflare.

Mb2 currently runs on AWS (Amazon Web Services). The initial
connection your browser makes to mb2 runs through an AWS Application
Load Balancer (ALB) which decrypts that initial HTTPS connection.
However, the successive connections your browser makes to mb2's server
run on WebSockets and the WebSocket connections do not go through an
ALB. These WebSockets are WSS encrypted and the traffic is decoded on
the AWS instance running mb2 (i.e., it is not decrypted at the Load
Balancer). Authentication credentials (e.g. your password's hash) are
only passed through the WebSockets.

### GitHub Authentication

As a proof-of-concept, mb2 allows players to create accounts using
GitHub's [OAuth](https://oauth.net/) server.  Nobody is required or
even encouraged to use this obscure feature. It exists simply to make
sure that mb2's authorization subsystem supported OAuth. It is likely
that other OAuth servers will also be supported as options for
authorizing, but mb2 will never require an account to be created via
OAuth.  So, if you don't want Microsoft knowing you're using mb2,
don't use the GitHub Authentication.
