import ImageStyle from './ImageStyle';


const Image =({value, name})=>{
    return(
        <ImageStyle>
            <img src={value} alt={name}/>
        </ImageStyle>
    )
}

export default Image;