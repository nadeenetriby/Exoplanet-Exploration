import StarIcon from "@mui/icons-material/Star";

export default function Planet3_stars({setOpen, setIndex}){
    const handleClickOpen = (indexx) => {
        setOpen(true);
        setIndex(indexx);
    };

    return(
        <>
           <StarIcon
        onClick={() => handleClickOpen(0)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          left: "310px",
          top: "250px",
          cursor: "pointer",
        }}
      />
      {/* <Icon 
        onClick={() => handleClickOpen(0)}
        top="250px" left = "340px"></Icon> */}
      <StarIcon
        onClick={() => handleClickOpen(1)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          left: "635px",
          top: "145px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(2)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "582px",
          top: "240px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(3)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "240px",
          top: "145px",
          cursor: "pointer",
        }}
      />
      <StarIcon
        onClick={() => handleClickOpen(4)}
        style={{
          color: "gold",
          fontSize: 40,
          position: "absolute",
          color: "beige",
          right: "40px",
          top: "310px",
          cursor: "pointer",
        }}
      />
        </>
    )
}