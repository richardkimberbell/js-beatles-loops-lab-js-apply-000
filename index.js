// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr=[]
  var n
  for(n=0; n<musicians.length; n++) {
    arr.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return arr
}
function johnLennonFacts(facts) {
  var arr=[]
  var n
  for(n=0;n<facts.length;n++) {
    arr.push(`${facts[n]}!!!`)
  }
  return arr
}