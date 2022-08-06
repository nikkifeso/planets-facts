import HeadingTextStyle from './HeadingTextStyle';


const H1Text =({value,color,size, weight})=>{
    return(
        <HeadingTextStyle color={color} size={size} weight={weight}>
            {value}
        </HeadingTextStyle>
    )
}