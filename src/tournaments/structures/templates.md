# Templates

Each tournament is governed by a structure, like you would see on a
structure sheet.  The information in a structure is a combination of
information that is stored in a structure template and parameters that
are customized, typically by choosing values in the creation dialog.

Mb2 does not yet have the ability to create structure sheets, but the
first step toward doing that is to provide a human readable version of
structure templates.  The beginning of that functionality was introduced
at the end of April, 2024.

## Structure Sheet ETA

Structure sheets are planned to be available by the start of the
WSOP-Style Series, May 28th.

## Differences between Structure Templates and Sheets

### Level Durations

One difference is that in a structure template, level durations are a
value that is multiplied by the duration of the first level, whereas
in a structure sheet, level durations are in minutes.

Typically, daily tournaments are created with five minute levels, so
the structure template uses a five minute first level as an example,
but it is possible to create tournaments with longer or shorter first
levels.  All other levels then scaled by the factor provided in
the structure template.

So, if the scaling factor for levels four through
seven is 1.5 and a tournament is made with a ten minute first level,
levels four through seven would be fifteen minutes long.

### Customizable Parameters

Several structure sheet items do not come from the template. So,
although they will be on structure sheets&mdash;when structure sheets
are implemented&mdash;they are not on structure templates:

* Buy-in
* Bounties
* Comment 
* Starting Criteria
* Seconds to Act
* Calling Time Criteria
* Synchronized Breaks (i.e., whether to use)
* Late Registration

Thank you for your patience and understanding.
