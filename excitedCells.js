const state = {
  0: 'quiet',
  1: 'excited',
}

const checkExcitedNeighbors = (cells, positionNumber) => {
  let counter = 0

  if (positionNumber === 0) { 
    cells[cells.length - 1] === 1 ? counter++ : null
    cells[positionNumber + 1] === 1 ? counter++ : null
  }
  else if (positionNumber === cells.length - 1) {
    cells[positionNumber - 1] === 1 ? counter++ : null
    cells[0] === 1 ? counter++ : null
  }
  else {
    cells[positionNumber - 1] === 1 ? counter++ : null
    cells[positionNumber + 1] === 1 ? counter++ : null
  }
  return counter
}

const convert = (counterArray) => {
  let newArray = []
  counterArray.map((counter) => {
    counter === 0 || counter === 2 ? newArray.push(0) : newArray.push(1)
  })
  return newArray
}

const excitedCells = (cells, k) => {  
  if (k === 0) return console.log(cells)
  else {
    let counterArray = []

    for (let i = 0; i < cells.length; i++) {
      let counter = checkExcitedNeighbors(cells, i)
      counterArray.push(counter)
    }
    let newArray = convert(counterArray)
    return excitedCells(newArray, k - 1)
  }
}

const sensitiveCells = [1, 0, 1, 1]
const kSteps = 2
excitedCells(sensitiveCells, kSteps)