/*
global
  CONTENTFUL_SPACE,
  CONTENTFUL_TOKEN
*/

import { createClient } from 'contentful'

const contentfulClient = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN
})

export const getEntriesByContentType = (contentType) => {
  return contentfulClient
    .getEntries({ content_type: contentType })
    .then(processContentfulResponse)
    .catch(console.error)
}

export const getEntryById = (id) => {
  return contentfulClient
    .getEntries({ 'sys.id': id, include: 5 })
    .then(processContentfulResponse)
    .then(entries => entries && entries.length && entries[0])
    .catch(console.error)
}

function isGetter (obj, prop) {
  return !!Object.getOwnPropertyDescriptor(obj, prop)['get']
}

const processContentfulResponse = (response) => {
  if (response.items && !Array.isArray(response.items)) {
    return response.items.fields
  }

  const newContentfulObject = response.items.map(
    entry => {
      const obj = {}
      Object.keys(entry.fields || {})
        .map(prop => {
          if (isGetter(entry.fields, prop)) {
            obj[prop] = processContentfulResponse({ items: entry.fields[prop] })
          } else {
            obj[prop] = entry.fields[prop]
          }
        })
      return obj
    }
  )

  return newContentfulObject
}
