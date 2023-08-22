interface Datas {
    tit:string,
    pro1:string,
    pro2:string,
    pro3:string,
    pro4:string,
    pro5:string,
    src:string,

}

function Props(prop : Datas) {
  return (
    <div className="inline-block" >
        <div className="w-80 border-solid border-2 h-48 flex">
        <img className="w-40" src={prop.src} alt="" />
        <div className="w-3/4 h-full flex flex-col justify-center">
            <h4 className="pb-2 text-lg">{prop.tit}</h4>
            <ul className="text-sm">
                <li>{prop.pro1}</li>
                <li>{prop.pro2}</li>
                <li>{prop.pro3}</li>
                <li>{prop.pro4}</li>
                <li>{prop.pro5}</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Props