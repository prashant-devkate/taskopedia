function MainHeader()
{
  return(
    <h1 className='heading1'>REACT Course - TaskOPedia</h1>
  )
}

function SubHeader()
{
  return <p style={{color:"black", backgroundColor:"white"}} className="text-center"> This is gonna be a exciting course </p>
}

const Header = () =>
{
  return(
    <>
    <MainHeader/>
    {/* <p>{props.coursename}</p> */}
    <SubHeader/>
    </>
  )
}

export default Header;