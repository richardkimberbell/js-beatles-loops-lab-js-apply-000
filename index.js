// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr=[]
  for(n=0, n<musicians.length, n++) {
    arr.push(`${musicians[n]} plays the ${instruments[n]}`)
  }
  return arr
}