function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  return
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  return
}

function sayHiToGrandma(string) {
  
  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
  
  if(string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  
  if(string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  
  return
}