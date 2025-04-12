import KgButton from "./KgButton";

function Random() {
  let number=Math.floor(Math.random() * 100) + 1;
  return (
    <div>
      <p style={{backgroundColor:'#776691'}}>This is the random page number is {number}</p>
      <KgButton />
    </div>
  );
}
export default Random;
