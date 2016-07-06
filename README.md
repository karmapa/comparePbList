# comparePbList

compare two different sutra and generate a list

##Useage

```javascript
var comparePbList = require('compare-pb-list');
var out = comparePbList(text)
/* out
{ '1.1a': { pb: '1.1a', pos: 0, length: 3 },
  '1.1b': { pb: '1.1b', pos: 0, length: 4 },
  '1.2a': { pb: '1.1b', pos: 494, length: 4 },
  '1.2b': { pb: '1.2a', pos: 837, length: 5 },
  '1.3a': { pb: '1.2b', pos: 1217, length: 5 },
  ......
}
*/
```
###output type
```javascript
{
  sutra page : {
    pb : compared sutra page,
    pos: compared text position,
    length : compared text length 
  }
}
```
