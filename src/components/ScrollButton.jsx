import ScrollToTop from "react-scroll-to-top";

function ScrollButton() {
  return (
    <div>
      <ScrollToTop 
      smooth 
      svgPath= "M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"
    viewBox="0 0 115.4 122.88"      
    style={{borderRadius:"25px",
        width:"30px",
        height:"30px",
      transition:"1s all ease",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
      }} />
    </div>
  );
}

export default ScrollButton;