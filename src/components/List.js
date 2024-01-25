let url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpDhXyLGJUyWALd5KRgKy-jrrHMgp0IwIPqhBBcb6zQ&s";
let info = "Dakeeva Madina";
let skill = 'Навыки'
export function Heder() {
    return (
      <div>
        <img src={url} alt="picture" width="200" />
        <h3>{info}</h3>
        <h4>{skill}</h4>
      </div>
    );
  }

  export function Skills() {
  let List = ['Html', 'Css', 'JS']
  return(
  <>
    <ol>
    {List.map((element) => (
      <li>{element}</li>))}
    </ol>
  </>
  )
}