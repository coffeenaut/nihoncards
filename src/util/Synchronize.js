import minimist from 'minimist-lite';
import fs from 'fs'
import Dictionary from '../data/headstart.json' assert {type: "json"}


let args = minimist(process.argv.slice(2))
const generateFilters = args.f
const dataPath = "./src/data/output/"
const merge = (a, b, predicate = (a, b) => a === b) => {
    const c = [...a]; // copy to avoid side effects
    // add all items from B to copy C if they're not already present
    b.forEach((bItem) => (c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)))
    return c;
}
const getAllTags = () => {
    let tags = []
    Dictionary.forEach(term => {
        tags = merge(tags, term.tags)
    })
    return tags
}
function writeObjectToFile(object, filename) {
    const outfile = dataPath + filename
    const outString = JSON.stringify(object, null, 2)
    // const outString = JSON.stringify(object)
    fs.writeFileSync(outfile, outString, err => {
        if (err) {
          throw err
        }
      });
}
//main
if(generateFilters) {
    const tags = getAllTags()
    let filters = [{"tag": "alphabet", list: []}]
    tags.forEach(tag => {
        let results = []
        results = merge(results, Dictionary.map( (m, i) => m.tags.indexOf(tag) > -1 && i).filter(x=> x))

        if(tag.length < 2) // letter case
            filters[0].list.push({tag: tag, list: results})
        else
            filters.push({tag: tag, list: results})
    })
    writeObjectToFile(filters, "Filters.json")
}

