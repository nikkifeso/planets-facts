import styled from "styled-components";
import Colours from "../../../../helpers/colours";

const HeadingTextStyle = styled.h2`
    color: ${props => props.color === 'grey' ? Colours.darkGrey : Colours.white};
    font-family: ${props => props.size === 'small' || 'medium' ? 'Antonio' : 'Spartan'};
    font-weight: ${props => props.weight === '700' ? '700' : '400'};
    font-size: ${props => props.size === 'small' ? '11px':
                 props.size === 'medium' ? '12px':
                 props.size === 'large' ? '40px': '80px'};
    line-height: ${props => props.size === 'small' ? '25px':
                    props.size === 'medium' ? '25px':
                    props.size === 'large' ? '52px': '103px'};
    letter-spacing: ${props => props.size === 'small' ? '1':
                    props.size === 'medium' ? '2.6':
                    props.size === 'large' ? '-1.5': 'normal'};
    text-transform: uppercase;

`

export default HeadingTextStyle