# comparePbList

compare two different sutra and generate a list

##Useage

```javascript
var comparePbList = require('compare-pb-list');
var out = comparePbList(text, comparedSutraName)
/* out
{ '1.1a': { DG: { pb: '1.1a', pos: 0, length: 3 } },
  '1.1b': { DG: { pb: '1.1b', pos: 0, length: 4 } },
  '1.2a': { DG: { pb: '1.1b', pos: 494, length: 4 } },
  '1.2b': { DG: { pb: '1.2a', pos: 837, length: 5 } },
  '1.3a': { DG: { pb: '1.2b', pos: 1217, length: 5 } },
  ......
}
*/
```
###output type
```javascript
{
  sutra page : {
    compared sutra name : {
      pb : compared sutra page,
      pos: compared  text position,
      length : compared text length 
    }
  }
}
```
