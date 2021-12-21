# Privacy

At the time this page was written, every detail was correct.  However,
while mb2 is still under rapid deployment, there's a chance that some
of the information on this page may inadvertently become outdated.  As
such, don't bet your life&mdash;or anyone else's&mdash;that the
information here is correct.

Everyone's privacy is important to the developers of mb2. As such, mb2
does not use cookies.  Mb2 does, however, use your browser's session
storage and local storage to keep track of your being logged in and
connected to tables.  As such, were your computer to be forensically
examined, it would be possible to tell that you've been connected to mb2.

Mb2 logs almost all traffic between the client and the server. These
logs are used for debugging and are currently retained forever.  Mb2
uses Cloudflare as a content delivery network, but the WebSockets that
connect your lobby and table pages to the server do not run through
Cloudflare. Mb2 currently runs on AWS (Amazon Web Services). The
initial connection to mb2 runs through an AWS Application Load
Balancer (ALB) which decrypts the HTTPS connection initially made, but
the WebSockets themselves (through which your password is transferred)
do not go through an ALB and as such the WSS encrypted traffic is
decoded on the AWS instance running mb2.

