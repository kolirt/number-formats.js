### Installation

```bash
npm install number-formats.js
```

### API

All available modules

- [shortNumber](#shortNumber)

#### shortNumber
```js
import {shortNumber} from 'number-formats.js'
// or
let shortNumber = require('number-formats.js').shortNumber

// shortNumber(number, names = ['', 'K', 'M', 'B', 'T'])

shortNumber(1)             // 1
shortNumber(12)            // 12
shortNumber(123)           // 123
shortNumber(1234)          // 1.2K
shortNumber(12345)         // 12.3K
shortNumber(123456)        // 123.4K
shortNumber(1234567)       // 1.2M
shortNumber(12345678)      // 12.3M
shortNumber(123456789)     // 123.4M
shortNumber(1234567891)    // 1.2B
shortNumber(12345678912)   // 12.3B
shortNumber(123456789123)  // 123.4B
shortNumber(1234567891234) // 1.2T
```
