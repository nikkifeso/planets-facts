import HeadingTextStyle from './HeadingTextStyle';


const HeadingText =({value,color,size, weight})=>{
    return(
        <HeadingTextStyle color={color} size={size} weight={weight}>
            {value}
        </HeadingTextStyle>
    )
}

export default HeadingText;