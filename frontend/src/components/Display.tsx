
type DisplayProps = {
    transcript: string
}

const Display = ({transcript} : DisplayProps) => {
  return (
    <>
        <p>
            {transcript}
        </p>
    </>
  )
}

export default Display