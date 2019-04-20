// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr=[]
  var n
  for(n=0; n<musicians.length; n++) {
    arr.push(`${musicians[n]} plays ${instruments[n]}`)
  }
  return arr
}