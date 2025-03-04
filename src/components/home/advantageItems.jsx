export default function AdvantageItem(props) {
  return (
    <div className="col">
      <div className="card  h-100">
        <img
          src={require(`../../assets/img/${props.data.img}`)}
          className="card-img-top"
          alt="aibolit"
          title={props.data.title}
        />
        <div className="card-body">
          <p className="card-text">{props.data.title}</p>
        </div>
      </div>
    </div>
  );
}
