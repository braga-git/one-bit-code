import { inline as i } from "./inline.js"
import defaultInLine from "./inline.js" // só pode ter um export default - pode ser função anônima

// import { group } from "./non-inline.js"
// import exportDefault from "./non-inline.js" 

import exportDefault, { group } from "./non-inline.js"

i()
defaultInLine()

group()
exportDefault()