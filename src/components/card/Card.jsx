import MyComponent from "../MyComponent/MyComponent";

function MyCard(props) {

  return (
    <section style={{
      width: "20vw",
      background: "#E3E3E3",
      padding: "5px",
      minWidth: "170px",
      maxWidth: "240px",
      borderRadius: "16px",
      height: "fit-content"
    }}>
    <div style={{
      height: "200px",
      marginBottom:"20px"
    }}>
        <MyComponent url={props.src}/>
    </div>
    <div className="text-center p-2" style={{fontSize: "15px"}}>
      {props.title}
    </div>
    <div className="d-flex justify-content-around p-1" style={{
      marginBottom:"20px"

    }}>
        <div className="d-flex align-items-center">
          {props.price}
        </div>
        <div className="d-flex fs-5 align-items-center fw-light" style={{gap: "1px"}}>
        <div style={{borderRadius: "34px 0 0 34px", background: "#FEEEFF", width: "30px", display: "flex", justifyContent: "center", height: "70%", alignItems: "center"}}>+</div>
        <div style={{borderRadius: "0 34px 34px 0", background: "#FEEEFF", width: "30px", display: "flex", justifyContent: "center", height: "70%", alignItems: "center"}}>-</div>
        </div>
    </div>
    </section>
  );
}

export default MyCard;