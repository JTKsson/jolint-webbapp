'use client'

const HowItWorks = ({ data }) => {
  return (
    <>
      <h1>How it works</h1>
      {data.map((item, index) => (
        <section key={index}>
          <img className="image" src={item.image} />
          <div className="textContent">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </section>
      ))}
    </>
  )
}
export default HowItWorks
