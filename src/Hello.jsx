function Hello(){
  let myName="Saurabh";
  let fullName=()=>{
    return 'Saurabh';
  }

  return (
      <div>
          <h3>Hello, World!.This is the future speaking. I am ur master {fullName()}</h3>
      </div>
  );
}
export default Hello;