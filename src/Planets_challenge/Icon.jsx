import StarIcon from "@mui/icons-material/Star";


export default function Icon({left, top,right, ...props}){
    return <>
    {console.log(top)}
    <StarIcon
        {...props}
        style={{
          fontSize: 40,
          position: "absolute",
          color: "beige",
          left: left,
          top: top?top:undefined,
          right: right?right:undefined,
          cursor: "pointer",
        }}
      />
    </>
}