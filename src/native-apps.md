# Native Apps

Experimental native apps are built and made available on GitHub at:

* [https://github.com/ctm/mb2-doc/releases/latest](https://github.com/ctm/mb2-doc/releases/latest)

Native Apps are just one feature [Coming "Soon"](coming-soon.md), but
they have enough caveats that they get this, their own, section in
this manual.

All the native Mb2 apps have been made using
[Tauri](https://v2.tauri.app/).

There's a lot of jargon on this page which you may not understand.  If
that's an impediment, you should wait before using the native
apps. _Currently_, they truly are for ~~guinea pigs~~ very early
adopters. As time goes on, they'll get easier to install and use and
eventually appear in app stores.

As a proof-of-concept and to make using native Mb2 more pleasant, the
first native-only feature I've added is the ability of Mb2 to securely
store the nickname and password between sessions, using Face ID on an
iPhone or equivalent OS-supported secure storage (e.g., Keychain on
macOS).  I did this using [DecentPaste](https://decentpaste.com/)'s
[DecentSecret Tauri
Plugin](https://github.com/decentpaste/decentpaste/tree/main/decentpaste-app/tauri-plugin-decentsecret#tauri-plugin-decentsecret). Unfortunately,
the macOS implementation [isn't currently
working](https://github.com/ctm/mb2-doc/issues/1833) for me, so YMMV.

## Caveats

### [No automatic updater](https://github.com/ctm/mb2-doc/issues/1869)

When the Mb2 server is updated, the web client automatically updates
at the same time. The Native Apps at GitHub are also updated,
but there is nothing that tells the old version that you need to
update, much less an automatic updater. That means a server update
that is not backwardly compatible will silently break the native apps.
I'll add detection first and automatic updates after, but I'm currently
not making many server changes, because I'm concentrating on
documenting what I have already done and looking for users and
investors.

### Lobby <-> Table switching is "sub-optimal"

The macOS and Windows native Mb2 clients use a separate window per
table.  The iOS and Android Mb2 clients have little controls that
allow the player to switch from any table to the lobby and from the
lobby to any table. That aspect is very clunky and I'll replace it
with a better lobby after more people use the native apps and
complain.

### No per-device table view preference

Mb2 can currently display a table in four different ways, regular
text, compact text, "original" graphical and "experimental" graphical.
Experimental graphical is meant for tablets and phones.  If you're
going to try a native app, you're strongly encouraged to use the Prefs
panel to select the "Experimental" table view. FWIW, new users and old
users who haven't used Mb2 in a while all get the experimental view by
default.

### iOS requires UDID

If you have an iPhone or iPad, you will be able to download the `.ipa`
file that contains the Mb2 client, but it won't work for you unless
you supply me with your UDID.

### Android has only been tested on arm64

I only have two android devices. Both are arm64.  Tauri also builds Android
for arm, x86 and x86_64. You're welcome to try them, but I haven't.

### No Linux

I'm a big fan of Linux. I first installed it from floppies.  My old
email address [ctm@ardi.com](mailto:ctm@ardi.com) was [in the Linux
kernel](https://www.google.com/search?q=ctm%40ardi.com+in+linux+kernel)
but only for microscopically small changes. However, I do not have any
experience with modern Linux GUI apps.  Tauri can build Linux apps, so
_eventually_ there will be a Linux builds.

## The Filenames

The latest builds are at [https://github.com/ctm/mb2-doc/releases/latest](https://github.com/ctm/mb2-doc/releases/latest)

Older versions may not work.

|OS|Arch|Filename|
|--|----|--------|
|iOS|arm64|Mb2.ipa|
|macOS|arm64|MB2_aarch64.dmg|
|Windows|x86_64|Mb2_x64-setup.exe|
|Windows|x86_64|Mb2_x64_en-US.msi|
|Android|arm64|app-arm64-release.apk|
|Android|arm|app-arm-release.apk|
|Android|x86_64|app-x86_64-release.apk|
|Android|x86|app-x86-release.apk|
