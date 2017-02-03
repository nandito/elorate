export const addItem = name => ( { type: 'ADD_ITEM', payload: name } )
export const removeItem = id => ( { type: 'REMOVE_ITEM', payload: id } )
export const updateItem = ({ id, name, score }) => ({
  type: 'UPDATE_ITEM',
  payload: {
    id,
    name,
    score
  }
})

// TODO: set this on the frontend side
const k = 32

const transformRating = (score) => (
  Math.pow(10, (score/400))
)

const expectedScore = (r1Score, r2Score) => (
  r1Score / (r1Score + r2Score)
)

const getNewRating = (currentRating, k, actualScore, expectedScore) => (
  currentRating + k * (actualScore - expectedScore)
)

const getNewRatings = (p1, p2, isDraw) => {
  const p1TransformedRating = transformRating(p1.score)
  const p2TransformedRating = transformRating(p2.score)
  const p1ExpectedScore = expectedScore(p1TransformedRating, p2TransformedRating)
  const p2ExpectedScore = expectedScore(p2TransformedRating, p1TransformedRating)
  const p1ActualScore = isDraw ? 0.5 : 1
  const p2ActualScore = isDraw ? 0.5 : 0
  const p1NewRating = getNewRating(p1.score, k, p1ActualScore, p1ExpectedScore)
  const p2NewRating = getNewRating(p2.score, k, p2ActualScore, p2ExpectedScore)

  return [p1NewRating, p2NewRating]
}

export const win = (winner, loser) => {
  // https://metinmediamath.wordpress.com/2013/11/27/how-to-calculate-the-elo-rating-including-example/
  const newScores = getNewRatings(winner, loser, false)

  winner.games += 1
  winner.wins += 1
  winner.score = newScores[0]

  loser.games += 1
  loser.losses += 1
  loser.score = newScores[1]

  return {
    type: 'WIN',
    payload: {
      player1: winner,
      player2: loser
    }
  }
}

export const draw = (player1, player2) => {
  const newScores = getNewRatings(player1, player2, true)

  player1.games += 1
  player1.score = newScores[0]

  player2.games += 1
  player2.score = newScores[1]

  return {
    type: 'DRAW',
    payload: {
      player1,
      player2
    }
  }
}

export const skip = (player1, player2) => {
  player1.games += 1
  player2.games += 1

  return {
    type: 'SKIP',
    payload: {
      player1,
      player2
    }
  }
}

export const pickElementsToRate = (allItems) => {
  let selectedItems

  if (allItems.length < 2) {
    selectedItems = null
  }
  else {
    selectedItems = allItems.sort((a, b) => (a.games > b.games)).slice(0,2)
  }

  return {
    type: 'PICK_ELEMENTS_TO_RATE',
    payload: {
      selectedItems
    }
  }
}
