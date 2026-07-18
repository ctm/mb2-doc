# Native Apps

Experimental native apps are built and made available on GitHub at:

* [https://github.com/ctm/mb2-doc/releases/latest](https://github.com/ctm/mb2-doc/releases/latest)

Native Apps are just one feature [Coming "Soon"](coming-soon.md), but
they have enough caveats that they get this, their own, section in
this manual.

All the native Mb2 apps have been made using
[Tauri](https://v2.tauri.app/).

## Caveats

### Microsoft Defender will object to the Windows Installer

If you run Mb2_x86-setup.exe, you'll be told:

> Windows protected your PC
>
> Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.
>
> More info

and only given a "Don't run" button in the lower right of the warning window.

"More info", however, will be a link and if you click on it, you'll be
told that the Publisher is an "Unknown publisher" and be given a "Run
anyway" button. So, you'll have to click "More info" and then "Run
anyway" if you want to use the native Windows app until we get
recognized by Azure as an official publisher, which is something we're
in the [process of doing](https://github.com/ctm/mb2-doc/issues/1940).


### Lobby <-> Table switching is horrible on phones and tablets

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

### More

There are several [issues tagged as
`Tauri`](https://github.com/ctm/mb2-doc/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Tauri%22)
in Mb2's issue tracker. I'm sure as more people use the native apps
that the list will grow, but painful issues or popular requests will
typically be fixed soonest. The issue tracker will typically have a
lot of nits just so issues don't completely fall through the cracks.


## The Filenames

The latest builds are at [https://github.com/ctm/mb2-doc/releases/latest](https://github.com/ctm/mb2-doc/releases/latest)

There's no need to run older versions. They probably won't work and
I'll be deleting them soon.

|OS|Arch|Filename|
|--|----|--------|
|iOS|arm64|Mb2.ipa|
|macOS|arm64|MB2_aarch64.dmg|
|Windows|x86_64|Mb2_x64-setup.exe|
|Android|arm64|app-arm64-release.apk|
|Android|arm|app-arm-release.apk|
|Android|x86_64|app-x86_64-release.apk|
|Android|x86|app-x86-release.apk|
