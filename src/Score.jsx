const Score = (props) => {
  return ( 
    <>
      <div>
        <h5>{props.score.date}</h5>
        <p>{props.score.score}</p>
      </div>
    </>
  )
}

export default Score;