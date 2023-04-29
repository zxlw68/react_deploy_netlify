

const Header = ({title}) => {
         //props    props.title  object destructuring
         //{title}  title
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}


Header.defaultProps = {
  title: 'Defult Title'
}
export default Header




