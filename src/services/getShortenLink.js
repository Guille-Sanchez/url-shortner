async function getShortenLink (linkToShort) {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkToShort}`)
  const data = await response.json()
  return ({
    short_link: data.result.full_short_link,
    original_link: data.result.original_link
  })
}

export default getShortenLink
