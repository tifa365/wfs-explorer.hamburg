# Claude Development Notes

## Known Issues to Ignore

### Hydration Warning from Browser Extensions
The following hydration error can be safely ignored as it's caused by browser extensions adding attributes to the DOM:

```
Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
...
- cz-shortcut-listen="true"
```

This is caused by browser extensions (like productivity/shortcut tools) that modify the DOM after React hydration. The error is cosmetic and doesn't affect functionality.

## Hamburg WFS Explorer Specifics

- This version uses 468 pre-indexed WFS services from Hamburg's Open Data Portal
- Search is the primary interface, with manual URL entry as secondary option
- German is the default language for Hamburg users
- Footer attribution links to original ODIS repository