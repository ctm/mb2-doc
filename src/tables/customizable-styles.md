# Customizable Styles

Similar to [customizable backgrounds](customizable-backgrounds.md), if you
also hold the Alt-key down when you shift-click on a background, you get 
a picker that allows you to upload CSS or SASS that can change the appearance
of a table.

Before you do so, you should upload a custom button or background and
then use web developer tools to delete it, just to be sure you can do
so, because an unwanted style-sheet is going to be much more annoying
than an unwanted button or background.

This is proof-of-concept, only. The format of a stylesheet is not
documented, nor is it stable. However, this is the style sheet used:
<a href="customizable-styles/table.scss" download>table.scss</a>. At
the end of that file there are two css rules currently commented out
by a multi-line comment:
```
/*
button.fold {
    text-indent: -9999px;
    line-height: 0;
}

button.fold::after {
    content: "Foldem";
    text-indent: 0;
    display: block;
    line-height: initial;
}
*/
```
If you delete the `/*` line and the `*/` line and then use Alt-shift-click to
install the resultant file, the "Fold" button will say "Foldem".  If you change
```
.pushable.std {
    background: #FB0F0C;
}
```
to
```
.pushable.std {
    background: black;
}
```
you'll get black buttons, etc.

E.g., after doing both:
<img src="customizable-styles/black-foldem.png" />
