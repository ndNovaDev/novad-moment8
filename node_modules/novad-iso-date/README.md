# novad-iso-date

"Date" in Safari can only parse ISO date string like this: "2017-04-30T16:00:00.000+00:00". If give it a parameter like "2017-04-30T16:00:00.000+0000", "new Date()" will return a bad object

"novad-iso-date" can parse string like this "2017-04-30T16:00:00.000+0000"

## installation
> npm install novad-iso-date

## usage
```javascript
import ISODate from 'novad-iso-date'

var badISOString = '2017-04-30T16:00:00.000+0000'
var date = new ISODate(badISOString)

```
