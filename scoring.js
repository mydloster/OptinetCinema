export function scoreStream(file) {
  let score = 0
  const name = file.name?.toLowerCase() || ''

  // Rozlíšenie
  if (name.includes('2160p') || name.includes('4k'))  score += 50
  else if (name.includes('1080p'))                     score += 35
  else if (name.includes('720p'))                      score += 20
  else if (name.includes('480p'))                      score += 5

  // Zdroj/kvalita
  if (name.includes('bluray') || name.includes('blu-ray')) score += 20
  if (name.includes('web-dl') || name.includes('webdl'))   score += 15
  if (name.includes('webrip'))                              score += 10
  if (name.includes('hdtv'))                                score += 8
  if (name.includes('cam') || name.includes('.ts.'))        score -= 30

  // SK/CZ jazyková preferencia
  if (name.match(/\bsk\b|\bczech\b|\bslovensky\b/i))  score += 40
  if (name.match(/\bcz\b|\bcze\b|\bczsk\b/i))         score += 35
  if (name.includes('dabing') || name.includes('dab')) score += 25
  if (name.includes('titulky') || name.includes('sub')) score += 10

  // Webshare hlasy
  score += (file.positive_votes || 0) * 2
  score -= (file.negative_votes || 0) * 3

  return score
}

export function sortStreams(streams) {
  return [...streams].sort((a, b) => scoreStream(b) - scoreStream(a))
}
