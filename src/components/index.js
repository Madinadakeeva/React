let Contact = 'Контактная информация'
export function Contacts() {
    let List1 = ['E.mail', 'GitHub', 'проживание г.Караганда']
    return(
    <>
    <h4>{Contact}</h4>
      <ul>
        {/* <h4>{Contact}</h4> */}
        {List1.map((element) => (<li>{element}</li>))}
      </ul>
    </>
    )
  }