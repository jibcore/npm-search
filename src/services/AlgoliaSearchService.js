import algoliasearch from 'algoliasearch'

let algolia = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', {
  protocol: 'https:'
})
let npmIndex = algolia.initIndex('npm-search')

export async function search(queryString, page = 0, hitsPerPage = 10) {
  return Promise.resolve().then(() => {
    let parsed = parseQuery(queryString)
    let options = {
      page,
      hitsPerPage,
      attributesToHighlight: [],
      attributesToRetrieve: [
        'deprecated',
        'description',
        'githubRepo',
        'homepage',
        'keywords',
        'license',
        'name',
        'owner',
        'version',
        'popular',
        'moduleTypes',
        'styleTypes',
        'jsDelivrHits',
        'readme'
      ]
    }

    if (parsed.facetFilters) {
      options.facetFilters = parsed.facetFilters
    }

    return npmIndex.search(parsed.query, options)
  })
}

const ATTR_REGEXP = /\s*(?:[a-z]+)\s*:\s*(?:.(?![a-z]*\s*:))*/gi
const QUERY_REGEXP = /^((?:(?:[^\s:]+(?![a-z]*\s*:))\s*)*)/i
const filterMapping = {
  author: 'owner.name',
  type: 'moduleTypes',
  style: 'styleTypes'
}

function parseQuery(queryString) {
  let query = queryString.match(QUERY_REGEXP)[0].trim()
  let substr = queryString.substr(query.length)
  let filters = []
  let match

  while ((match = ATTR_REGEXP.exec(substr)) !== null) {
    let temp = match[0].split(':')

    if (filterMapping[temp[0].trim()]) {
      filters.push(filterMapping[temp[0].trim()] + ':' + temp[1].trim())
    }
  }

  return {
    query,
    facetFilters: filters.join(',')
  }
}
